"""Synchronize the approved resume's BSc dates without rebuilding its layout.

Requires PyMuPDF. The approved PDF in public/ is the layout source of truth.
"""
from pathlib import Path
import os
import re
import fitz

ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / 'public' / 'TakbirZamanBhuiyan_Resume.pdf'
TARGET = '2022 – 2026'

def sync_dates(path=OUTPUT):
    document = fitz.open(path)
    original_links = sum(len(list(page.links())) for page in document)
    changes = []
    found = False
    for page in document:
        normalized = re.sub(r'\s+', '', page.get_text(sort=True))
        if '2022–2026' in normalized:
            found = True
            continue
        for block in page.get_text('rawdict')['blocks']:
            for line in block.get('lines', []):
                for span in line['spans']:
                    chars = span['chars']
                    text = ''.join(char['c'] for char in chars)
                    if not re.fullmatch(r'2022\s*[–-]\s*202[56]', text):
                        continue
                    found = True
                    if text.endswith('2026'):
                        continue
                    char = chars[-1]
                    box = fitz.Rect(char['bbox'])
                    font = next(font[4] for font in page.get_fonts() if font[3].split('+')[-1] == span['font'])
                    changes.append((page.number, box, char['origin'], font, span['size']))
    if not found:
        document.close()
        raise ValueError('BSc date range not found; review the approved PDF before editing.')
    for page_number, box, origin, font, size in changes:
        page = document[page_number]
        page.add_redact_annot(box, fill=(1, 1, 1))
        page.apply_redactions(images=0, graphics=0, text=0)
        page.insert_text(origin, '6', fontname=font, fontsize=size, color=(0, 0, 0))
    if changes:
        temporary = path.with_suffix('.tmp.pdf')
        document.save(temporary, garbage=4, deflate=True)
        document.close()
        os.replace(temporary, path)
    else:
        document.close()
    with fitz.open(path) as result:
        text = '\n'.join(page.get_text() for page in result)
        # A replacement glyph can be extracted on its own line at the original position.
        assert len(result) == 1
        assert sum(len(list(page.links())) for page in result) == original_links
        date_text = ''.join(c for c in text if not c.isspace())
        assert '2022–2026' in date_text or '2022–2026' in ''.join(
            page.get_text(sort=True).replace(' ', '').replace('\n', '') for page in result
        )
    print(f'BSc dates synchronized to {TARGET}: {path}')

if __name__ == '__main__':
    sync_dates()

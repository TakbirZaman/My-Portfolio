"""Build the single-column, text-readable resume. Requires reportlab."""
import os
from pathlib import Path
from html import escape
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.lib import colors
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.pagesizes import A4
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer

FONT_DIR = Path(os.environ.get('RESUME_FONT_DIR', '/usr/share/fonts/truetype/dejavu'))
for font, filename in [('ResumeSans', 'DejaVuSans.ttf'), ('ResumeSans-Bold', 'DejaVuSans-Bold.ttf')]:
    pdfmetrics.registerFont(TTFont(font, str(FONT_DIR / filename)))
pdfmetrics.registerFontFamily('ResumeSans', normal='ResumeSans', bold='ResumeSans-Bold')
ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / 'public' / 'TakbirZamanBhuiyan_Resume.pdf'
NAVY = colors.HexColor('#172033')
BLUE = colors.HexColor('#3730a3')
styles = {
    'name': ParagraphStyle('name', fontName='ResumeSans-Bold', fontSize=21, leading=25, textColor=NAVY, spaceAfter=4),
    'title': ParagraphStyle('title', fontName='ResumeSans-Bold', fontSize=11, leading=15, textColor=BLUE, spaceAfter=5),
    'body': ParagraphStyle('body', fontName='ResumeSans', fontSize=9.2, leading=12.8, textColor=NAVY, spaceAfter=4),
    'small': ParagraphStyle('small', fontName='ResumeSans', fontSize=8.4, leading=12, textColor=NAVY, spaceAfter=3),
    'section': ParagraphStyle('section', fontName='ResumeSans-Bold', fontSize=10.5, leading=14, textColor=BLUE, spaceBefore=10, spaceAfter=5),
    'job': ParagraphStyle('job', fontName='ResumeSans-Bold', fontSize=9.5, leading=13, textColor=NAVY, spaceAfter=3),
}
flow = []
def p(text, kind='body'):
    flow.append(Paragraph(text, styles[kind]))
def bullet(text):
    p('&#8226; ' + text)
def link(label, url):
    return f'<a href="{escape(url, quote=True)}" color="#3730a3">{escape(label)}</a>'

p('Takbir Zaman Bhuiyan', 'name')
p('Junior Full-Stack Developer | React, Next.js &amp; Python', 'title')
p('Dhaka, Bangladesh | Open to full-time roles in Dhaka and remotely', 'small')
p(link('takbirzamanbhuiyan@gmail.com', 'mailto:takbirzamanbhuiyan@gmail.com') + ' | +880 1631-107100', 'small')
p(' | '.join([link('Portfolio & case studies', 'https://takbirzamanbhuiyan-portfolio.vercel.app'), link('GitHub: TakbirZaman', 'https://github.com/TakbirZaman'), link('LinkedIn', 'https://www.linkedin.com/in/takbir-zaman-bhuiyan/')]), 'small')
p('SUMMARY', 'section')
p('Computer Science and Engineering graduate with experience building React interfaces, REST APIs, and n8n automation workflows. Worked at WebtrixLab and completed a software engineering internship at NNSEL. Interested in junior full-stack roles connecting frontend applications with reliable backend services.')
p('TECHNICAL SKILLS', 'section')
p('<b>Core:</b> TypeScript, JavaScript, Python, SQL, React, Next.js, FastAPI, Node.js, Express')
p('<b>Data &amp; delivery:</b> PostgreSQL, MongoDB, SQLite, Git, Docker, GitHub Actions, REST APIs')
p('<b>Additional:</b> n8n, Gemini integration, MediaPipe, scikit-learn, Tailwind CSS')
p('EXPERIENCE', 'section')
p('AI Automation &amp; Full-Stack Developer | WebtrixLab | 2025-Present (Part-time)', 'job')
bullet('Build n8n workflows for messaging, content publishing, applicant screening, and job alerts using Gemini and external APIs.')
bullet('Develop web applications with Next.js, Node.js, and MongoDB; manage implementation, deployment, and debugging.')
flow.append(Spacer(1, 4))
p('Software Engineer Intern | NN Services &amp; Engineering Ltd. | Feb-May 2025', 'job')
bullet('Built reusable React components for client dashboards and integrated Node.js/Express REST APIs backed by PostgreSQL.')
bullet('Reduced unnecessary renders and redundant API calls; collaborated through sprints, code reviews, and daily standups.')
p('SELECTED PERSONAL PROJECTS', 'section')
p('TechCommerce | Next.js, TypeScript, FastAPI, SQLAlchemy | ' + link('Source', 'https://github.com/TakbirZaman/TechCommerce'), 'job')
bullet('Built a storefront and administration platform with product search, comparisons, cart workflows, and PC component compatibility checks.')
bullet('Repository includes tests for administrator authorization, invalid tokens, and audit logging.')
flow.append(Spacer(1, 4))
p('hookdesk | Python, FastAPI, SQLite, Docker | ' + link('Source', 'https://github.com/TakbirZaman/hook-desk'), 'job')
bullet('Built signed webhook ingestion, persistent queuing, background delivery, retries, and a dead-letter queue.')
bullet('Repository tests cover duplicate ingestion, signature rejection, and delivery failure handling; designed for a single-process deployment.')
flow.append(Spacer(1, 4))
p('Air Canvas | Next.js, MediaPipe, TypeScript | ' + link('Source', 'https://github.com/TakbirZaman/Air-Canvas'), 'job')
bullet('Built webcam gesture drawing with four gesture controls, undo, smooth strokes, and PNG export.')
bullet('Separated video, drawing, and cursor canvas layers so webcam refreshes preserve drawing strokes.')
p('EDUCATION &amp; RECOGNITION', 'section')
p('<b>BSc in Computer Science &amp; Engineering</b> | AIUB | 2022-2026 | CGPA: 3.76/4.00')
p("Dean's Award: Fall 2023-24 and Fall 2024-25 | Cisco IT Essentials Certification")

doc = SimpleDocTemplate(str(OUT), pagesize=A4, rightMargin=38, leftMargin=38, topMargin=30, bottomMargin=26, title='Takbir Zaman Bhuiyan - Junior Full-Stack Developer', author='Takbir Zaman Bhuiyan')
doc.build(flow)
print(OUT)

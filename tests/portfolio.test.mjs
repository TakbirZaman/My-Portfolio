import { createRequire } from "node:module";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

test("recruiter journey and email fallback", async () => {
  const require = createRequire(import.meta.url);
  const { JSDOM, VirtualConsole } = require("jsdom");
  const dom = new JSDOM('<div id="test"></div>', {
    url: "http://localhost",
    virtualConsole: new VirtualConsole(),
  });
  Object.assign(globalThis, {
    window: dom.window,
    document: dom.window.document,
    Element: dom.window.Element,
    HTMLElement: dom.window.HTMLElement,
    SVGElement: dom.window.SVGElement,
    IS_REACT_ACT_ENVIRONMENT: true,
  });
  Object.defineProperty(globalThis, "navigator", {
    value: dom.window.navigator,
    configurable: true,
  });
  class IntersectionObserverMock {
    observe() {}
    unobserve() {}
    disconnect() {}
  }
  globalThis.IntersectionObserver = window.IntersectionObserver =
    IntersectionObserverMock;
  const copied = [];
  let copyFails = false;
  Object.defineProperty(navigator, "clipboard", {
    value: {
      writeText: async (text) => {
        if (copyFails) throw Error("denied");
        copied.push(text);
      },
    },
  });
  const { createServer } = require("vite");
  const server = await createServer({
    server: { middlewareMode: true },
    appType: "custom",
  });
  try {
    const { default: Contact } = await server.ssrLoadModule(
      "/src/components/Contact.jsx",
    );
    const { default: Projects } = await server.ssrLoadModule(
      "/src/components/Projects.jsx",
    );
    const { default: Hero } = await server.ssrLoadModule(
      "/src/components/Hero.jsx",
    );
    const data = await server.ssrLoadModule("/src/data/portfolioData.js");
    const React = require("react");
    const { createRoot } = require("react-dom/client");
    const root = createRoot(document.getElementById("test"));
    const { act } = React;
    await act(async () => root.render(React.createElement(Projects)));
    const click = async (text) => {
      const b = [...document.querySelectorAll("button")].find(
        (b) => b.textContent.trim() === text,
      );
      assert(b, text);
      await act(async () => b.click());
    };
    assert.equal(document.querySelectorAll("article").length, 3);
    const titles = [...document.querySelectorAll("article h3")].map(
      (x) => x.textContent,
    );
    assert(
      titles[0].startsWith("TechCommerce") &&
        titles[1].startsWith("hookdesk") &&
        titles[2].startsWith("Air Canvas"),
    );
    assert.equal(document.querySelectorAll("details").length, 3);
    for (const study of document.querySelectorAll("details")) {
      study.querySelector("summary").click();
      assert.equal(study.open, true);
      assert.equal(study.querySelectorAll("dt").length, 5);
      assert.equal(study.querySelectorAll("ol li").length, 3);
      assert.equal(
        study.querySelectorAll('a[href^="https://github.com/"]').length,
        2,
      );
    }
    const more = [...document.querySelectorAll("button")].find((b) =>
      b.textContent.startsWith("Explore "),
    );
    await act(async () => more.click());
    assert.equal(
      document.querySelectorAll("article").length,
      data.projects.length,
    );
    await click("Show fewer projects");
    assert.equal(document.querySelectorAll("article").length, 3);
    await click("Automation");
    assert.equal(document.querySelectorAll("article").length, 2);
    assert.equal(
      document.querySelector('button[aria-pressed="true"]').textContent,
      "Automation",
    );
    await click("Full Stack");
    assert.equal(
      document.querySelectorAll("article").length,
      data.projects.filter((p) => p.category === "Full Stack").length,
    );
    await click("Selected work");
    assert.equal(document.querySelectorAll("article").length, 3);
    assert.equal(data.projects.filter((p) => p.featured).length, 3);
    assert(!JSON.stringify(data.research).match(/87\.5|95\.6|94%/));
    await act(async () => root.render(React.createElement(Hero)));
    assert(document.body.textContent.includes("Junior Full-Stack Developer"));
    assert(document.querySelector('a[href="#contact"]'));
    assert.equal(
      document.querySelector("a[download]").getAttribute("href"),
      "/TakbirZamanBhuiyan_Resume.pdf",
    );
    await act(async () => root.render(React.createElement(Contact)));
    const submit = async () => {
      await act(async () =>
        document
          .querySelector("form")
          .dispatchEvent(
            new window.Event("submit", { bubbles: true, cancelable: true }),
          ),
      );
    };
    const fill = async (id, value) => {
      const el = document.getElementById(id);
      const prototype =
        el.tagName === "TEXTAREA"
          ? window.HTMLTextAreaElement.prototype
          : window.HTMLInputElement.prototype;
      Object.getOwnPropertyDescriptor(prototype, "value").set.call(el, value);
      await act(async () =>
        el.dispatchEvent(new window.Event("input", { bubbles: true })),
      );
    };
    await submit();
    assert.equal(
      document.getElementById("contact-name").getAttribute("aria-invalid"),
      "true",
    );
    await fill("contact-name", "QA Tester");
    await fill("contact-email", "qa@example.com");
    const message = "A software role & project inquiry with + # ? symbols.";
    await fill("contact-message", message);
    await submit();
    const draft = document.getElementById("contact-draft")?.value;
    assert(
      draft?.includes(message) &&
        draft.includes("qa@example.com") &&
        draft.includes("QA Tester"),
      "Complete draft retained",
    );
    assert.equal(copied.length, 0, "No automatic copy claim");
    await click("Copy draft");
    assert.equal(copied.at(-1), draft);
    assert(document.body.textContent.includes("Draft copied."));
    copyFails = true;
    await click("Copy draft");
    assert(
      document.body.textContent.includes(
        "Could not copy the draft. Select the text above",
      ),
    );
    await click("Edit message");
    assert.equal(document.getElementById("contact-message").value, message);
    copyFails = false;
    await click("Copy draft");
    assert.equal(copied.at(-1), draft);
    const emailButton = [...document.querySelectorAll("button")].find((b) =>
      b.textContent.includes("Copy email:"),
    );
    await act(async () => emailButton.click());
    assert.equal(copied.at(-1), "takbirzamanbhuiyan@gmail.com");
    copyFails = true;
    await act(async () => emailButton.click());
    assert(
      document.body.textContent.includes("Could not copy the email address."),
    );
    await act(async () => root.unmount());
    const fallback = readFileSync("public/404.html", "utf8");
    assert(!fallback.includes("/src/") && !fallback.includes("<script"));
    const page = new JSDOM(fallback);
    assert.equal(
      page.window.document.querySelector("a").getAttribute("href"),
      "/",
    );
    assert.equal(
      page.window.document.querySelector("h1").textContent,
      "This page could not be found.",
    );
    console.log(
      "PASS: three ranked flagship projects, case studies and source links, show more/less, category filters, headline and CTAs, research claim cleanup, and standalone 404.",
    );
  } finally {
    await server.close();
    dom.window.close();
  }
});

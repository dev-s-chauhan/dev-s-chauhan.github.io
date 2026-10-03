"use client";

import { useEffect, useRef, useState } from "react";
import { contact, links, site } from "@/content";

function fallbackCopy(text: string) {
  const ta = document.createElement("textarea");
  ta.value = text;
  ta.setAttribute("readonly", "");
  ta.style.position = "fixed";
  ta.style.opacity = "0";
  document.body.appendChild(ta);
  ta.select();
  const ok = document.execCommand("copy");
  ta.remove();
  return ok;
}

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => () => clearTimeout(timer.current), []);

  const done = () => {
    setCopied(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 1800);
  };

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      done();
    } catch {
      if (fallbackCopy(site.email)) done();
    }
  };

  return (
    <footer className="contact" id="contact">
      <div className="wrap">
        <span className="mono" style={{ color: "#9aa6b0" }}>{contact.kicker}</span>
        <h2 className="disp" style={{ marginTop: 20 }}>{contact.title.before}<span className="o">{contact.title.accent}</span></h2>
        <div className="mail">
          <code>{site.email}</code>
          <button className="btn solid" type="button" onClick={copy}>{copied ? contact.copiedLabel : contact.copyLabel}</button>
          {links.github && <a className="btn" href={links.github}>GitHub</a>}
          {links.linkedin && <a className="btn" href={links.linkedin}>LinkedIn</a>}
          <span className="sr-only" aria-live="polite">{copied ? "Email copied to clipboard" : ""}</span>
        </div>
        <div className="foot mono">
          <span>{contact.footLeft}</span>
          <span>{contact.footRight}</span>
        </div>
      </div>
    </footer>
  );
}

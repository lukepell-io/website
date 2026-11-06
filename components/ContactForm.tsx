"use client";

import { useState } from "react";
import { site } from "@/content/site";

// Sends the message to Luke's inbox through Web3Forms (https://web3forms.com).
// Nothing is stored on this site. The access key is public by design: it can only
// send messages to luke@lukepell.io, never read them.
const ENDPOINT = "https://api.web3forms.com/submit";

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const f = site.contactForm;
  const connected = f.accessKey.length > 0;
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!connected || status === "sending") return;
    const form = e.currentTarget;
    const data = new FormData(form);
    const who = String(data.get("who") ?? "");
    data.set("access_key", f.accessKey);
    data.set("subject", `New enquiry from ${String(data.get("name") ?? "").trim()} (${who})`);
    data.set("from_name", "lukepell.io contact form");
    setStatus("sending");
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      const json = await res.json().catch(() => null);
      if (res.ok && json?.success) {
        form.reset();
        setStatus("sent");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="form-done" role="status">
        <h2 className="title">{f.sentTitle}</h2>
        <p className="muted">{f.sentBody}</p>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={onSubmit} noValidate={false}>
      <div className="field">
        <label htmlFor="cf-name">{f.nameLabel}</label>
        <input id="cf-name" name="name" type="text" autoComplete="name" required maxLength={100} />
      </div>

      <div className="field">
        <label htmlFor="cf-email">{f.emailLabel}</label>
        <input
          id="cf-email"
          name="email"
          type="email"
          autoComplete="email"
          inputMode="email"
          placeholder="name@company.com"
          required
          maxLength={254}
        />
      </div>

      <fieldset className="field">
        <legend>{f.whoLabel}</legend>
        <div className="choices">
          {f.whoOptions.map((o, i) => (
            <label key={o} className="choice">
              <input type="radio" name="who" value={o} required={i === 0} />
              <span>{o}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="field">
        <label htmlFor="cf-message">{f.messageLabel}</label>
        <textarea id="cf-message" name="message" rows={6} required maxLength={5000} placeholder={f.messageHint} />
      </div>

      {/* Honeypot: hidden from people, filled in by bots, so Web3Forms drops the message */}
      <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

      <div className="form-actions">
        <button type="submit" className="btn btn-primary" disabled={!connected || status === "sending"}>
          {status === "sending" ? f.sending : f.submit}
        </button>
        <p className="caption muted">{connected ? f.privacy : f.notConnected}</p>
      </div>

      <p className="form-error" role="alert" aria-live="assertive">
        {status === "error" ? f.error : ""}
      </p>
    </form>
  );
}

import React, { useState } from "react";
import "./Contact.css";

const SOCIALS = [
  {
    name: "GitHub",
    handle: "@github.com/BobBieNeno",
    href: "https://github.com/BobBieNeno",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    handle: "linkedin.com/in/aekkachai-saiyan",
    href: "https://www.linkedin.com/in/aekkachai-saiyan-aa381b404/",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: "Email",
    handle: "aekkachaibob10@gmail.com",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=aekkachaibob10@gmail.com",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setStatus("sending");
  //   // Simulate send delay
  //   await new Promise((r) => setTimeout(r, 1400));
  //   setStatus("sent");
  //   setForm({ name: "", email: "", message: "" });
  //   setTimeout(() => setStatus("idle"), 4000);
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus("sending");

    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);

    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`,
    );

    await new Promise((r) => setTimeout(r, 800));

    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=aekkachaibob10@gmail.com&su=${subject}&body=${body}`,
      "_blank",
    );

    setStatus("sent");
    setForm({ name: "", email: "", message: "" });

    setTimeout(() => setStatus("idle"), 4000);
  };

  return (
    <section id="contact" className="contact">
      <div className="container contact__inner">
        {/* Left — info */}
        <div className="contact__info">
          <p className="section-eyebrow">Contact</p>
          <h2 className="section-title">
            Let's build something
            <br />
            <em>great together</em>
          </h2>
          <p className="contact__lead">
            I'm open to internship opportunities, graduate roles, and exciting
            freelance projects. Send me a message — I reply within 24 hours.
          </p>

          <div className="contact__socials">
            {SOCIALS.map((s) => (
              <a
                key={s.name}
                href={s.href}
                className="social-card"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="social-icon">{s.icon}</span>
                <div className="social-text">
                  <span className="social-name">{s.name}</span>
                  <span className="social-handle">{s.handle}</span>
                </div>
                <span className="social-arrow">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M2.5 7h9M8 3.5l3.5 3.5L8 10.5"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Right — form */}
        <div className="contact__form-wrap">
          <form className="contact__form" onSubmit={handleSubmit} noValidate>
            <div className="form-row">
              <div className="form-field">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  disabled={status === "sending"}
                />
              </div>
              <div className="form-field">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                  disabled={status === "sending"}
                />
              </div>
            </div>

            <div className="form-field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Tell me about your project or opportunity..."
                value={form.message}
                onChange={handleChange}
                required
                disabled={status === "sending"}
              />
            </div>

            <button
              type="submit"
              className={`form-submit ${status}`}
              disabled={status === "sending" || status === "sent"}
            >
              {status === "idle" && "Send Message"}
              {status === "sending" && (
                <>
                  <span className="spinner" /> Sending…
                </>
              )}
              {status === "sent" && (
                <>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M3 8l3.5 3.5L13 5"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Message Sent!
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

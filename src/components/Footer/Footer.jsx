import React from "react";
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__left">
          <a
            className="footer__logo"
            onClick={scrollTop}
            style={{ cursor: "pointer" }}
          >
            <span className="footer-ui">CS</span>
            <span className="footer-senjor">
              Profile<span className="footer-dot">.</span>
            </span>
          </a>
          <p className="footer__copy">
            © {year} UI SENJOR. Built with React &amp; passion for good
            software.
          </p>
        </div>

        <div className="footer__links">
          {["About", "Skills", "Work", "Contact"].map((link) => (
            <button
              key={link}
              className="footer__link"
              onClick={() =>
                document
                  .querySelector(`#${link.toLowerCase()}`)
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              {link}
            </button>
          ))}
        </div>

        <button
          className="footer__back-top"
          onClick={scrollTop}
          aria-label="Back to top"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M8 13V3M3 8l5-5 5 5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </footer>
  );
}

import React from "react";
import { useTranslation } from "react-i18next";
import "./Footer.css";

export default function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();
  const links = t("footer.links", { returnObjects: true });

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
            <span className="footer-ui">{t("footer.logoPrefix")}</span>
            <span className="footer-senjor">
              {t("footer.logoName")}<span className="footer-dot">.</span>
            </span>
          </a>
          <p className="footer__copy">{t("footer.copy", { year })}</p>
        </div>

        <div className="footer__links">
          {links.map((item) => (
            <button
              key={item.label}
              className="footer__link"
              onClick={() =>
                document
                  .querySelector(`#${item.target}`)
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              {item.label}
            </button>
          ))}
        </div>

        <button
          className="footer__back-top"
          onClick={scrollTop}
          aria-label={t("footer.backToTop")}
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

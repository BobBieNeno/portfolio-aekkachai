import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../providers/ThemeProvider";
import "./Navbar.css";

export default function Navbar({ scrolled }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const { isDark, toggleTheme } = useTheme();
  const navLinks = t("nav.links", { returnObjects: true });
  const nextLanguage = i18n.language === "th" ? "en" : "th";

  const handleNavClick = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleLanguageToggle = () => {
    i18n.changeLanguage(nextLanguage);
    setMenuOpen(false);
  };

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <nav className="navbar__inner container">
        {/* Logo */}
        <a
          className="navbar__logo"
          href="#hero"
          onClick={() => handleNavClick("#hero")}
        >
          <span className="logo-ui">{t("nav.logoPrefix")}</span>
          <span className="logo-senjor">
            {t("nav.logoName")}<span className="logo-dot">.</span>
          </span>
        </a>

        {/* Desktop nav links */}
        <ul className="navbar__links">
          {navLinks.map((link) => (
            <li key={link.label}>
              <button
                className="navbar__link"
                onClick={() => handleNavClick(link.href)}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="navbar__controls" aria-label="Display controls">
          <button
            type="button"
            className="navbar__control"
            onClick={handleLanguageToggle}
            aria-label={
              nextLanguage === "th"
                ? t("common.switchToThai")
                : t("common.switchToEnglish")
            }
          >
            {nextLanguage.toUpperCase()}
          </button>
          <button
            type="button"
            className="navbar__control navbar__control--icon"
            onClick={toggleTheme}
            aria-label={isDark ? t("common.switchToLight") : t("common.switchToDark")}
          >
            {isDark ? (
              <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M12 4V2M12 22v-2M4.93 4.93 3.52 3.52M20.48 20.48l-1.41-1.41M4 12H2M22 12h-2M4.93 19.07l-1.41 1.41M20.48 3.52l-1.41 1.41M17 12a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            ) : (
              <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M21 14.1A7.5 7.5 0 0 1 9.9 3a8.5 8.5 0 1 0 11.1 11.1Z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </button>
        </div>

        {/* Resume CTA */}
        <a
          className="navbar__resume"
          href="https://canva.link/6yvd1clm58i9wyi"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t("nav.resumeAria")}
        >
          {t("nav.resume")}
        </a>

        {/* Mobile hamburger */}
        <button
          className={`navbar__hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={t("nav.toggleMenu")}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* Mobile menu */}
      <div className={`navbar__mobile-menu ${menuOpen ? "open" : ""}`}>
        {navLinks.map((link) => (
          <button
            key={link.label}
            className="mobile-link"
            onClick={() => handleNavClick(link.href)}
          >
            {link.label}
          </button>
        ))}
        <div className="mobile-controls">
          <button
            type="button"
            className="mobile-control"
            onClick={handleLanguageToggle}
            aria-label={
              nextLanguage === "th"
                ? t("common.switchToThai")
                : t("common.switchToEnglish")
            }
          >
            {t("common.language")}: {nextLanguage.toUpperCase()}
          </button>
          <button
            type="button"
            className="mobile-control"
            onClick={toggleTheme}
            aria-label={isDark ? t("common.switchToLight") : t("common.switchToDark")}
          >
            {t("common.theme")}:{" "}
            {isDark ? t("common.lightTheme") : t("common.darkTheme")}
          </button>
        </div>
        <a
          className="mobile-resume"
          href="https://canva.link/6yvd1clm58i9wyi"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("nav.resume")}
        </a>
      </div>
    </header>
  );
}

import React from "react";
import { useTranslation } from "react-i18next";
import LoadingImage from "../LoadingImage/LoadingImage";
import "./About.css";

export default function About() {
  const { t } = useTranslation();
  const stats = t("about.stats", { returnObjects: true });
  const paragraphs = t("about.paragraphs", { returnObjects: true });
  const tags = t("about.tags", { returnObjects: true });

  return (
    <section id="about" className="about">
      <div className="container about__inner">
        <div className="about__card-col">
          <div className="about__avatar-card">
            <div className="about__avatar">
              <LoadingImage
                src="/img/IMG_Avatar.png"
                alt={t("about.profileAlt")}
                className="about__avatar-img"
              />
            </div>
            <div className="about__role-badge">
              <span className="role-dot" />
              {t("about.availability")}
            </div>
          </div>

          <div className="about__stats">
            {stats.map((stat) => (
              <div key={stat.label} className="stat-card">
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="about__bio">
          <p className="section-eyebrow">{t("about.eyebrow")}</p>
          <h2 className="section-title">
            {t("about.titleLine1")}
            <br />
            <em>{t("about.titleEm")}</em>
          </h2>

          {paragraphs.map((paragraph) => (
            <p key={paragraph} className="about__text">
              {paragraph}
            </p>
          ))}

          <div className="about__tags">
            {tags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

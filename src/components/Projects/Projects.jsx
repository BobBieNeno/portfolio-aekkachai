import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import LoadingImage from "../LoadingImage/LoadingImage";
import "./Projects.css";

const PROJECT_IMAGES = [
  "/img/psoter3.png",
  "/img/psoter4.png",
  "/img/psoter2.png",
  "/img/logo_Soft.jpg",
  "/img/psoter5.png",
  "/img/psoter6.png",
  "/img/psoter7.png",
  "/img/psoter8.png",
  "/img/psoter9.png",
];

export default function Projects() {
  const [hovered, setHovered] = useState(null);
  const { t } = useTranslation();
  const projects = t("projects.items", { returnObjects: true });

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <p className="section-eyebrow">{t("projects.eyebrow")}</p>
          <h2 className="section-title">
            {t("projects.titleLine1")}<br />
            <em>{t("projects.titleEm")}</em>
          </h2>
        </div>

        <div className="projects__grid">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className={`project-card ${
                hovered === project.id ? "project-card--hovered" : ""
              }`}
              onMouseEnter={() => setHovered(project.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="project-card__header">
                <span className="project-tag">{project.tag}</span>
                <span className="project-num">0{index + 1}</span>
              </div>

              <div className="project-card__visual">
                <div className="project-card__visual-inner">
                  <LoadingImage
                    src={PROJECT_IMAGES[index]}
                    alt={project.title}
                    className="project-image"
                  />
                </div>
              </div>

              <div className="project-card__body">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.desc}</p>

                <div className="project-tech">
                  {project.tech.map((tech) => (
                    <span key={tech} className="tech-chip">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-footer">
                  <div className="project-metric">
                    <span className="metric-value">{project.metrics.value}</span>
                    <span className="metric-label">{project.metrics.label}</span>
                  </div>
                  <div className="project-actions">
                    {project.linkGithub?.trim() && (
                      <a
                        href={project.linkGithub}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                        aria-label={t("projects.sourceAria", {
                          title: project.title,
                        })}
                      >
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 008 10.95c.6.1.82-.26.82-.58v-2.1c-3.26.71-3.95-1.39-3.95-1.39-.55-1.4-1.34-1.77-1.34-1.77-1.09-.75.08-.74.08-.74 1.2.08 1.84 1.24 1.84 1.24 1.08 1.84 2.83 1.31 3.52 1 .1-.78.42-1.31.76-1.61-2.6-.29-5.33-1.3-5.33-5.79 0-1.28.46-2.33 1.22-3.15-.12-.3-.53-1.5.11-3.13 0 0 1-.32 3.28 1.2a11.4 11.4 0 015.98 0c2.28-1.52 3.28-1.2 3.28-1.2.64 1.63.23 2.83.11 3.13.76.82 1.22 1.87 1.22 3.15 0 4.5-2.74 5.5-5.35 5.79.43.37.81 1.08.81 2.18v3.23c0 .32.22.69.83.58A11.5 11.5 0 0023.5 12C23.5 5.65 18.35.5 12 .5z" />
                        </svg>
                      </a>
                    )}
                    {project.linkWeb?.trim() && (
                      <a
                        href={project.linkWeb}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                        aria-label={t("projects.websiteAria", {
                          title: project.title,
                        })}
                      >
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
                          <circle cx="12" cy="12" r="9" />
                          <path d="M3 12h18M12 3c2.2 2.5 3.3 5.5 3.3 9S14.2 18.5 12 21M12 3c-2.2 2.5-3.3 5.5-3.3 9S9.8 18.5 12 21" />
                        </svg>
                      </a>
                    )}
                    {project.link?.trim() && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                        aria-label={t("projects.viewAria", {
                          title: project.title,
                        })}
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M3 8h10M9 4l4 4-4 4"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

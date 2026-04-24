import React, { useState } from "react";
import "./Projects.css";

const PROJECTS = [
  {
    id: 1,
    tag: "Web App",
    title: "Foods Vote ",
    desc: "Develop a web application for random ranking calculation using an enrollment-based ranking algorithm for score ordering. Build the user interface with Angular Framework as the front-end and use Node.js as the back-end server for data processing.",
    tech: ["angular ", "MySQL", "NodeJS", "Figma"],
    metrics: { label: "Built in", value: "University Year 3" },
    link: "https://github.com/PeerapatKaewdee/angular_vote_food#",
    color: "#F5F5F3",
  },
  {
    id: 2,
    tag: "Flutter",
    title: "Lottery Number Generator App",
    desc: "Developed a mobile application for lottery number generation with a clean and user-friendly interface. Built using Flutter for cross-platform development, Go for backend services, MySQL for database management, and Figma for UI/UX design.",
    tech: ["Flutter", "Go", "MySQL", "Figma"],
    metrics: { label: "Built in", value: "University Project" },
    link: "https://github.com/SananTongchot/Lotto888",
    color: "#F5F5F3",
  },
  {
    id: 3,
    tag: "Flutter",
    title: "LifeChance POS Application",
    desc: "Developed a Point of Sale (POS) application for clothing sales management with product categories, sales tracking, and inventory support. Integrated Firebase Authentication for Google Sign-In, image management, reCAPTCHA API, and designed the interface using Figma.",
    tech: ["Flutter", "Firebase", "MySQL", "Go", "Figma"],
    metrics: { label: "Features", value: "Auth + POS" },
    link: "https://github.com/BobBieNeno/Lifechance_UI",
    color: "#F5F5F3",
  },
  {
    id: 4,
    tag: "Internship",
    title: "Oracle APEX Developer Intern",
    desc: "Worked on a Budget Management System during internship at Soft Square International (Dec 2025 – Mar 2026). Developed web applications using Oracle APEX and Oracle Database, designed database structures, implemented SQL/PLSQL business logic, built Interactive Grid with validations, created AP module workflows, generated reports with JasperReports and Excel, and improved UI/UX with JavaScript, jQuery, and Dynamic Actions.",
    tech: ["Oracle APEX", "Oracle Database", "SQL", "PL/SQL", "JavaScript"],
    metrics: { label: "Duration", value: "4 Months" },
    link: "#",
    color: "#F5F5F3",
  },
  {
    id: 5,
    tag: "Backend",
    title: "REST API Management",
    desc: "Developed backend APIs for mobile and web applications with secure authentication, database integration, and data management features. Focused on scalable architecture and performance optimization using Go and MySQL.",
    tech: ["Go", "MySQL", "REST API", "Postman"],
    metrics: { label: "Focus", value: "Backend Logic" },
    link: "https://github.com/BobBieNeno/LifeChance_BackEnd",
    color: "#F5F5F3",
  },
  {
    id: 6,
    tag: "UI/UX",
    title: "App Design System",
    desc: "Designed modern UI/UX prototypes for mobile and web applications, focusing on usability, responsive layouts, and smooth user experience. Created wireframes and interactive designs using Figma.",
    tech: ["Figma", "UI Design", "UX Research", "Prototype"],
    metrics: { label: "Tools", value: "Figma" },
    link: "https://www.figma.com/design/M9xrz94M8Yvz4NgvUiUaN3/Life-chane?node-id=0-1&t=ibwLfvqU7OBQmpPu-1",
    color: "#F5F5F3",
  },
];

export default function Projects() {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <p className="section-eyebrow">Work</p>
          <h2 className="section-title">
            Selected Projects &<br />
            <em>Case Studies</em>
          </h2>
        </div>

        <div className="projects__grid">
          {PROJECTS.map((p, i) => (
            <article
              key={p.id}
              className={`project-card ${hovered === p.id ? "project-card--hovered" : ""}`}
              onMouseEnter={() => setHovered(p.id)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Top bar */}
              <div className="project-card__header">
                <span className="project-tag">{p.tag}</span>
                <span className="project-num">0{i + 1}</span>
              </div>

              {/* Visual placeholder */}
              {/* <div className="project-card__visual">
                <div className="project-card__visual-inner">
                  <span className="project-icon">
                    {["⬡", "◈", "◉", "⬤", "▣", "◐"][i]}
                  </span>
                </div>
              </div> */}
              {/* Project Image */}
              <div className="project-card__visual">
                <div className="project-card__visual-inner">
                  <img
                    src={
                      [
                        "/img/psoter3.png",
                        "/img/psoter4.png",
                        "/img/psoter2.png",
                        "/img/logo_Soft.jpg",
                        "/img/psoter5.png",
                        "/img/psoter6.png",
                      ][i]
                    }
                    alt={p.title}
                    className="project-image"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="project-card__body">
                <h3 className="project-title">{p.title}</h3>
                <p className="project-desc">{p.desc}</p>

                <div className="project-tech">
                  {p.tech.map((t) => (
                    <span key={t} className="tech-chip">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="project-footer">
                  <div className="project-metric">
                    <span className="metric-value">{p.metrics.value}</span>
                    <span className="metric-label">{p.metrics.label}</span>
                  </div>
                  <a
                    href={p.link}
                    className="project-link"
                    aria-label={`View ${p.title}`}
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M3 8h10M9 4l4 4-4 4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

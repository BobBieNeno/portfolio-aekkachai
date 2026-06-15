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
    linkGithub: "https://github.com/PeerapatKaewdee/angular_vote_food#",
    linkWeb: "",
    link: "",
    color: "#F5F5F3",
  },
  {
    id: 2,
    tag: "Flutter",
    title: "Lottery Number Generator App",
    desc: "Developed a mobile application for lottery number generation with a clean and user-friendly interface. Built using Flutter for cross-platform development, Go for backend services, MySQL for database management, and Figma for UI/UX design.",
    tech: ["Flutter", "Go", "MySQL", "Figma"],
    linkGithub: "https://github.com/SananTongchot/Lotto888",
    linkWeb: "",
    metrics: { label: "Built in", value: "University Project" },
    link: "",
    color: "#F5F5F3",
  },
  {
    id: 3,
    tag: "Flutter",
    title: "LifeChance POS Application",
    desc: "Developed a Point of Sale (POS) application for clothing sales management with product categories, sales tracking, and inventory support. Integrated Firebase Authentication for Google Sign-In, image management, reCAPTCHA API, and designed the interface using Figma.",
    tech: ["Flutter", "Firebase", "MySQL", "Go", "Figma"],
    metrics: { label: "Features", value: "Auth + POS" },
    linkGithub: "https://github.com/BobBieNeno/Lifechance_UI",
    linkWeb: "",
    link: "",
    color: "#F5F5F3",
  },
  {
    id: 4,
    tag: "Internship",
    title: "Oracle APEX Developer Intern",
    desc: "Worked on a Budget Management System during internship at Soft Square International (Dec 2025 – Mar 2026). Developed web applications using Oracle APEX and Oracle Database, designed database structures, implemented SQL/PLSQL business logic, built Interactive Grid with validations, created AP module workflows, generated reports with JasperReports and Excel, and improved UI/UX with JavaScript, jQuery, and Dynamic Actions.",
    tech: ["Oracle APEX", "Oracle Database", "SQL", "PL/SQL", "JavaScript"],
    metrics: { label: "Duration", value: "4 Months" },
    linkGithub: "",
    linkWeb: "",
    link: "",
    color: "#F5F5F3",
  },
  {
    id: 5,
    tag: "Backend",
    title: "REST API Management",
    desc: "Developed backend APIs for mobile and web applications with secure authentication, database integration, and data management features. Focused on scalable architecture and performance optimization using Go and MySQL.",
    tech: ["Go", "MySQL", "REST API", "Postman"],
    metrics: { label: "Focus", value: "Backend Logic" },
    linkGithub: "https://github.com/BobBieNeno/LifeChance_BackEnd",
    linkWeb: "",
    link: "",
    color: "#F5F5F3",
  },
  {
    id: 6,
    tag: "UI/UX",
    title: "App Design System",
    desc: "Designed modern UI/UX prototypes for mobile and web applications, focusing on usability, responsive layouts, and smooth user experience. Created wireframes and interactive designs using Figma.",
    tech: ["Figma", "UI Design", "UX Research", "Prototype"],
    metrics: { label: "Tools", value: "Figma" },
    linkGithub: "",
    linkWeb:
      "https://www.figma.com/design/M9xrz94M8Yvz4NgvUiUaN3/Life-chane?node-id=0-1&t=ibwLfvqU7OBQmpPu-1",
    link: "",
    color: "#F5F5F3",
  },
  {
    id: 7,
    tag: "Full Stack",
    title: "POS & AI Costing System",
    desc: "Developed a full-stack point-of-sale system for managing products, inventory, and sales transactions. Integrated intelligent cost and profit margin calculations to help businesses optimize pricing and monitor their performance. Email : owner@example.com Password : AeZQMgdHXpXRYkVJ",
    tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "AI Integration"],
    metrics: { label: "Core Modules", value: "5+" },
    linkGithub: "https://github.com/BobBieNeno/Pos-ai-costing.git",
    linkWeb: "https://pos-ai-costing-9rvc-eight.vercel.app/login",
    link: "",
    color: "#F5F5F3",
  },
  {
    id: 8,
    tag: "Full Stack",
    title: "True Mark Project",
    desc: "Developed a full-stack tattoo studio platform featuring a bilingual responsive storefront, shopping cart, secure Stripe checkout, product and order management, and Gemini Vision-powered tattoo-image analysis. A server-side pricing engine was built to generate structured THB price estimates based on tattoo complexity, size, placement, and color.",
    tech: ["React", "Node.js", "PostgreSQL", "Prisma", "Gemini Vision"],
    metrics: {
      label: "Core Features",
      value: "AI Estimate & Commerce",
    },
    linkGithub: "https://github.com/BobBieNeno/True_mark_backend.git",
    linkWeb: "https://truemark-tattoo.vercel.app/",
    link: "https://github.com/BobBieNeno/truemark-tattoo.git",
    color: "#F5F5F3",
  },
  {
    id: 9,
    tag: "Full-Stack",
    title: "DonateOverlay",
    desc: "Built a personal full-stack donation platform for streamers and creators, inspired by real-world feedback from friends. The features include real-time donation alerts, OBS integration, QR payments, reward cards, public donation pages, and a customizable dashboard, focusing on modern UX and scalable web architecture.",
    tech: [
      "Next.js",
      "TypeScript",
      "WebSocket",
      "Prisma",
      "PostgreSQL",
      "Stripe API",
    ],
    metrics: {
      label: "Project Type",
      value: "Personal",
    },
    linkGithub: "",
    linkWeb: "",
    link: "",
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
                        "/img/psoter7.png",
                        "/img/psoter8.png",
                        "/img/psoter9.png",
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
                  <div className="project-actions">
                    {p.linkGithub?.trim() && (
                      <a
                        href={p.linkGithub}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                        aria-label={`View ${p.title} source code`}
                      >
                        {/* GitHub Icon */}
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
                    {p.linkWeb?.trim() && (
                      <a
                        href={p.linkWeb}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                        aria-label={`View ${p.title} website`}
                      >
                        {/* Website Icon */}
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
                    {p.link?.trim() && (
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                        aria-label={`View ${p.title}`}
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

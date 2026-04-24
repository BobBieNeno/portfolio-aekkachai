import React from "react";
import "./About.css";

const STATS = [
  { value: "CS", label: "Graduate" },
  { value: "4+", label: "Projects Built" },
  { value: "4", label: "Months Internship" },
  { value: "1000+", label: "Hours Learning" },
];

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container about__inner">
        {/* Left — avatar card */}
        <div className="about__card-col">
          <div className="about__avatar-card">
            <div className="about__avatar">
              <img
                src="public\img\IMG_Avatar.png"
                alt="Profile"
                className="about__avatar-img"
              />
            </div>
            <div className="about__role-badge">
              <span className="role-dot" />
              Available for Work
            </div>
          </div>

          {/* Stats */}
          <div className="about__stats">
            {STATS.map((s) => (
              <div key={s.label} className="stat-card">
                <span className="stat-value">{s.value}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — bio */}
        <div className="about__bio">
          <p className="section-eyebrow">About Me</p>
          <h2 className="section-title">
            A CS Graduate who loves
            <br />
            building things that <em>matter</em>
          </h2>
          <p className="about__text">
            I'm a Computer Science graduate with hands-on experience in mobile
            application development, full-stack systems, and business-focused
            software solutions. I enjoy turning ideas into practical digital
            products that solve real-world problems and improve everyday
            workflows.
          </p>

          <p className="about__text">
            My background includes building applications with Flutter, React,
            Go, SQL, and Oracle APEX, covering both frontend user experience and
            backend system logic. I've worked on projects involving data
            management, authentication, API integration, e-commerce systems, and
            business process automation are also included.
          </p>

          <p className="about__text">
            I value clean design, scalable architectures, and continuous
            learning. Outside of coding, I enjoy exploring new technologies,
            improving my craft, and creating software that delivers meaningful
            results for users and businesses.
          </p>

          <div className="about__tags">
            {[
              "Problem Solving",
              "Clean Code",
              "Team Player",
              "Fast Learner",
              "UI/UX Mindset",
              "Database Design",
              "Communication Skills",
              "Attention to Detail",
              "Debugging Skills",
            ].map((t) => (
              <span key={t} className="tag">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

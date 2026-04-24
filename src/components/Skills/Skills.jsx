import React from 'react'
import './Skills.css'

const SKILL_GROUPS = [
  {
    category: 'Languages',
    icon: '{ }',
    skills: [
      { name: 'Python',     level: 95 },
      { name: 'JavaScript', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'C / C++',    level: 78 },
      { name: 'Java',       level: 75 },
      { name: 'SQL',        level: 88 },
    ],
  },
  {
    category: 'Frontend',
    icon: '◫',
    skills: [
      { name: 'React',       level: 92 },
      { name: 'Next.js',     level: 84 },
      { name: 'CSS / SCSS',  level: 88 },
      { name: 'Tailwind',    level: 90 },
      { name: 'React Native',level: 72 },
      { name: 'D3.js',       level: 65 },
    ],
  },
  {
    category: 'Backend & Infra',
    icon: '⬡',
    skills: [
      { name: 'Node.js',     level: 87 },
      { name: 'FastAPI',     level: 82 },
      { name: 'PostgreSQL',  level: 80 },
      { name: 'Docker',      level: 76 },
      { name: 'AWS (basics)',level: 68 },
      { name: 'Linux / Bash',level: 85 },
    ],
  },
  {
    category: 'CS Fundamentals',
    icon: '◉',
    skills: [
      { name: 'Data Structures', level: 93 },
      { name: 'Algorithms',      level: 91 },
      { name: 'OS Concepts',     level: 78 },
      { name: 'Networking',      level: 74 },
      { name: 'ML / Statistics', level: 72 },
      { name: 'System Design',   level: 70 },
    ],
  },
]

function SkillBar({ name, level }) {
  return (
    <div className="skill-bar">
      <div className="skill-bar__top">
        <span className="skill-name">{name}</span>
        <span className="skill-pct">{level}%</span>
      </div>
      <div className="skill-bar__track">
        <div
          className="skill-bar__fill"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header">
          <p className="section-eyebrow">Skills</p>
          <h2 className="section-title">
            Technical Toolkit &<br /><em>Competencies</em>
          </h2>
        </div>

        <div className="skills__grid">
          {SKILL_GROUPS.map(group => (
            <div key={group.category} className="skill-group">
              <div className="skill-group__header">
                <span className="skill-group__icon">{group.icon}</span>
                <h3 className="skill-group__title">{group.category}</h3>
              </div>
              <div className="skill-group__bars">
                {group.skills.map(s => (
                  <SkillBar key={s.name} {...s} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

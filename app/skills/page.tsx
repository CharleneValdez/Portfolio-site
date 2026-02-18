"use client";

import React, { useEffect, useState } from "react";
import styles from "../../style/Skills.module.css";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaFigma, FaGithub, FaCode } from "react-icons/fa";
import { SiNextdotjs, SiPostman } from "react-icons/si";

import { SkillsData } from "../types/data";

const iconMap: Record<string, React.ReactNode> = {
  FaHtml5: <FaHtml5 color="#E34F26" />,
  FaCss3Alt: <FaCss3Alt color="#1572B6" />,
  FaJs: <FaJs color="#F7DF1E" />,
  FaReact: <FaReact color="#61DAFB" />,
  SiNextdotjs: <SiNextdotjs color="#000" />,
  FaBootstrap: <FaBootstrap color="#7952B3" />,
  FaGithub: <FaGithub color="#fff" />,
  SiPostman: <SiPostman color="#FF6C37" />,
  SiServicenow: <span role="img" aria-label="ServiceNow">🛠️</span>,
  FaCode: <FaCode color="#007ACC" />,
  FaFigma: <FaFigma color="#F24E1E" />
};

const Skills = () => {
  const [skills, setSkills] = useState<SkillsData>({
    frontend: [],
    tools: [],
    design: [],
    softSkills: []
  });

  useEffect(() => {
    fetch("/api/data")
      .then((res) => res.json())
      .then((result) => setSkills(result.skills))
      .catch((err) => console.error("Error fetching skills", err));
  }, []);

  return (
    <section id="skills" className={styles.skillsSection}>
      
      {/* Frontend */}
      <div className={styles.column}>
        <h2 className={styles.sectionTitle}>Frontend</h2>
        <div className={styles.skillsGrid}>
          {skills.frontend.map((skill, index) => (
            <div key={index} className={styles.skillCard}>
              <div className={styles.skillIcon} aria-hidden="true">
                {skill.iconKey && iconMap[skill.iconKey]}
              </div>
              <p className={styles.skillName}>{skill.name}</p>
              <span className={styles.skillLevel}>{skill.level}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Tools */}
      <div className={styles.column}>
        <h2 className={styles.sectionTitle}>Tools</h2>
        <div className={styles.skillsGrid}>
          {skills.tools.map((skill, index) => (
            <div key={index} className={styles.skillCard}>
              <div className={styles.skillIcon} aria-hidden="true">
                {skill.iconKey && iconMap[skill.iconKey]}
              </div>
              <p className={styles.skillName}>{skill.name}</p>
              <span className={styles.skillLevel}>{skill.level}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Design */}
      <div className={styles.column}>
        <h2 className={styles.sectionTitle}>Design</h2>
        <div className={styles.skillsGrid}>
          {skills.design.map((skill, index) => (
            <div key={index} className={styles.skillCard}>
              <div className={styles.skillIcon} aria-hidden="true">
                {skill.iconKey && iconMap[skill.iconKey]}
              </div>
              <p className={styles.skillName}>{skill.name}</p>
              <span className={styles.skillLevel}>{skill.level}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Soft Skills */}
      <div className={styles.column}>
        <h2 className={styles.sectionTitle}>Soft Skills</h2>
        <div className={styles.skillsGrid}>
          {skills.softSkills.map((soft, index) => (
            <div key={index} className={styles.skillCard}>
              <p className={styles.skillName}>{soft}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

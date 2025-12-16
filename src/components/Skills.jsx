import React from 'react';
import './Skills.css';

const skills = [
    { category: "Languages", items: ["Python", "SQL", "Scala", "Java"] },
    { category: "Big Data", items: ["Apache Spark", "Kafka", "Hadoop", "Databricks"] },
    { category: "Cloud & DevOps", items: ["AWS", "Terraform", "Docker", "Kubernetes"] },
    { category: "Database", items: ["PostgreSQL", "Snowflake", "MongoDB", "Redis"] }
];

const Skills = () => {
    return (
        <section id="skills" className="skills-section">
            <h2 className="section-title">Technical Skills</h2>
            <div className="skills-container">
                {skills.map((skillGroup, index) => (
                    <div key={index} className="skill-category">
                        <h3 className="category-title">{skillGroup.category}</h3>
                        <div className="skill-items">
                            {skillGroup.items.map((item, idx) => (
                                <div key={idx} className="skill-item">
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;

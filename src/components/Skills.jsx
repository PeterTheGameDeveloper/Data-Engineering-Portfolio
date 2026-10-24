import React from 'react';
import './Skills.css';

const skills = [
    { category: "Languages & Core", items: ["Python", "SQL", "Bash", "Pydantic", "Pytest"] },
    { category: "Orchestration & Transformation", items: ["dbt (Data Build Tool)", "Apache Airflow", "Dagster", "Apache Spark", "Databricks"] },
    { category: "Warehouses & Storage", items: ["Snowflake", "DuckDB", "PostgreSQL / PostGIS", "MinIO / AWS S3", "Redis"] },
    { category: "Cloud & Infrastructure", items: ["AWS (EC2, S3, IAM)", "Docker & Compose", "Terraform", "Git / CI/CD"] }
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

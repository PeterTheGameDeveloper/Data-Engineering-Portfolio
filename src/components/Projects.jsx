import React from 'react';
import './Projects.css';

const projectsData = [
    {
        id: 1,
        title: 'Strava API Data Pipeline',
        description: 'Built a pipeline that ingests data via Strava API into MinIO, transforms it via dbt, and loads it into DuckDB for use in a Streamlit dashboard.',
        tags: ['Python', 'MinIO', 'dbt', 'DuckDB', 'Streamlit', 'Docker'],
        link: 'https://github.com/PeterTheGameDeveloper/Strava-API-Data-Project'
    },
    {
        id: 2,
        title: 'Data Warehouse Migration',
        description: 'Migrated on-premise SQL Server data to Snowflake, reducing query time by 40%.',
        tags: ['Snowflake', 'SQL', 'dbt', 'Airflow'],
        link: '#'
    },
    {
        id: 3,
        title: 'Customer 360 API',
        description: 'Developed a REST API aggregating customer data from multiple sources for the marketing team.',
        tags: ['FastAPI', 'PostgreSQL', 'Docker'],
        link: '#'
    }
];

const Projects = () => {
    return (
        <section id="projects" className="projects-section">
            <h2 className="section-title">Featured Projects</h2>
            <div className="projects-grid">
                {projectsData.map((project) => (
                    <div key={project.id} className="project-card">
                        <h3 className="project-title">{project.title}</h3>
                        <p className="project-desc">{project.description}</p>
                        <div className="project-tags">
                            {project.tags.map((tag, index) => (
                                <span key={index} className="tag">{tag}</span>
                            ))}
                        </div>
                        <a href={project.link} className="project-link">View Project &rarr;</a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;

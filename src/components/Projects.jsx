import React from 'react';
import './Projects.css';

const projectsData = [
    {
        id: 1,
        title: 'Real-time ETF Pipeline',
        description: 'Built a streaming pipeline using Apache Kafka and Spark Streaming to process ETF data in real-time.',
        tags: ['Kafka', 'Spark', 'Python', 'AWS S3'],
        link: '#'
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

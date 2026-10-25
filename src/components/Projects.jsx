import React from 'react';
import './Projects.css';

const projectsData = [
    {
        id: 1,
        title: 'Strava Telemetry ELT Lakehouse',
        description: 'End-to-end containerized ELT pipeline orchestrated via Apache Airflow. Ingests athlete activity streams from the Strava REST API into S3-compatible object storage (MinIO), executes staging and mart transformations in dbt on DuckDB, and serves interactive analytics via Streamlit.',
        tags: ['Python', 'Apache Airflow', 'dbt', 'DuckDB', 'MinIO (S3)', 'Docker', 'Streamlit'],
        link: 'https://github.com/peterkline-de/Strava-API-Data-Project'
    },
    {
        id: 2,
        title: 'Event-Driven Change Data Capture (CDC) Pipeline',
        description: 'Production-grade web change detection pipeline orchestrated with Dagster. Features watermark-based incremental ingestion, rate-limited retry backoff, late-arriving data lookback windows, dimensional modeling (fact/dimension star schema) in dbt + DuckDB, custom data freshness assertions, and automated Dagster failure sensors.',
        tags: ['Python', 'Dagster', 'dbt', 'DuckDB', 'MinIO (S3)', 'Pydantic', 'Pytest'],
        link: 'https://github.com/peterkline-de/RuneScape-Web-Scraping-Change-Detection'
    },
    {
        id: 3,
        title: 'Autonomous Cloud Market Telemetry & Quantitative Engine',
        description: 'Containerized financial time-series ingestion and quantitative signal engine deployed on AWS EC2 with Docker. Streams and evaluates multi-asset market data via Alpaca API using cointegration, Kalman filter dynamic hedge ratios, and mean-reversion regimes, backed by a 34-test automated Pytest suite and real-time webhook alerting.',
        tags: ['Python', 'AWS EC2', 'Docker', 'Time-Series', 'Alpaca API', 'Pytest'],
        link: 'https://github.com/peterkline-de/Trading-Bot'
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
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">View Project &rarr;</a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;

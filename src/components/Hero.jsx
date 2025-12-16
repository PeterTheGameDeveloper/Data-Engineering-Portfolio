import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section id="hero" className="hero">
            <div className="hero-content">
                <h2 className="hero-greeting">Hello, I'm a</h2>
                <h1 className="hero-title">
                    <span className="text-gradient">Data Engineer</span>
                </h1>
                <p className="hero-subtitle">
                    Building scalabe pipelines, warehousing solutions, and turning raw data into actionable insights.
                </p>
                <div className="hero-buttons">
                    <a href="#projects" className="btn btn-primary">View Work</a>
                    <a href="#contact" className="btn btn-secondary">Contact Me</a>
                </div>
            </div>
            <div className="hero-visual">
                {/* Abstract data representation - could be an SVG or CSS animation */}
                <div className="data-flow-animation"></div>
            </div>
        </section>
    );
};

export default Hero;

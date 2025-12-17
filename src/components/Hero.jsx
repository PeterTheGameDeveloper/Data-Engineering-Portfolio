import React from 'react';
import './Hero.css';
import profileImage from '../assets/profile.jpg';

const Hero = () => {
    return (
        <section id="hero" className="hero">
            <div className="hero-content">
                <h2 className="hero-greeting">Hello, I'm a</h2>
                <h1 className="hero-title">
                    <span className="text-gradient">Data Engineer</span>
                </h1>
                <p className="hero-subtitle">
                    Building scalable pipelines, warehousing solutions, and turning raw data into actionable insights.
                </p>
                <div className="hero-buttons">
                    <a href="#projects" className="btn btn-primary">View Work</a>
                    <a href="#contact" className="btn btn-secondary">Contact Me</a>
                </div>
            </div>
            <div className="hero-visual">
                <div className="image-container">
                    <img src={profileImage} alt="Data Engineer Profile" className="profile-image" />
                </div>
            </div>
        </section>
    );
};

export default Hero;

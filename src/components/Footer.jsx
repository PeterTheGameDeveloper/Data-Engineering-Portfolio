import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer id="contact" className="footer">
            <div className="footer-content">
                <h2 className="footer-title">Let's Connect</h2>
                <p className="footer-text">
                    Interested in collaborating or have a data challenge? Reach out!
                </p>
                <div className="social-links">
                    <a href="https://www.linkedin.com/in/peter-kline-16331522b/" className="social-link">LinkedIn</a>
                    <a href="https://github.com/PeterTheGameDeveloper" className="social-link">GitHub</a>
                    <a href="mailto:peterkline82@gmail.com" className="social-link">Email</a>
                </div>
                <div className="footer-copyright">
                    &copy; {new Date().getFullYear()} Data Engineer Portfolio. Built with React & Vite.
                </div>
            </div>
        </footer>
    );
};

export default Footer;

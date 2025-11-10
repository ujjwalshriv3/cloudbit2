import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../css/Hero.css';

const Hero = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };

  const handleJoinForFree = () => {
    navigate('/login');
  };

  const handleWatchVideo = () => {
    // Add video modal functionality here if needed
    console.log('Watch video clicked');
  };

  return (
    <div className="hero-container">
      {/* Navigation Header */}
      <nav className="hero-nav">
        <div className="nav-brand">
          <h2>Cloudbit</h2>
        </div>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#courses">Courses</a>
          <a href="#careers">Careers</a>
          <a href="#blog">Blog</a>
          <a href="#about">About Us</a>
        </div>
        <div className="nav-buttons">
          <button className="login-btn" onClick={handleLogin}>
            Login
          </button>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="hero-content">
        <div className="hero-left">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="hero-title">
              <span className="highlight">Studying</span> Online is now much easier
            </h1>
            <p className="hero-description">
              Cloudbit is an interesting platform that will teach you in more an interactive way
            </p>
            <div className="hero-actions">
              <button className="join-btn" onClick={handleJoinForFree}>
                Join for free
              </button>
              <button className="watch-btn" onClick={handleWatchVideo}>
                <span className="play-icon">▶</span>
                Watch how it works
              </button>
            </div>
          </motion.div>
        </div>

        <div className="hero-right">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-image-container"
          >
            {/* Student Image */}
            <div className="student-image">
              <div className="student-placeholder">
                <div className="student-avatar">👩‍🎓</div>
              </div>
            </div>

            {/* Floating Cards */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="stats-card"
            >
              <div className="stats-icon">📊</div>
              <div className="stats-content">
                <h3>250k</h3>
                <p>Assisted Student</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="congratulations-card"
            >
              <div className="congrats-icon">✉️</div>
              <div className="congrats-content">
                <h4>Congratulations</h4>
                <p>Your admission completed</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="class-card"
            >
              <div className="class-avatar">
                <div className="instructor-avatar">👨‍🏫</div>
              </div>
              <div className="class-content">
                <h4>User Experience Class</h4>
                <p>Today at 12:00 PM</p>
                <button className="join-now-btn">Join Now</button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="chart-card"
            >
              📈
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

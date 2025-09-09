import { useState, useEffect } from "react";
import "./css/App.css";
import "./css/Dashboard.css";
import "./css/Home.css";

import Navbar from "./components/Navbar.tsx";

function App() {
  const [isHeroVisible, setIsHeroVisible] = useState(false);
  const [showHeaderNotice, setShowHeaderNotice] = useState(true);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    setIsHeroVisible(true);
  }, []);

  return (
    <>
      {showHeaderNotice && (
        <header id="header">
          <p id="header-p">
            This application is currently still in Pre-Alpha phase
            <button
              className="close-header-btn"
              onClick={() => setShowHeaderNotice(false)}
              aria-label="Close notification"
            >
              ✖
            </button>
          </p>
        </header>
      )}
      <div className="dashboard">
        <Navbar />

        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-container">
            <div className="hero-content">
              <div
                className={`hero-text ${isHeroVisible ? "animate-in" : ""}`}
              >
                <h1 className="hero-title">
                  Welcome to Your
                  <span className="highlight"> Academic Journey</span>
                </h1>
                <p className="hero-subtitle">
                  Organize your studies, track your progress, and achieve your
                  academic goals with our comprehensive learning platform
                  designed for student success.
                </p>
                <div className="hero-buttons">
                  <button
                    className="btn btn-primary"
                    onClick={() => scrollToSection("dashboard")}
                  >
                    Get Started
                  </button>
                  <button
                    className="btn btn-secondary"
                    onClick={() => scrollToSection("study")}
                  >
                    Explore Features
                  </button>
                </div>
              </div>

              <div
                className={`hero-visual ${isHeroVisible ? "animate-in" : ""}`}
              >
                <div className="academic-card">
                  <div className="card-header">
                    <div className="card-dots">
                      <span className="dot"></span>
                      <span className="dot"></span>
                      <span className="dot"></span>
                    </div>
                    <span className="card-title">League of Data</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;

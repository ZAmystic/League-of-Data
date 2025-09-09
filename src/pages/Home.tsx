import { useState, useEffect } from "react";
import "../css/Home.css";

interface HeroProps {
  scrollToSection: (sectionId: string) => void;
}

export default function Hero({ scrollToSection }: HeroProps) {
  const [isHeroVisible, setIsHeroVisible] = useState(false);

  useEffect(() => {
    setIsHeroVisible(true);
  }, []);

  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <div className={`hero-text ${isHeroVisible ? "animate-in" : ""}`}>
            <h1 className="hero-title">
              Welcome to Your
              <span className="highlight"> Academic Journey</span>
            </h1>
            <p className="hero-subtitle">
              Organize your studies, track your progress, and achieve your
              academic goals with our comprehensive learning platform designed
              for student success.
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

          <div className={`hero-visual ${isHeroVisible ? "animate-in" : ""}`}>
            <div className="academic-card">
              <div className="card-header">
                <div className="card-dots">
                  <span className="dot"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                </div>
                <span className="card-title">League of Data</span>
              </div>
              <div className="card-container">
                <h1 className="card-container-h1">What is League of Data?</h1>
                <p className="card-container-p">League of Data is a student-built platform that transforms your academic experience. Designed to integrate seamlessly with Moodle, 
                   it imports your coursework, deadlines, and academic essentials into a cleaner, more intuitive interface. This nonprofit initiative 
                   was created by Software Engineering students as a way to sharpen our skills, challenge conventional systems, and build tools that 
                   genuinely improve student life.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

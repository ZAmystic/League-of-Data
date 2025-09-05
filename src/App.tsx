import { useState, useEffect } from "react";
import "./css/App.css";
import "./css/Navbar.css";
import "./css/Dashboard.css";

interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems: NavItem[] = [
    { label: "Dashboard", href: "#" },
    { label: "Planning", href: "#planning" },
    { label: "Study Hall", href: "#study" },
    {
      label: "Profile",
      href: "#profile",
      children: [{ label: "Settings", href: "#settings" }],
    },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="dashboard">
        <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
          <div className="navbar-container">
            {/* Logo */}
            <div className="navbar-logo">
              <a id="logo_p" href="#home">
                League of Data
              </a>
            </div>

            {/* Desktop Navigation */}
            <ul className="navbar-nav">
              {navItems.map((item) => (
                <li key={item.label} className="nav-item">
                  <a href={item.href} className="nav-link">
                    {item.label}
                  </a>
                  {item.children && (
                    <ul className="dropdown-menu">
                      {item.children.map((child) => (
                        <li key={child.label}>
                          <a href={child.href} className="dropdown-link">
                            {child.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>

            {/* Mobile menu button */}
            <button
              className={`navbar-toggle ${isMenuOpen ? "active" : ""}`}
              onClick={toggleMenu}
              aria-label="Toggle navigation menu"
              aria-expanded={isMenuOpen}
            >
              <span className="navbar-toggle-icon"></span>
              <span className="navbar-toggle-icon"></span>
              <span className="navbar-toggle-icon"></span>
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className={`navbar-mobile ${isMenuOpen ? "active" : ""}`}>
            <ul className="navbar-nav-mobile">
              {navItems.map((item) => (
                <li key={item.label} className="nav-item-mobile">
                  <a
                    href={item.href}
                    className="nav-link-mobile"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* Dashboard Layout */}
        <div className="dashboard-layout">
          {/* Main Content */}
          <main className="dashboard-main">
            <section id="dashboard" className="dashboard-section">
              <div className="dashboard-cards">
                <div className="card">
                  <h3>Active Users</h3>
                  <p>2 Active</p>
                </div>
                <div className="card">
                  <h3>Acedemic Performance</h3>
                  <p>50%</p>
                </div>
                <div className="card">
                  <h3>Outstanding Assignments</h3>
                  <p>3</p>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
}

export default App;

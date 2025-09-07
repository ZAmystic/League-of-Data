import { useState, useEffect } from "react";
import "./css/App.css";
import "./css/Navbar.css";
import "./css/Dashboard.css";
import "./css/Home.css";
import logo from "./assets/images/logo.png";

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
              <a href="App.tsx">
                <img className="navbar-logo-img" src={logo} alt="logo" />
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
            <button id="menu-icon"
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
      </div>
    </>
  );
}

export default App;
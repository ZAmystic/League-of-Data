import { useState, useEffect } from 'react';
import './App.css';
import './css/Navbar.css';

interface NavItem {
  label: string;
  href: string;
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const navItems: NavItem[] = [
    { label: 'Dashboard', href: '#dashboard' },
    { label: 'Planning', href: '#planning' },
    { label: 'Study Hall', href: '#study' },
    { label: 'Settings', href: '#settings' },
    { label: 'Profile', href: '#profile' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <div className="dashboard">
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
          <div className="navbar-container">
            {/* Logo */}
            <div className="navbar-logo">
              <a id="logo_p" href="#home">League of Data</a>
            </div>

            {/* Desktop Navigation */}
            <ul className="navbar-nav">
              {navItems.map((item) => (
                <li key={item.label} className="nav-item">
                  <a href={item.href} className="nav-link">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Mobile menu button */}
            <button 
              className={`navbar-toggle ${isMenuOpen ? 'active' : ''}`}
              onClick={toggleMenu}
              aria-label="Toggle navigation menu"
            >
              <span className="navbar-toggle-icon"></span>
              <span className="navbar-toggle-icon"></span>
              <span className="navbar-toggle-icon"></span>
            </button>
          </div>

              

          {/* Mobile Navigation */}
          <div className={`navbar-mobile ${isMenuOpen ? 'active' : ''}`}>
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
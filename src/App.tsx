import { useState } from "react";
import "./css/App.css";
import "./css/Dashboard.css";
import "./css/Home.css";

import Navbar from "./components/Navbar.tsx";
import Home from "./pages/Home.tsx";
import HeaderNotice from "./components/Header.tsx";

function App() {
  const [showHeaderNotice, setShowHeaderNotice] = useState(() => {
    return sessionStorage.getItem("headerNoticeDismissed") !== "true";
  });

  const handleCloseHeader = () => {
    sessionStorage.setItem("headerNoticeDismissed", "true");
    setShowHeaderNotice(false);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {showHeaderNotice && <HeaderNotice onClose={handleCloseHeader} />}
      <div className="dashboard">
        <Navbar />
        <Home scrollToSection={scrollToSection} />
      </div>
    </>
  );
}

export default App;

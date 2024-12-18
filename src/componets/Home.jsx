import React, { useState } from "react";
import "./Home.css";
import MapSVG from "../assets/map.svg";
import BrochureSVG from "../assets/brochure.svg";
import ScheduleSVG from "../assets/schedule.svg";


const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const items = [
    {
      icon: MapSVG,
      title: "Map",
      pdf: null, 
    },
    {
      icon: BrochureSVG,
      title: "Brochure",
      pdf: "https://srmsigaram.com/downloads/SRMSIGARAM_2024_brochure.-rules%20and%20regulations.pdf",
    },
    {
      icon: ScheduleSVG,
      title: "Schedule",
      pdf: "https://srmsigaram.com/downloads/Events_Schedule.pdf",
    },
  ];

  const handleDownload = (pdfPath) => {
    if (pdfPath) {
      const link = document.createElement("a");
      link.href = pdfPath;
      link.download = pdfPath.split("/").pop();
      link.click();
      
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    
     // Toggles the menu state
  };

  return (
    <div>
      {/* Hamburger Menu */}
      <div className="hamburger-menu"
       onClick={toggleMenu}>
        {menuOpen ? "X" : "☰"}
      </div>

    
      {menuOpen && ( 
        <div className="container">
          <div className="white-box">
            {items.map((item, index) => (
              <div
                className="box"
                key={index}
                onClick={() => handleDownload(item.pdf)}
              >
                <div className="int-box">
                  <div className="image-icon">
                    <img src={item.icon} alt={`${item.title} Icon`} />
                  </div>
                </div>
                <div className="text">
                  <h1>{item.title}</h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;

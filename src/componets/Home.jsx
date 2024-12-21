import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import MapSVG from "../assets/map.svg";
import BrochureSVG from "../assets/brochure.svg";
import ScheduleSVG from "../assets/schedule.svg";
import PoCSVG from "../assets/poc.svg"
import SchedulePDF from "../assets/Schedule.pdf"
import BrochurePDF from "../assets/brochure.pdf"

const Home = () => {
  
  const navigate = useNavigate();
  const items = [
    {
      icon: MapSVG,
      title: "Map",
      pdf: null, 
    },
    {
      icon: BrochureSVG,
      title: "Rules and Regulations",
      pdf: BrochurePDF,
    },
    {
      icon: ScheduleSVG,
      title: "Schedule",
      pdf: SchedulePDF,
    },
    {
      icon: PoCSVG,
      title: "PoC",
      pdf: null,
    },
  ];

  const handleDownload = (pdfPath) => {
    if (pdfPath) {
      navigate("/view", { state: { pdfPath } });
     
    }
  };

  

  return (
    <div>
      
   

    
      
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
     
    </div>
  );
};

export default Home;

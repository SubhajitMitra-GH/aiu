// import React from "react";
import "./Home.css";
import MapSVG from "../assets/map.svg";
import BrochureSVG from "../assets/brochure.svg";
import ScheduleSVG from "../assets/schedule.svg";
import PoCSVG from "../assets/poc.svg";

import CampusMap from "../assets/image.png";  

const Home = () => {
  const items = [
    {
      icon: MapSVG,
      title: "Map",
      link: CampusMap,  
      type: "image"
    },
    {
      icon: BrochureSVG,
      title: "Rules and Regulations",
      link: "https://srmsigaram.com/downloads/SRMSIGARAM_2024_brochure.-rules%20and%20regulations.pdf",
      type: "pdf"
    },
    {
      icon: ScheduleSVG,
      title: "Schedule",
      link: "https://srmsigaram.com/downloads/Events_Schedule.pdf",
      type: "pdf"
    },
    {
      icon: PoCSVG,
      title: "PoC",
      link: null,
      type: null
    },
  ];

  const handleClick = (item) => {
    if (item.link) {
      if (item.type === "image") {
        // Create a new window with the image
        const newWindow = window.open();
        newWindow.document.write(`
          <html>
            <head>
              <title>Campus Map</title>
              <style>
                body {
                  margin: 0;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  min-height: 100vh;
                  background: #f0f0f0;
                }
                img {
                  max-width: 100%;
                  height: auto;
                  display: block;
                }
              </style>
            </head>
            <body>
              <img src="${item.link}" alt="Campus Map">
            </body>
          </html>
        `);
      } else {
        window.open(item.link, '_blank', 'noopener,noreferrer');
      }
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
              onClick={() => handleClick(item)}
              style={{ cursor: item.link ? 'pointer' : 'default' }}
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
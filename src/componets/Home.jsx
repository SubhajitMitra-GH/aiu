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
      type: "image",
    },
    {
      icon: BrochureSVG,
      title: "Rules and Regulations",
      link: "https://srmsigaram.com/downloads/SRMSIGARAM_2024_brochure.-rules%20and%20regulations.pdf",
      type: "pdf",
    },
    {
      icon: ScheduleSVG,
      title: "Schedule",
      link: "https://srmsigaram.com/downloads/Events_Schedule.pdf",
      type: "pdf",
    },
    {
      icon: PoCSVG,
      title: "PoC",
      link: null,
      type: null,
    },
  ];

  const handleClick = (item) => {
    if (item.link) {
      const newWindow = window.open("about:blank", "_blank");
      if (newWindow) {
        if (item.type === "image") {
          newWindow.document.write(`
            <html>
              <head>
                <title>${item.title}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
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
                <img src="${item.link}" alt="${item.title}">
              </body>
            </html>
          `);
        } else if (item.type === "pdf") {
          // Use Google Docs viewer for PDFs
          const googleDocsUrl = `https://docs.google.com/viewer?url=${encodeURIComponent(
            item.link
          )}&embedded=true`;
          newWindow.document.write(`
            <html>
              <head>
                <title>${item.title}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <style>
                  body, html {
                    margin: 0;
                    padding: 0;
                    height: 100%;
                    width: 100%;
                    overflow: hidden;
                  }
                  iframe {
                    width: 100%;
                    height: 100%;
                    border: none;
                  }
                </style>
              </head>
              <body>
                <iframe src="${googleDocsUrl}" frameborder="0" style="width:100%; height:100vh;"></iframe>
              </body>
            </html>
          `);
        }
        newWindow.document.close();
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
              style={{ cursor: item.link ? "pointer" : "default" }}
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

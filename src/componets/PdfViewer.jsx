import React from "react";
import { useLocation } from "react-router-dom";
import "./PdfView.css";

const PdfViewer = () => {
  const location = useLocation();
  const pdfPath = location.state?.pdfPath; // Get the PDF path from state

  if (!pdfPath) {
    return <p>No PDF provided</p>;
  }

  return (
    <div className="container">
      <iframe
        src={pdfPath}
        title="PDF Viewer"
        style={{ height: "100%", width: "100%", border: "none" }}
      />
    </div>
  );
};

export default PdfViewer;

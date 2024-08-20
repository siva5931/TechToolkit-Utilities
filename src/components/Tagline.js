import React, { useEffect } from "react";
import { Link as RouteLink } from "react-router-dom";

// Function to split text into spans, preserving spaces
const splitTextIntoSpans = (text) => {
  return text.split("").map((char, index) => {
    // Use a class to ensure spaces are preserved
    return `<span class="${char === ' ' ? 'space' : ''}" style="animation-delay: ${index * 0.05}s">${char}</span>`;
  }).join("");
};

export default function Tagline() {
  useEffect(() => {
    const lines = document.querySelectorAll(".taglineh1 .line");
    lines.forEach((line) => {
      const text = line.textContent;
      line.innerHTML = splitTextIntoSpans(text);
    });
  }, []);

  return (
    <div className="container-fluid taglinediv">
      <div className="position-relative">
        <div className="bgeffect position-absolute top-50 start-50 translate-middle"></div>
      </div>
      <h1 className="taglineh1 text-center">
        <div className="line">Unleash Your Productivity:</div>
        <div className="line">Smart Solutions for Seamless Success</div>
      </h1>
      <h4 className="taglineh4 text-center">
        Discover the Art of Productivity with Our Masterful Online Tools.
      </h4>
      <p className="text-center checkpoints">
        <i className="fa-solid fa-check"></i> Essential Features, Always Free &nbsp;
        &nbsp;
        <i className="fa-solid fa-check"></i> More Tools Than Anyone Else
      </p>
    </div>
  );
}

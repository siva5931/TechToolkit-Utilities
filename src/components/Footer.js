import React from "react";
import { Link as RouteLink } from "react-router-dom";
export default function Footer() {
  return (
    <div className="container-fluid footer">
      <div className="row  justify-content-between ">
        <div className="col-md-7">
          <h3 className="fw-bold">✦ TechToolbox</h3>
          <p>
            TechToolbox is a platform where you can find all the tools that you
            need to make your work easy and fast. We have a variety of tools
            that you can use for free. We have tools like Image Compressor, QR
            Code Generator, TextUtility Tools, and many more.
          </p>
        </div>
        <div className="col-md-4  ">
          <h3 className="fw-bold mx-auto">✦ Quick Links</h3>
          <div className="quick-links">
            <h6 className="dropdown-item">
              <RouteLink to="/QR-generator">QR Code Generator</RouteLink>
            </h6>
            <h6 className="dropdown-item list">
              <RouteLink to="/image-compressor"> Image Compressor </RouteLink>
            </h6>
            <h6 className="dropdown-item list">
              <RouteLink to="/text-util">TextUtility Tools</RouteLink>
            </h6>
            <h6 className="dropdown-item list">
              <RouteLink to="/image-converter"> Image Convertor </RouteLink>
            </h6>
            <h6 className="dropdown-item list">
              <RouteLink to="/yt-thumbnail-downloader">Yt Thumbnail Downloader</RouteLink>
            </h6>
            <h6 className="dropdown-item list">
              <RouteLink to="/url-shortner">URL Shortener</RouteLink>
            </h6>
            <h6 className="dropdown-item list">
              <RouteLink to="/pdf-compressor">PDF Compressor</RouteLink>
            </h6>
            <h6 className="dropdown-item list">
              <RouteLink to="/password-generator"> Password Generator </RouteLink>
            </h6>
            <h6 className="dropdown-item list">
              <RouteLink to="/image-text-extractor">Image Text Extractor</RouteLink>
            </h6>
          </div>
        </div>
      </div>
      <p className="text-center">@Sivachaitanya - All rights Reserved 2024.</p>
    </div>
  );
}

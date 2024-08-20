import React from "react";
import ToolsData from "../data/ToolsData";
import { Link as RouteLink } from "react-router-dom";
export default function Tools() {
  return (
    <div className="container-fluid toolsdiv shine-parent">
      <h1 className="text-center btn-shine">✦ Tools Available</h1>

      <div className="row toolsrow">
        {ToolsData.map((tool) => {
          return (
            <div className="col-md-4" key={tool.id}>
              <div className="card tools-card">
                <div className="card-body">
                  <h5 className="card-title fw-bold">{tool.title}</h5>
                  <p className="card-text fw-light">{tool.desc}</p>
                  <RouteLink to={tool.link} className="btn btn-primary fw-bold">
                      Explore Tool
                  </RouteLink>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

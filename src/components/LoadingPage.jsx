import React from "react";
import "./loadingPage.css";

export default function LoadingPage() {
  return (
    <>
      <div className="loading-page-div">
        <div className="spinner-border text-info" style={{ width: "3rem", height: "3rem" }} role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </>
  );
}

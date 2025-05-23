import "./App.css";
import Right from "./Contents/right";
import { useState } from "react";

function App() {
  let [page, setPage] = useState("DSA");
  function subjectClickHandle(subject) {
    setPage(subject);
  }
  return (
    <>
      <div className="container">
        <div className="leftContainer">
          <h2>SUBJECTS</h2>
          <div className="links">
            <a
              onClick={() => {
                subjectClickHandle("DSA");
              }}
              className={page === "DSA" ? "active" : ""}
            >
              DSA{" "}
            </a>
            <a
              onClick={() => {
                subjectClickHandle("JAVA");
              }}
              className={page === "JAVA" ? "active" : ""}
            >
              OOP in JAVA{" "}
            </a>
            <a
              onClick={() => {
                subjectClickHandle("Web");
              }}
              className={page === "Web" ? "active" : ""}
            >
              Web Technology
            </a>
            <a
              onClick={() => {
                subjectClickHandle("System");
              }}
              className={page === "System" ? "active" : ""}
            >
              {" "}
              System Analysis
            </a>
            <a
              onClick={() => {
                subjectClickHandle("Stastics");
              }}
              className={page === "Stastics" ? "active" : ""}
            >
              Probablity & Stastics
            </a>
          </div>
        </div>
        <Right sub={page} />
      </div>
    </>
  );
}

export default App;

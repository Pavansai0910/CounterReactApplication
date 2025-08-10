import React from "react";
import "./Home.css";

function Home({ setCounterOpen }) {
  return (
    <div className="home-container">
      <h4>Hello, wanna try a simple counter application?</h4>
      <button onClick={() => setCounterOpen(true)}>
        Take me to Application
      </button>
    </div>
  );
}

export default Home;

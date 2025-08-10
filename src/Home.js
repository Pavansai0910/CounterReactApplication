import React from "react";

function Home({ setCounterOpen }) {
  return (
    <div>
      <h4>Hello, wanna try a simple counter application?</h4>
      <button onClick={() => setCounterOpen(true)}>
        Take me to Application
      </button>
    </div>
  );
}

export default Home;

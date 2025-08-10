import React, { useState } from "react";
import Counter from "./Counter";
import Home from "./Home";


function App() {
  const [isCounterOpen,setCounterOpen] = useState(false);
  return (
    <div>
      {!isCounterOpen && <Home setCounterOpen = {setCounterOpen}/>}
      {isCounterOpen && <Counter setCounterOpen = {setCounterOpen}/>}
    </div>
  );
}

export default App;

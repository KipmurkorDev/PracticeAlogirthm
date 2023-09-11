import React, { useState } from "react";
import { createRoot } from "react-dom/client";

function Toggle() {
  const [flipLight, setFlipLight] = useState(false);
  function handleClick() {
    // todo
    setFlipLight(!flipLight);
  }

  return (
    <button onClick={handleClick}>{flipLight ? <>ON</> : <>OFF</>}</button>
  );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<Toggle />);

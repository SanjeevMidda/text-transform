import { useState } from "react";
import "./index.css";

function App() {
  const [style, setStyle] = useState({ fontSize: 18, color: "red" });

  return (
    <div className="App">
      <div className="increase">
        <h1
          onClick={() => {
            setStyle({ ...style, fontSize: style.fontSize - 10 });
          }}
        >
          -
        </h1>
        <h1
          onClick={() => {
            setStyle({ ...style, fontSize: style.fontSize + 10 });
          }}
        >
          +
        </h1>
      </div>
      <div className="wordContainer">
        <h2>
          Lorem <span style={style}> ipsum </span> dolor sit, amet
          <span style={style}> consectetur </span> adipisicing elit. Minima
          sint,
          <span style={style}> libero </span> ut officia esse sed
          <span style={style}> quam </span> unde animi aliquid. Commodi
          recusandae quos, sint <span style={style}> quibusdam </span> molestias
          cumque soluta <span style={style}> neque </span> nisi consequatur.
        </h2>
      </div>
    </div>
  );
}

export default App;

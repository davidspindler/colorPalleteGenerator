import React, { useState } from "react";
import SingleColor from "./SingleColor";
import { ChromePicker } from "react-color";
import Values from "values.js";

function App() {
  const [color, setColor] = useState("#fff");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values("#f15025").all(10));

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color.hex).all(10);
      setList(colors);
      console.log(colors);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };
  return (
    <>
      <ChromePicker
        color={color}
        onChange={(updatedColor) => setColor(updatedColor)}
      />
      <section className="container">
        <h3>Color Generator</h3>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={color.hex}
            onChange={(e) => setColor(e.target.value)}
            placeholder="#f15025"
            className={`${error ? "error" : null}`}
          />
          <button className="btn" type="submit">
            {" "}
            submit
          </button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, index) => {
          return (
            <SingleColor
              key={index}
              {...color}
              index={index}
              hexColor={color.hex}
            />
          );
        })}
      </section>
    </>
  );
}

export default App;

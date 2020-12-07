import React, { useState } from "react";
import "./styles.css";
import { emojiData } from "./emojiData";

var heading = "Emoji Interpreter ";

export default function App() {
  //  state
  const [meaning, setMeaning] = useState("Meaning");

  // convert the object into Array
  const emojiArray = Object.keys(emojiData);

  function clickHandler(Inputemoji) {
    if (Inputemoji in emojiData) {
      setMeaning(emojiData[Inputemoji]);
    } else {
      setMeaning("Not Available");
    }
  }
  function inputChangeHandler(e) {
    let givenEmoji = e.target.value;
    if (givenEmoji in emojiData) {
      setMeaning(emojiData[givenEmoji]);
    } else {
      setMeaning("Not Available");
    }
  }

  return (
    <div className="App">
      <h1>{heading}</h1>

      <input onChange={inputChangeHandler} placeholder="Paste your emoji" />
      <h2>{meaning}</h2>

      {emojiArray.map((item) => {
        return (
          <span
            style={{ padding: "1rem", fontSize: "2rem", cursor: "pointer" }}
            onClick={() => clickHandler(item)}
          >
            {item}
          </span>
        );
      })}
    </div>
  );
}

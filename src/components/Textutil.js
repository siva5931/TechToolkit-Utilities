import React, { useState } from "react";

export default function Textutil() {
  const [text, setText] = useState("");
  const [modifiedText, setModifiedText] = useState("");

  const getCounts = () => {
    let words = 0;
    let chars = 0;

    if (modifiedText) {
      words = modifiedText.trim().split(/\s+/).length;
      chars = modifiedText.length;
    }

    return { words, chars };
  };

  const toupcase = () => {
    let newText = text.toUpperCase();
    setModifiedText(newText);
  };

  const toonchange = (event) => {
    setText(event.target.value);
    setModifiedText(""); // Clear modified text when typing
  };

  const tolocase = () => {
    let newText = text.toLowerCase();
    setModifiedText(newText);
  };

  const tocleartext = () => {
    let newText = "";
    setText(newText);
    setModifiedText(newText); // Clear modified text
  };

  const toCapitalize = () => {
    let words = text.split(" ");
    let capitalizedWords = words.map(
      (word) => word.charAt(0).toUpperCase() + word.slice(1)
    );
    let newText = capitalizedWords.join(" ");
    setModifiedText(newText);
  };

  const toCopy = () => {
    navigator.clipboard.writeText(modifiedText);
    alert("Text Copied");
  };

  return (
    <>
      <div id="text-util" className="container-fluid textutilcomp">
        <div className="text-center">
          <h5 className="card-head my-2">TextUtility Tools</h5>

          <h5 className="mb-4">
            Write your text and get the required changes in it. <br />
            You can convert your text to Uppercase, Lowercase, Capitalize and
            also copy the text.
          </h5>
        </div>
        <br />
        <h4>Enter text here to get required changes -</h4>
        <div className="form-floating">
          <textarea
            value={text}
            className="form-control textarea"
            placeholder="Write your text here"
            id="floatingTextarea2"
            rows="7"
            onChange={toonchange}
          ></textarea>
        </div>

        <div className="my-2 textutilbtns">
          <button
            disabled={text.length === 0}
            className="download-btn"
            onClick={toupcase}
          >
            Uppercase
          </button>

          <button
            disabled={text.length === 0}
            className="download-btn"
            onClick={tolocase}
          >
            Lowercase
          </button>

          <button
            disabled={text.length === 0}
            className="download-btn"
            onClick={tocleartext}
          >
            Clear
          </button>

          <button
            disabled={text.length === 0}
            className="download-btn"
            onClick={toCapitalize}
          >
            Capitalize
          </button>

          <button
            disabled={text.length === 0}
            className="download-btn"
            onClick={toCopy}
          >
            Copy Text
          </button>
        </div>

        <br />
        <h4>
          <b> Text Summary </b>
        </h4>
        <h5>Preview -</h5>
        <p>{modifiedText.length > 0 ? modifiedText : "Nothing to preview !!"}</p>
        <p>
          Words: {getCounts().words}, Characters: {getCounts().chars}
        </p>
      </div>
    </>
  );
}

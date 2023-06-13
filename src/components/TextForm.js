import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleOnClickUpperCase = () => {
    let newText = text.toLocaleUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!","success")
  };

  const handleOnClickLowerCase = () => {
    let newText = text.toLocaleLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!","success")
  };

  const handleOnClickClearText = () => {
    setText("");
    props.showAlert("Text is cleared!","success")
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div className="container" style= {{color: props.mode==='dark' ? 'white' : '#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            placeholder="Enter text here"
            style= {{backgroundColor: props.mode==='dark' ? 'grey' : 'white',color: props.mode==='dark' ? 'white' : '#042743'}}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button
          className={`btn btn-${props.color} mx-1`}
          onClick={handleOnClickUpperCase}
          disabled={text.length===0}
        >
          Convert to UpperCase
        </button>
        <button
          className={`btn btn-${props.color} mx-1`}
          onClick={handleOnClickLowerCase}
          disabled={text.length===0}
        >
          Convert to LowerCase
        </button>
        <button className={`btn btn-${props.color}`} 
          onClick={handleOnClickClearText}
          disabled={text.length===0}
        >
          Clear Text
        </button>
      </div>
      <div className="container my-3" style= {{color: props.mode==='dark' ? 'white' : '#042743'}}>
        <h2>Your text summary</h2>
        <p>
          {text === "" ? 0 : text.split(" ").filter((element)=>{ return element.length!==0 }).length} words and {text.length}{" "}
          characters
        </p>
        <p>
          {text === "" ? 0 : 0.008 * text.split(" ").filter((element)=>{ return element.length!==0 }).length} Minutes to read
        </p>
        <h2>Preview</h2> 
        <p>{text === "" ? "--Nothing to Preview--" : text}</p>
      </div>
    </>
  );
}

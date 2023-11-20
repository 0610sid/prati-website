import React, { useState } from 'react'
import PropTypes from 'prop-types'
import "../sass/events.css"

export default function TextForm(props) {
    const setupperCase=()=>{
        setText(text.toUpperCase())
    }
    const setlowerCase=()=>{
        setText(text.toLowerCase())
    }
    const ClearText=()=>{
        setText("")
    }
    const ClearExtraSpace=()=>{
      let newText=text.split(/[ ]+/)
      setText(newText.join(" "))
    }
    const CopyText=()=>{
      var ct=document.getElementById("box");
      ct.select();
      navigator.clipboard.writeText(ct.value);
    }
    const handleChange=(event)=>{
        setText(event.target.value)
    }
    const [text,setText]=useState("enter text here.")
  return (
    <>
    <div className='container  my-3'>
         <label htmlFor="my-box" className={`form-label text-${props.mode==='light'?'dark':'light'}`} id="my-box">Enter your text to be jupdated here.</label>
<div className="mb-3">
 
  <textarea className="form-control" id="box" onChange={handleChange} value={text} rows="8"></textarea>
</div>
<button type="button" className="btn btn-primary mx-1" onClick={setupperCase}>UPPERCASE</button>
<button type="button" className="btn btn-success mx-1"onClick={setlowerCase}>lowercase</button>
<button type="button" className="btn btn-danger  mx-1"onClick={ClearText}>Clear text</button>
<button type="button" className="btn btn-danger  mx-1"onClick={ClearExtraSpace}>Remove Extra Space</button>
<button type="button" className="btn btn-danger  mx-1"onClick={CopyText}>Copy text</button>
</div>
<div className={`container text-${props.mode==='light'?'dark':'light'}`}>
    <h2>Text Summmary</h2>
    <p>No of word :{text.split(" ").length}</p>
    <p>No of characters :{text.length}</p>
    <p>No. of sentences: {text.split(".").length-1}</p>
    <p>Time require to read the text {0.008*(text.split(" ").length)}</p>
    <p>Preview: {text}
    </p>
</div>

</>
  )
}
import React,{useState} from 'react'



import PropTypes from 'prop-types'

export default function TextForm(props) {

    function handleUpClick(){
       // console.log("Uppercase was clicked");
        let newText= text.toUpperCase();
        setText(newText);
        props.showAlert("text has been captalized!","success");
    }
   
    function handleOnChange(e){
       
        setText(e.target.value);
    }

    function handleClick(){
        let newText= text.toLowerCase();
        setText(newText);
        props.showAlert("text has been lowerCased!","success");
    }
    function clearText(){
        setText("");
        props.showAlert("text has been cleared!","success");
    }

    function copytext(){
        navigator.clipboard.writeText(text);//to copy text to clipboard
        props.showAlert("text has been copied to clipboard!","success");
    }

    const [text,setText]= useState('');
    //text is a state variable whose default value is enter text here
    //settext is function to change the text state
    return (
        <>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
            
         <div className="mb-3">
            <h1>{props.textName}</h1>
            <textarea className="form-control" onChange={handleOnChange}  value={text} id="mytext" rows="6" style={{backgroundColor: props.mode==='dark'?'lightslategrey':'white',
            color:props.mode==='dark'?'white':'black'}}></textarea>
        </div>
        <button disabled={text.length===0} onClick={handleUpClick} className="btn btn-primary mx-1 my-1">Convert to Uppercase</button>
        <button disabled={text.length===0} onClick={handleClick} className={`btn btn-${props.mode==='dark'?'light':'dark'} mx-1 my-1`}>Convert to LowerCase</button>
        <button disabled={text.length===0} onClick={clearText}  className="btn btn-primary mx-1 my-1">Clear text</button>
        <button disabled={text.length===0} onClick={copytext} className="btn btn-primary mx-1 my-1">Copy Text</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}> 
            <h2>Your Text Summary </h2>
            <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} Words and {text.length} Characters</p>
            <p>{text.split('.').length-1} Sentences and {(text.split('\n').length)-1} Paragraphs</p>
            {/*slpit returns an array with the entire string spillted acrross the given parameter*/ }
            <p>reading Time: {0.008*(text.split(" ").length-1)*60} seconds</p>
            <h3>Preview</h3>
            <p>{text.length>0?text:'Nothing to Preview'}</p>
            
            

        </div>
      </> 
    )
    }


TextForm.propTypes={
    textName: PropTypes.string,
}

TextForm.defaultProps={
    textName: "Enter your Message"
}


import React,{useState} from 'react'


export default function TextForm(props) {
    const [text,setText]=useState('');
    // setText("ffuh"); correct way to change the state
   

    const handleOnchange=(event)=>{
        console.log("on change");
        setText(event.target.value);
    }
    const handleupclick=()=>{
        // console.log("uppercase was clicked");
        // setText("you have clicked uppercase ");
        let newtext=text.toUpperCase();
        setText(newtext);
        props.showAlert("Coverted to uppercase","Succes")

    }
    const handleloclick=()=>{
        let d=text.toLowerCase();
        setText(d);
        props.showAlert("Coverted to lowercase","Succes")
    }
    const handleClear=()=>{
        let newtext="";
        setText(newtext);
        props.showAlert("text cleared","Succes")

    }
    const handleCopy=()=>{
        console.log("i am copy");
        var text=document.getElementById("myBox");
        text.select();
        text.setSelectionRange(0,99999);
        navigator.clipboard.writeText(text.value);
        props.showAlert("text copied","warning")

    }
    const handleExtraSpaces=()=>{
        let newText=text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert("all extra spaces cleared","success")
    }
    return (
        
        <>
        <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                <label for="myBox"  className="form-label"></label>
                <textarea className="form-control" value={text} onChange={handleOnchange} style={{backgroundColor:props.mode==='dark'?'gray':'white',color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="12"></textarea>
                </div>
                <button className="btn btn-primary my-2" onClick={handleupclick} >Convert to uppercase</button> 
                <button className="btn btn-success my-2 mx-2" onClick={handleloclick} >Convert to lowercase</button> 
                <button className="btn btn-danger my-2 mx-2" onClick={handleClear} >clear text</button> 
                <button className="btn btn-secondary my-2 mx-2" onClick={handleCopy} >copy text</button> 
                <button className="btn btn-warning my-2 mx-2" onClick={handleExtraSpaces} >Remove extra spaces</button>
        </div>
        <div className="container my-3"style={{color:props.mode==='dark'?'white':'#042743'}}>
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words and {text.length} chracters</p>
            <p>{0.008*text.split(" ").length} minutes read</p>
            <h2>preveiw</h2>
            <p>{text.length>0?text:"enter something in textbox to preview it here"}</p>
        </div>
      </>
    )
}

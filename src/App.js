 
import './App.css';
import Navbar from './component/Navbar.js';
import TextForm from './component/TextForm.js';
import About from './component/About';
import React,{useState} from 'react'
import Alert from './component/Alert';
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom"


function App() {
  const [mode, setMode] = useState('light');
  const toggleMode=()=>{
    if (mode==='light') {
      setMode('dark')
      document.body.style.backgroundColor='lightblue'
      showAlert("Darkmode has been enabled","success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
      showAlert("Lightmode has been enabled","success")

    }
  }
  const [alert, setAlert] = useState(null)
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      Type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  return (
<>
 <Router>
 <Navbar title="Textutils" abouttext="about us" mode={mode} toggleMode={toggleMode} />
<Alert alert={alert} /> 
<div className="container" my="3">
 <Routes>
    <Route exact path="/" element={<TextForm mode={mode} heading="enter text here" showAlert={showAlert} />}/>
    <Route exact path="/about" element={<About/>}/>

 </Routes>
</div>
 </Router>
</>
  );
}

export default App;

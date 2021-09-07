// import About from './Components/About'
import Navbar from './Components/Navbar'
import TextForm from './Components/TextForm'
import React, { useState } from 'react';
import Alert from './Components/Alert';
import About from './Components/About';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";



//{} is used to render javascript component
//all html tags has to be closed
function App() {
  const [mode, setmode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert=(message,type)=>{
   setAlert({
     message:message,
     type:type
   })
   setTimeout(() => {
     setAlert(null);
   }, 1500);
  }

 


  const toggleMode=()=>{
    if(mode==='dark'){
      setmode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light Mode has been Enabled","success")
     
    }
    else{
      setmode('dark');
      document.body.style.backgroundColor='black';
      showAlert("Dark Mode has been enabled","success")
    }
  }

  return (
   
    <>
    <Router>
    <Navbar title='TextUtils' mode={mode} toggleMode={toggleMode}  />
    <Alert alert={alert}/>
    <Switch>
          <Route exact path="/about">
            <About mode={mode} />
          </Route>
          <Route eaxct path="/">
          <TextForm showAlert={showAlert} textName="Enter your Text to Analyze" mode={mode} />
          </Route>
      </Switch>
    
      </Router>
    {/* <About/> */}
    
    </>
  );
  
}

export default App;

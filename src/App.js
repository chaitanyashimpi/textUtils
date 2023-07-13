import React, { useState } from "react";

import './App.css'
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Alert from "./components/Alert";

import { BrowserRouter, Routes, Route } from "react-router-dom";


const App = () => {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState();

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=> {
        setAlert(null)
    }, 1500)
  }

  const toggleMode = () => {
    if(mode === 'light'){
      setMode("dark")
      document.body.style.backgroundColor = '#41474D'
      showAlert("Dark Mode has been enabled", "success")
      document.title = 'TextUtils - DarkMode'
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode has been enabled", "success")
      document.title = 'TextUtils - LightMode'
    }
  }
  return (
    <>
        <BrowserRouter>
          <Navbar title="Cratonik" mode={mode}  toggleMode = {toggleMode}/>
          <Alert alert = {alert} />
          <div className="container">
          
            <Routes>
              <Route element={<TextForm heading="Enter the text to analyze below" showAlert = {showAlert} mode = {mode} />} path='/' exact/>
              <Route element={<About />} path='/about' exact/>
            </Routes>
          </div>
        </BrowserRouter>
      
    </>
  );
};

export default App;

import React,{useState} from 'react';
import moonIcon from './assets/moon.png';
import sunIcon from './assets/sun.png';
import './App.css';
import Header from './components/header/Header';
import Keypad from './components/keypad/Keypad';


function App() {
  const [isDarkMode,setIsDarkMode]=useState(false);
  const [expression,setExpression]=useState("");
  const[result,setResult]=useState("");
  const handleKeyPress=(keyCode,key)=>{
    if(!keyCode)return;
  };
  return (
    <div className="app" 
    tabIndex="0"
    onKeyDown={(event)=>handleKeyPress(event.keyCode,event.key)}
    data-theme={isDarkMode?"dark":""}>
      <div className="app_calculator">
        <div className="app_calculator_navbar">
          <div className="app_calculator_navbar_toggle"
          onClick={()=>setIsDarkMode(!isDarkMode)}>
            <div className={`app_calculator_navbar_toggle_circle ${isDarkMode?"app_calculator_navbar_toggle_circle_active":""}`}>
            </div>
            <img src={isDarkMode ? moonIcon : sunIcon} alt="mode" />
          </div>
        </div>
        <Header />
        <Keypad handleKeyPress={handleKeyPress}/>
      </div>
    </div>
  );
}

export default App;

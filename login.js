//import React from 'react';
import './App.css';

//import About from './About';
//import Tell from './components/T1.js';
import { useNavigate} from 'react-router-dom';
// import  { useRef } from 'react';
// import emailjs from '@emailjs/browser';
import React, { useState } from 'react';
const App3 = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [from_name, seto_name] = useState("");
  // const form = useRef();
  //const navigate = useNavigate();
  const HandleSubmit = async (e) => {
   // e.preventDefault();
    //const navigate=useNavigate()
    // Send username and password to the backend
    const response = await fetch('http://localhost:5000/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body:JSON.stringify({username,password}),
    });
   

    const data = await response.json();
    if (response.ok) {
      alert('User registered successfully!');
      
      //navigate('/dashboard')
    } else {
      alert(Error: ${data.message});
    }
    
  };
  
  const handleChange = (event) => {
    setUsername(event.target.value);
    
  };
  const handleChange2 = (event) => {
    setPassword(event.target.value);
    
  };
  
 const navigate=useNavigate();
function handle(e){
   
  navigate('/T2');
 
  HandleSubmit()
 
}




  
  
  



  return (
    <>
     <div className="container">
        <div className="head">
            <h1 className="bebas-neue-regular  "> APP LOGIN  PAGE</h1>
        </div>
        
        <form    onSubmit={handle} className="vinu" >
            <label for="usn" className="bebas-neue-regular" >Username :</label>
            <input type="text" placeholder="Enter your Username" required id="usn" className="bebas-neue-regular toadd" value={username} onChange={handleChange} ></input>
            <br></br>
            <label for="pwd" className="bebas-neue-regular" >Password : </label>
            <input type="password" placeholder="Enter your Password" required id="pwd" className="bebas-neue-regular" value={password} onChange={handleChange2} ></input>
            <br></br>
            <button    value="LOGIN" >LOGIN  </button>
            
        </form>
    </div>
    
    
   
  </>
  );
}


export default App3;
// import logo from './logo.svg';
import './App.css';
import Home from './Comp/Home';
import { Routes,Route } from 'react-router-dom';
import Signup from './Comp/Signup';
import Innerpage from './Comp/Innerpage';
import { auth } from "./Comp/firebas";
import { useEffect, useState } from 'react';
function App() {
  // console.log();
  const [user,setuser]=useState("");
  useEffect(()=>{
      auth.onAuthStateChanged((user)=>{
        console.log(user);
        if(user){
          setuser(user);
        }
      })
  },[])
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home user={user} />} />
        <Route path="/signup" element={<Signup user={user} />} />
        <Route path="/mainpage" element={<Innerpage user={user} />} />
      </Routes>
    </div>
  );
}

export default App;

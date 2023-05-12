import React, { useState } from 'react'
import appleicon from "./appleicon.webp";
import googleicon from "./googleicon.png";
import {  createUserWithEmailAndPassword,updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
// import {  } from 'firebase/auth';
import { auth } from './firebas';
export default function Signup() {
   var list_ = [
    {name:"User",place:"Write the Username",type:"text"},
    { name: "Email", place: "", img_: googleicon ,type:"text"},
    { name: "Password", place: "write your password",type:"password" },
   ];
    var [messstate, setmessstate] = useState("");

   var navi = useNavigate();
   var [states, setStates] = useState({
    User:"",
     Email: "",
     Password: "",
   });
   // console.log(states);
   async function submithandler(e) {
     console.log(states);
    if (
      states.Email !== "" &&
      states.Password !== "" &&
      states.User !== ""
    ) {
      try {
        var data = await createUserWithEmailAndPassword(
          auth,
          states.Email,
          states.Password
        );
        console.log(data);
        await updateProfile(data.user, {
          displayName: states.User,
        });
        console.log("profile is updated");
        setTimeout(() => {
          navi("/mainpage");
        }, 2000);
      } catch (e) {
        console.log(e);
      }
    } else {
      setmessstate("Fill the Details First");
      setTimeout(() => setmessstate(""), 1000);
    }
   }
   return (
     <div className="con">
       <div className="left">Board.</div>
       <div className="right">
         <div className="rcon">
           <div id="headings">
             <h1 id="hh1">Sign Up</h1>
             <p id="pp1">Sign up to your Account</p>
           </div>
           {/* <div id="slides_buttons">
             <div id="google_">
               {" "}
               <img
                 src={googleicon}
                 style={{ width: "25px", height: "25px", marginRight: "10px" }}
               />{" "}
               Sign in with Google
             </div>
             <div id="apple_">
               {" "}
               <img
                 src={appleicon}
                 style={{ width: "45px", height: "45px", marginRight: "5px" }}
               />{" "}
               Sign in with Apple
             </div>
           </div> */}
           <div id="main_">
             {/* <div style={{ display: "flex", flexDirection: "column" }}>
              <label id="lbl"> Email</label>
              <input id="inp" type="text" />
            </div> */}

             {list_.map((e, i) => {
               return (
                 <div
                   style={{
                     display: "flex",
                     flexDirection: "column",
                     marginBottom: "25px",
                   }}
                   key={i}
                 >
                   <label id="lbl"> {e.name}</label>
                   <input
                     onChange={(e) => {
                       setStates({
                         ...states,
                         [e.target.name]: e.target.value,
                       });
                     }}
                     name={e.name}
                     id="inp"
                     placeholder={e.place}
                     type={`${e.type}`}
                   />
                 </div>
               );
             })}
             {/* <h2 id="rp2">Forget Password ?</h2> */}

             <button onClick={submithandler} id="btn_si">
               Sign Up
             </button>
             <p style={{ color: "red", marginTop: "-30px" }}>
               {" "}
               {messstate ? messstate : ""}
             </p>
           </div>

           <h3
             onClick={() => {
               return navi("/");
             }}
             id="rh3"
           >
             Have an Account ? Go to <span id="rsp1">Login Page</span>{" "}
           </h3>
         </div>
       </div>
     </div>
   );

}

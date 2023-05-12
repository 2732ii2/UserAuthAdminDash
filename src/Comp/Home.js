import React, { useEffect, useState } from 'react'
import appleicon from './appleicon.webp';
import googleicon from "./googleicon.png";
import { useNavigate } from 'react-router-dom';
import { auth } from './firebas';
import { signInWithEmailAndPassword } from 'firebase/auth';
export default function Home(user) {
    var navi = useNavigate();
    var [messstate,setmessstate]=useState("");
    console.log("this is ",user);
    useEffect(()=>{
        if(user.user){
            console.log("we have a user");
            navi('/mainpage');
        }
        else{
            console.log("we don't have a user ");
        }
    },[user])
    var list_ = [
      { name: "Email", place: "" ,img_:googleicon,type:"text"},
      { name: "Password", place: "write your password",type:"password" },
    ];
    var [states, setStates] = useState({
      Email: "",
      Password:""
    });
    // console.log(states);
    function submithandler(e)
    {
        console.log(states);
        if(states.Email !== "" && states.Password !== "")
        {
          signInWithEmailAndPassword(auth, states.Email, states.Password)
            .then((data) => {
              console.log(data);
            })
            .catch((e) => {
              console.log(e);
            });
        }
        else{
          setmessstate("Fill the Details First");
          setTimeout(()=>setmessstate(""),1000);
        }
    }
  return (
    <div className="con">
      <div className="left">Board.</div>
      <div className="right">
        <div className="rcon">
          <div id="headings">
            <h1 id="hh1">Sign In</h1>
            <p id="pp1">Sign in to your Account</p>
          </div>
          <div id="slides_buttons">
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
          </div>
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
            <h2 id="rp2">Forget Password ?</h2>
            <button onClick={submithandler} id="btn_si">
              Sign In
            </button>
            <p style={{ color: "red",marginTop:"-30px" }}> {messstate?messstate:""}</p>
          </div>

          <h3
            onClick={() => {
              return navi("/signup");
            }}
            id="rh3"
          >
            Don't have an Account ? <span id="rsp1">Register here</span>{" "}
          </h3>
        </div>
      </div>
    </div>
  );
}

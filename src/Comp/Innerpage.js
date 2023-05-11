import React, { useEffect } from 'react'
import { auth } from './firebas'
import './in.css';
import userimg from './user.jpeg';
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";

import ScheduleIcon from "@mui/icons-material/Schedule";
import GroupIcon from "@mui/icons-material/Group";
import ReceiptIcon from "@mui/icons-material/Receipt"; //transactions
import ThumbUpIcon from "@mui/icons-material/ThumbUp";//likes
import SettingsIcon from "@mui/icons-material/Settings";
import PaidIcon from "@mui/icons-material/Paid";
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut} from "react-chartjs-2";

export default function Innerpage(user) {
    var navigate=useNavigate();

  ChartJS.register(ArcElement, Tooltip, Legend);
    var li_=[{name:"Dashboard"},{name:"Transactions"},{name:"Schedule"},{name:"Users"},{name:"Setting"}];
    const data = {
      labels: ["Red", "Blue", "Yellow"],
      datasets: [
        {
          label: "My First Dataset",
          data: [300, 50, 100],
          backgroundColor: ["#98D89E", "#EE8484", "#F6DC7D"],
          hoverOffset: 4,
        },
      ],
    };
    

    var li_2 = [
      { name: "Total Revenues", price: "2,129,430" },
      { name: "Total Transactions", price: "1,520" },
      { name: "Total Likes", price: "9,721" },
      { name: "Total Users", price: "892" },
    ];
    async function signoutfunction(e)
    {
        // e.preventDefault();
       try{
         await signOut(auth);
         console.log("logged out");
         setTimeout(()=>{
            navigate("/signup");
         },100);
        //  window.location.reload(true);
       }
       catch(e)
       {
        console.log(e);
       }
        

    }
  return (
    <div className="innerpage">
      {user.user ? (
        <>
          <div className="ileft">
            <div className="bileft">
              <h1 id="bih1">Board.</h1>
              <div id="idi">
                {li_.map((e, i) => {
                  return (
                    <h2 id="idih" key={i}>
                      {i === 0 ? (
                        <DashboardCustomizeIcon />
                      ) : i === 1 ? (
                        <PaidIcon />
                      ) : i === 2 ? (
                        <ScheduleIcon />
                      ) : i === 3 ? (
                        <SupervisedUserCircleIcon />
                      ) : i === 4 ? (
                        <SettingsIcon />
                      ) : (
                        <SettingsIcon />
                      )}{" "}
                      <span id="idsp">{e.name}</span>
                    </h2>
                  );
                })}
              </div>

              <div id="lastlidiv">
                <h3 id="h_last">Help</h3>
                <p id="h_pl">Contact US</p>
              </div>
            </div>
          </div>
          <div className="iright">
            <div id="iri">
              <div id="firstslid">
                <h2>Dashboard</h2>
                <div id="ifid">
                  <div id="searchdiv"></div>
                  <div id="iconduv">
                    <NotificationsNoneIcon style={{ fontSize: "42px" }} />
                  </div>
                  <div onClick={signoutfunction} id="useriddiv">
                    {" "}
                    <img src={userimg} id="img_" />
                  </div>
                </div>
              </div>
              <div id="secdiv">
                {li_2.map((e, i) => {
                  return (
                    <div className={`_${i}_`} key={i} id="same_sec">
                      <div id="ssd">
                        {i === 0 ? (
                          <PaidIcon style={{ fontSize: "44px" }} />
                        ) : i === 1 ? (
                          <ReceiptIcon style={{ fontSize: "44px" }} />
                        ) : i === 2 ? (
                          <ThumbUpIcon style={{ fontSize: "44px" }} />
                        ) : i === 3 ? (
                          <GroupIcon style={{ fontSize: "44px" }} />
                        ) : (
                          <ThumbUpIcon />
                        )}
                      </div>
                      <h4 id="shp">{e.name}</h4>
                      <p id="slp">${e.price}</p>
                    </div>
                  );
                })}
              </div>
              <div id="thirdiv">
                <div id="thdi">{/* <Doughnut data={data} /> */}</div>
              </div>
              <div id="foudiv">
                <div id="lfd">
                  <div className="slide">
                    <h4 id='sh4'>Top products</h4>
                    <h5 id='sh5'>May-June 2021</h5>
                  </div>
                  <div
                    style={{
                      width: "90%",
                      height: "78%",
                      marginTop:"20px",
                      display:"flex",
                      justifyContent:"space-between",
                      alignItems:"center"
                      // border: "1px solid black",
                    }}
                  >
                    <Doughnut data={data} />
                    <div id='tpass'>

                    </div>
                  </div>
                </div>
                <div id="rfd"></div>
              </div>
            </div>
          </div>
        </>
      ) : (
        "Sorry something went wrong"
      )}

      {/* <button onClick={signoutfunction}>Log out</button> */}
    </div>
  );
}

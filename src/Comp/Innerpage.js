import React, { useEffect } from 'react'
import { auth } from './firebas';
// import faker from "faker";
import './in.css';
import userimg from './user.jpeg';
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import {
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title
} from "chart.js";
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
import { Line } from "react-chartjs-2";

export default function Innerpage(user) {
    var navigate=useNavigate();

  ChartJS.register(
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
  );
  var l_graph = [
    { name: "Basic Trees", percent: "55%", color: "#98D89E" },
    { name: "Custom Short Pants", percent: "31%", color: "#F6DC7D" },
    { name: "Super Hoodies", percent: "14%", color: "#EE8484" },
  ];
  const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' ,
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};
const labels = ["January", "February", "March", "April", "May", "June", "July"];
  const data_2 = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: [1000,0,400,-800,-200,200,400]
        ,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Dataset 2",
        data:  [1000,500,0,200,600,0,-600],
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  var l_right = [
    {
      name: "Meeting with suppliers from Kuta Bali",
      time: "14.00-15.00",
      duration: "14.00-15.00",
      color: "#9BDD7C",
    },
    {
      name: "Check operation at Giga Factory 1",
      time: "18.00-20.00",
      duration: "at Central Jakarta ",
      color: "#6972C3",
    },
  ];
    var li_=[{name:"Dashboard"},{name:"Transactions"},{name:"Schedule"},{name:"Users"},{name:"Setting"}];
    const data = {
      // labels: ["Red", "Blue", "Yellow"],
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
                  <div id="searchdiv">
                    <input type='text' style={{border:"none",outline:"none",width:"95%",height:"95%"}} />
                  </div>
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
                <div id="thdi">
                  {/* <Doughnut data={data} /> */}
                  <Line  options={options} data={data_2} />
                </div>
              </div>
              <div id="foudiv">
                <div id="lfd">
                  <div className="slide">
                    <h4 id="sh4">Top products</h4>
                    <h5 id="sh5">May-June 2021</h5>
                  </div>
                  <div
                    style={{
                      width: "90%",
                      height: "78%",
                      marginTop: "10px",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      // border: "1px solid black",
                    }}
                  >
                    <Doughnut data={data} />
                    <div
                      style={{ overflow: "hidden", height: "100%" }}
                      id="tpass"
                    >
                      {l_graph.map((e, i) => {
                        return (
                          <div style={{ marginTop: "10px" }}>
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                marginBottom: "5px",
                                fontSize: "20px",
                                overflow: "hidden",
                              }}
                            >
                              {" "}
                              <div
                                style={{
                                  background: `${e.color}`,
                                  width: "10px",
                                  height: "10px",
                                  marginRight: "10px",
                                  borderRadius: "20px",
                                }}
                              >
                                {" "}
                              </div>{" "}
                              {e.name}
                            </div>
                            <p style={{ fontSize: "14px" }}>{e.percent}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div id="rfd">
                  <div className="slide">
                    <h4 id="sh4">Today's schedule</h4>
                    <h5 id="sh5">See All</h5>
                  </div>
                  <div
                    style={{
                      width: "90%",
                      height: "70%",
                      // border: "1px solid black",
                      marginTop: "10px",
                      display: "flex",
                      flexDirection: "column",
                    }}
                    className="bottom_part"
                  >
                    {l_right.map((e, i) => {
                      return (
                        <div
                          key={i}
                          style={{
                            width: "100%",
                            height: "50%",
                            // border: "1px solid black",
                            marginTop: "10px",
                            display: "flex",
                            overflow: "hidden",
                            marginLeft: "10px",
                          }}
                        >
                          {" "}
                          <div
                            style={{
                              width: "5px",
                              borderRadius: "20px",
                              height: "90%",
                              background: `${e.color}`,
                            }}
                            id="slit"
                          ></div>{" "}
                          <div style={{ marginLeft: "20px" }}>
                            <h2 id="sli_n_2">{e.name}</h2>
                            <h5 id="sli_n_5">{e.time} </h5>
                            <h5 id="sli_n_5">{e.duration}</h5>
                          </div>{" "}
                        </div>
                      );
                    })}
                  </div>
                </div>
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

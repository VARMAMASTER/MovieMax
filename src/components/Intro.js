import React from "react";

export default function Intro() {
  const myStyle = {
    color: "rgb(114,149,186",
    letterSpacing: "2px",
    paddingLeft: "20px",
  };
  return (
    <>
      <div className="information">
        <div style={myStyle} className="info">
          <h6>Unlimited Movies, TV Shows and More.</h6>
          <h1 style={{color:"white",fontSize:"62px"}}>The best streaming platform</h1>
          <h1 style={{color:"rgb(251,112,97)",fontSize:"52px"}}>Play & Chill mode​</h1>
          <h3 style={{color:"rgb(114,149,186",}}>READY TO ENTERTAIN YOUR SELF?​</h3>
          <div className="introbuttons">
            <button id="button1">Get Started</button>
            <button id="button2">Join Us</button>
          </div>
        </div>
        <div className="details">
          <ol>
            <li>
              <h2>Extremelly Fast</h2>
              <p>Faster download then other streaming platform and moderate real-time streaming.</p>
            </li>

            <li>
              <h2>Own List and History watchlist</h2>
              <p>No need to remember which movie or show you leave last time, Simply go to continue list and resume your session again.</p>
            </li>

            <li>
              <h2>Get started with MovieMax</h2>
              <p>Create an account, choose enjoy your watching with adaptive streaming</p>
            </li>
          </ol>
        </div>
      </div>
    </>
  );
}

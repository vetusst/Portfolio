import React from "react";
import BackgroundVideoMP4 from "../../../res/img/BlockChainBackground.mp4";
import BackgroundVideoWebM from "../../../res/img/BlockChainBackground.webm";
import BackgroundGif from "../../../res/img/BlockChainBackgroundGif.gif";
import introDivider from "../../../res/img/intro-divider.svg"

const Introduction = (props) => {
  return (
    <section className="intro-wrapper section" data-anchor="intro" id="intro-section">
      <video id="myVideo" ref={props.videoRef} poster={BackgroundGif} autoPlay muted loop playsInline>
        <source src={BackgroundVideoWebM} type="video/webm"/>
        <source src={BackgroundVideoMP4} type="video/mp4"/>
      </video>
      <nav className="navbar-main">
            <a className="underline" href="#intro" >Home</a>
            <a className="underline" href="#about" >About</a>
            <a className="underline" href="#projects">Projects</a>
            <a className="underline" href="#contact">Contact</a>
      </nav>
      <div className="intro-wrapper-main">
          <h1>Daniil Melnikav</h1>
          <img src={introDivider} alt=""></img>
          <h2>Web Developer's Profile</h2>
      </div>
    </section>
  );
};

export default Introduction;

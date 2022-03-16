import Introduction from "./components/pages/Introduction/Introduction";
import About from "./components/pages/About/About";
import Projects from "./components/pages/Projects/Projects";
import Contact from "./components/pages/Contact/Contact";
import React, { useEffect, useRef, useState } from "react";
import particlesConfig from "../src/res/js/particlesConfig";

import "fullpage.js/vendors/scrolloverflow";
import ReactFullpage from "@fullpage/react-fullpage";

import { AiOutlineRotateRight } from "react-icons/ai";
import NavbarMobile from "./components/NavbarMobile";

export const Context = React.createContext()


const App = (props) => {
  const videoRef = useRef();
  const particlesRefAbout = useRef();
  const particlesRefProjects = useRef();
  const toggleNavBtnAbout = useRef();
  const toggleNavBtnProjects = useRef();
  const toggleNavBtnContact = useRef();
  
  const [mobileNavActive, setMobileNavActive] = useState(false)
  const [particlesPaused, setParticlesPaused] = useState(false);

  const afterLoadFun = (origin) => {
    if (!particlesPaused) {
      if (origin.item.id === "about-section") particlesRefAbout.current.pause();
      else if (origin.item.id === "projects-section") particlesRefProjects.current.pause();
    }
  };

  const onLeaveFun = (origin, destination) => {
    if (destination.item.id === "intro-section") videoRef.current.play();

    if (!particlesPaused) {
      if (destination.item.id === "about-section") particlesRefAbout.current.play();
      else if (destination.item.id === "projects-section") particlesRefProjects.current?.play();
    } else {
      if (!particlesRefAbout.paused && destination.item.id === "about-section") particlesRefAbout.current.pause();
      else if (!particlesRefProjects.paused && destination.item.id === "projects-section") particlesRefProjects.current.pause();
    }
  };

  return (
    <Context.Provider value={{
      setParticlesPaused: setParticlesPaused,
      particlesPaused:particlesPaused,
      particlesRefAbout: particlesRefAbout,
      particlesRefProjects: particlesRefProjects
    }}>
      <div id="rotation-request">
        <h1>Please, Rotate Screen</h1> <AiOutlineRotateRight size="cssSize" />
      </div>
      {window.innerWidth < 450 && 
        <NavbarMobile 
          toggleNavBtns={[
            toggleNavBtnAbout, toggleNavBtnContact, toggleNavBtnProjects
          ]} 
          mobileNavActive={mobileNavActive} 
          setMobileNavActive={setMobileNavActive}
        />
      }
      <ReactFullpage
        scrollingSpeed={500}
        parallax={true}
        afterLoad={afterLoadFun}
        onLeave={onLeaveFun}
        scrollHorizontally={true}
        slidesNavigation={true}
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <Introduction videoRef={videoRef} />
              <About
                toggleNavBtn={toggleNavBtnAbout}
                particlesRefAbout={particlesRefAbout}
                optionsAbout={particlesConfig.about}
              />
              <Projects
                toggleNavBtn={toggleNavBtnProjects}
                particlesRefProjects={particlesRefProjects}
                optionsProjects={particlesConfig.projects}
              />
              <Contact toggleNavBtn={toggleNavBtnContact}/>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </Context.Provider>
  );
}

export default App;

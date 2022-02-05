import React from 'react';
import ReactDOM from 'react-dom';
import { useState, useRef } from "react"

import App from './App';
import Navbar from './components/Navbar';

import './res/css/styles.css';

import 'fullpage.js/vendors/scrolloverflow';
import ReactFullpage from '@fullpage/react-fullpage'
import { AiOutlineRotateRight } from 'react-icons/ai'

const Fullpage = () => {
  const videoRef = useRef()
  const particlesRefAbout = useRef();
  const particlesRefProjects = useRef();

  const [particlesPaused, setParticlesPaused] = useState(false)

  const afterLoadFun = origin => {
    // if (origin.item.id === 'intro-section' && !origin.isFirst) videoRef.current.pause()

    if (!particlesPaused) {
      if (origin.item.id === 'about-section') particlesRefAbout.current.pause()
      else if (origin.item.id === 'projects-section') particlesRefProjects.current.pause()
    }
  }

  const onLeaveFun = (origin, destination) => {
    if (destination.item.id === 'intro-section') videoRef.current.play()

    if (!particlesPaused) {
      if (destination.item.id === 'about-section') particlesRefAbout.current.play()
      else if (destination.item.id === 'projects-section') particlesRefProjects.current?.play()
    } else {
      if (!particlesRefAbout.paused && destination.item.id === 'about-section') particlesRefAbout.current.pause()
      else if (!particlesRefProjects.paused && destination.item.id === 'projects-section') particlesRefProjects.current.pause()
    }
  }

  return (<div>
  <div id='rotation-request'><h1>Please, Rotate Screen</h1> <AiOutlineRotateRight size='cssSize'/></div>
  <Navbar />
  <ReactFullpage
    scrollingSpeed = {500}
    parallax = {true}
    afterLoad={afterLoadFun}
    onLeave={onLeaveFun}
    scrollHorizontally = {true}
    slidesNavigation = {true}

    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <App 
            videoRef={videoRef} 
            particlesRefAbout={particlesRefAbout} 
            particlesRefProjects={particlesRefProjects} 
            setParticlesPaused={setParticlesPaused} 
            particlesPaused={particlesPaused}z
          />
        </ReactFullpage.Wrapper>
      );
    }}/>
  </div>);
}
ReactDOM.render(<Fullpage />, document.getElementById('root'));
import Introduction from './components/Introduction'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import { useEffect, useRef, useState } from 'react/cjs/react.development'
import particlesConfig from '../src/res/js/particlesConfig'

function App(props) {  
  return (
    <div className="container scroll-container" id="main"> 
      <Introduction videoRef={props.videoRef}/>
      <About 
        particlesRefAbout={props.particlesRefAbout} 
        optionsAbout={particlesConfig.about} 
        setParticlesPaused={props.setParticlesPaused}
        particlesPaused={props.particlesPaused}
      />
      <Projects 
        particlesRefProjects={props.particlesRefProjects} 
        optionsProjects={particlesConfig.projects}
        setParticlesPaused={props.setParticlesPaused}
        particlesPaused={props.particlesPaused}
      />
      <Contact/>
    </div>
  );
}

export default App;

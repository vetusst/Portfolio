import React from 'react'
import Svgs from './Svgs.js'
import careeteSvg from '../res/img/careeteSvg.svg'
import desktopSvg from '../res/img/desktopSvg.svg'
import about_divider from '../res/img/about_divider.svg'
import lang_ru from '../res/img/RU.svg'
import lang_en from '../res/img/EN.svg'
import lang_pl from '../res/img/PL.svg'
import navbar_divider from '../res/img/navbar_divider.svg'
import Particles from "react-tsparticles";
import Settings from "./Settings"
import { FiMenu } from "react-icons/fi";



const About = props => {
    return (
        <section className="about-wrapper section" id="about-section" data-anchor="about">
            {window.innerWidth > 1160 && <Settings particles={props.particlesRefAbout} setParticlesPaused={props.setParticlesPaused} particlesPaused={props.particlesPaused}/>}
            {window.innerWidth < 450 && <FiMenu id="menu-btn" size="35" className='menu-btn' color='#fff'/> }
            <div className="section-name"><span className='side-section-name'>about</span></div>
            <div className="about__aboutme">
                <p>I am a CS Student,</p>
                <p>enamored of Computer engineering,</p>
                <p>And loving to turn my Ideas into Code</p>
            </div>
            <div className="about__greeting"><img src={careeteSvg} alt='careete svg'></img> <h1>Hi, <span>I'm Daniil.</span></h1></div>
            <div className="about__desktopSvg"><img src={desktopSvg} alt='desktop svg'></img></div>
            <div className="about__divider"><img src={about_divider} alt='divider'></img></div>
            <div className="about__skillsTitle"><h2>skills</h2></div>
            <div className="about__skillsContent">
                < Svgs />
                <div className="about__softSkills">
                    <ul>
                        <li>Self-teaching</li>
                        <li>Problem-Solving</li>
                        <li>Highly organized</li>
                        <li>Critical thinking</li>
                    </ul>
                    
                </div>
            </div>
            <div className="about__languages">
                <h2>Languages</h2>
                <div className='languagesContainer'>
                    <img src={lang_ru} alt="ru"></img>
                    <img src={lang_en} alt="en"></img>
                    <img src={lang_pl} alt="pl"></img>
                </div>
            </div>
            <div className='about__navbar'>
                {window.innerWidth > 450 && <div className='navbarContainer'>
                    <a href='#intro'><span className="nav-intro">home</span></a>
                    <img src={navbar_divider} alt="divider"></img>
                    <a href='#about'><span className="nav-about nav-active">about</span></a>
                    <img src={navbar_divider} alt="divider"></img>
                    <a href='#projects'><span className="nav-projects">projects</span></a>
                    <img src={navbar_divider} alt="divider"></img>
                    <a href='#contact'><span className="nav-contact">contact</span></a>
                </div>}
            </div>
            <div className='openNav'></div>
            <Particles id="tsparticles1" className="particles" container={props.particlesRefAbout} options={props.optionsAbout}/>
        </section>
    )
}

export default About

import React from 'react'
import Particles from "react-tsparticles";

import ParticlesToggle from '../../ParticlesToggle';
import NavbarDesktop from '../../NavbarDesktop';
import SwiperDesktop from './SwiperDesktop';
import SwiperMobile from './SwiperMobile';

import { FiMenu } from "react-icons/fi";
import careeteSvgBlack from '../../../res/img/careeteSvgBlack.svg'

const Projects = props => {
    return (
        <section className="projects-wrapper section" data-anchor="projects" id='projects-section'>
            {window.innerWidth > 1160 && <ParticlesToggle particlesRef={props.particlesRefProjects}/>}
            {window.innerWidth < 450 && <div className='menu-btn' ref={props.toggleNavBtn}><FiMenu size="35"/></div> }
            <div class="projects__title"><img src={careeteSvgBlack} alt='careete svg'></img> <h1>something <span>I've built.</span></h1></div>
            <div class="section-name"><span className='side-section-name'>projects</span></div>
            {window.innerWidth > 450 && 
                <div class="projects__navbar">
                    <NavbarDesktop page="projects"/>
                </div>}
            {window.innerWidth > 1160 ? <SwiperDesktop /> : <SwiperMobile />}
            <Particles id="tsparticles2" className="particles" container={props.particlesRefProjects} options={props.optionsProjects}/>
        </section>
    )
}

export default Projects

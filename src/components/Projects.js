import React, { useState, useEffect, useRef } from 'react'
import Particles from "react-tsparticles";
import ProjectCard from './ProjectCard';
import careeteSvgBlack from '../res/img/careeteSvgBlack.svg'
import navbar_divider from '../res/img/navbar_divider_black.svg'
import projectsData from '../res/js/projectsData'
import Settings from './Settings';
import { Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import SwiperCore, { EffectCoverflow, Pagination } from 'swiper';
import { FiMenu } from "react-icons/fi";

SwiperCore.use([EffectCoverflow,Pagination]);

const Projects = props => {
    const [projects, setProjects] = useState([])
    const [projectsMobile, setProjectsMobile] = useState([])

    useEffect(() => {
        setProjects([...projectsData])

        const projectsMobile = projectsData.reduce((rows, key, index) => { 
            return (index % 2 === 0 ? rows.push([key]) 
              : rows[rows.length-1].push(key)) && rows;
        }, []);
        setProjectsMobile(projectsMobile)
    }, [])

    return (
        <section className="projects-wrapper section" data-anchor="projects" id='projects-section'>
            {window.innerWidth > 1160 && <Settings particles={props.particlesRefProjects} setParticlesPaused={props.setParticlesPaused} particlesPaused={props.particlesPaused}/>}
            {window.innerWidth < 450 && <FiMenu id="menu-btn" className='menu-btn' size="35"/> }
            <div class="projects__title"><img src={careeteSvgBlack} alt='careete svg'></img> <h1>something <span>I've built.</span></h1></div>
            <div class="section-name"><span className='side-section-name'>projects</span></div>
            <div class="projects__navbar">
                {window.innerWidth > 450 && <div className='navbarContainer'>
                    <a href='#intro'><span className="nav-intro">home</span></a>
                    <img src={navbar_divider} alt="divider"></img>
                    <a href='#about'><span className="nav-about">about</span></a>
                    <img src={navbar_divider} alt="divider"></img>
                    <a href='#projects'><span className="nav-projects nav-active">projects</span></a>
                    <img src={navbar_divider} alt="divider"></img>
                    <a href='#contact'><span className="nav-contact">contact</span></a>
                </div>}
            </div>
            {window.innerWidth > 1160 && <Swiper
                id={'swiper-wrapper'} 
                slidesPerView={1.8}
                effect={'coverflow'}
                grabCursor = {true}
                centeredSlides={true}
                coverflowEffect = {{
                    rotate: 0,
                    stretch: 0,
                    depth: 700,
                    modifier: 1,
                    slideShadows : false,
                    scale: 1
                }}
                spaceBetween = {100}
                pagination= {{
                    type: 'bullets',
                    clickable: true,
                    dynamicBullets: true
                }}
                initialSlide={1}
                onClick={(swiper) => swiper.slideTo(swiper.clickedIndex)}
                >
                {projects.map((x, i) => {
                    return (
                        <SwiperSlide key={`slide-${i}`}><ProjectCard project={x}/></SwiperSlide>
                    )
                })}
            </Swiper>}
            {window.innerWidth < 1160 && <Swiper
                id='swiper-wrapper-mobile'
                slidesPerView={1}
                pagination= {{
                    type: 'bullets',
                    clickable: true,
                    dynamicBullets: true
                }}
                spaceBetween={300}
                >
                    {projectsMobile && projectsMobile.map((x,i) => {
                        return (
                            <SwiperSlide key={`slide-${i}`}>
                                <ProjectCard project={x[0]}/>
                                {x.length > 1 && <ProjectCard project={x[1]}/>}
                            </SwiperSlide>
                        )
                    })}
            </Swiper>}
            <Particles id="tsparticles2" className="particles" container={props.particlesRefProjects} options={props.optionsProjects}/>
        </section>
    )
}

export default Projects

import Svgs from './Svgs.js'
import careeteSvg from '../../../res/img/careeteSvg.svg'
import desktopSvg from '../../../res/img/desktopSvg.svg'
import about_divider from '../../../res/img/about_divider.svg'
import lang_ru from '../../../res/img/RU.svg'
import lang_en from '../../../res/img/EN.svg'
import lang_pl from '../../../res/img/PL.svg'
import Particles from "react-tsparticles";
import ParticlesToggle from "../../ParticlesToggle"
import { FiMenu } from "react-icons/fi";
import NavbarDesktop from "../../NavbarDesktop"




const About = props => {


    return (
        <section className="about-wrapper section" id="about-section" data-anchor="about">
            {window.innerWidth > 1280 && <ParticlesToggle particlesRef={props.particlesRefAbout}/>}
            {window.innerWidth < 450 && <div className='menu-btn' ref={props.toggleNavBtn}><FiMenu size="35" color='#fff'/></div> }
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
                <Svgs />
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
            {window.innerWidth > 450 && (
                <div className='about__navbar'>
                    <NavbarDesktop page="about"/>
                </div>
            )}
            <Particles id="tsparticles1" className="particles" container={props.particlesRefAbout} options={props.optionsAbout}/>
        </section>
    )
}

export default About

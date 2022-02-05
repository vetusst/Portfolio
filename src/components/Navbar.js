import navbar_divider from '../res/img/navbar_divider.svg'
import React, { useState, useEffect, useRef } from 'react'
import { useSwipeable } from 'react-swipeable';


const Navbar = (props) => {
    const [navActive, setNavActive] = useState(false)
    const navbar = useRef()

    const closeEventListener = (e) => {
        let buttons = Array.from(document.getElementsByClassName('menu-btn'))
        if (!navbar.current?.contains(e.target) && !buttons.includes(e.target)) {
            setNavActive(false)
            document.removeEventListener('touchstart', closeEventListener)
        }
    }

    const openNav = (originIsProjects=false) => {
        if (!document.getElementById('intro-section').classList.contains('active')) {
            if (!document.getElementById('projects-section').classList.contains('active') || originIsProjects) {
                setNavActive(true)

                document.addEventListener('touchstart', closeEventListener)
            }
        }
    }

    const { ref } = useSwipeable({
        onSwipedLeft: () => openNav(),
        onSwipedRight: () => setNavActive(false),
    })

    useEffect(() => {
        ref(document);

        const btnEventListner = () => {if (!navActive) openNav(true)}
        
        Array.from(document.getElementsByClassName('menu-btn')).forEach(x => x?.addEventListener('touchstart', btnEventListner))
        return () => {
            document.removeEventListener('touchstart', btnEventListner)
        }
    });

    // useEffect(() => {
    //     navActive ? navbar.current.classList.add('nav-active')
    //               : navbar.current.classList.remove('nav-active')
    // }, [navActive])

    

    return (
        <nav className={`sideNav ${navActive ? 'nav-active' : ''}`} ref={navbar}>
          <a href='#intro'><span className="nav-intro">home</span></a>
          <img src={navbar_divider} alt="divider"></img>
          <a href='#about'><span className="nav-about nav-active">about</span></a>
          <img src={navbar_divider} alt="divider"></img>
          <a href='#projects'><span className="nav-projects">projects</span></a>
          <img src={navbar_divider} alt="divider"></img>
          <a href='#contact'><span className="nav-contact">contact</span></a>
      </nav>
    )
}

export default Navbar
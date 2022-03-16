import navbar_divider from '../res/img/navbar_divider.svg'
import React, { useEffect, useRef } from 'react'
import { useSwipeable } from 'react-swipeable';


const NavbarMobile = ({toggleNavBtns, mobileNavActive, setMobileNavActive}) => {
    const navbar = useRef()

    const closeEventListener = (e) => {
        if (!navbar.current?.contains(e.target) && !toggleNavBtns.some(x => x.current === e.target)) {
            setMobileNavActive(false)

            document.removeEventListener('touchstart', closeEventListener)
        }
    }

    const openNav = (originIsProjects=false) => {
        if (!document.getElementById('intro-section').classList.contains('active')) {
            if (!document.getElementById('projects-section').classList.contains('active') || originIsProjects) {
                setMobileNavActive(true)

                document.addEventListener('touchstart', closeEventListener)
            }
        }
    }
    const { ref } = useSwipeable({
        onSwipedLeft: () => openNav(),
        onSwipedRight: () => setMobileNavActive(false),
    })

    useEffect(() => {
        ref(document);

        const btnEventListner = () => {if (!mobileNavActive) openNav(true)}

        
        toggleNavBtns.forEach(btn => btn.current.addEventListener('touchstart', btnEventListner))
        return () => {
            document.removeEventListener('touchstart', btnEventListner)
        }
    },);



    return (
        <nav className={`sideNav ${mobileNavActive ? 'nav-active' : ''}`} ref={navbar}>
          <a href='#intro'><span className="nav-intro">home</span></a>
          <img src={navbar_divider} alt="divider"></img>
          <a href='#about'><span className="nav-about">about</span></a>
          <img src={navbar_divider} alt="divider"></img>
          <a href='#projects'><span className="nav-projects">projects</span></a>
          <img src={navbar_divider} alt="divider"></img>
          <a href='#contact'><span className="nav-contact">contact</span></a>
      </nav>
    )
}

export default NavbarMobile
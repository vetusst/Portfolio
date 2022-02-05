import weatherDesktop from '../img/weatherAppDesktop.png'
import keyboardDesktop from '../img/keyboardDesktop.png'
import portfolioDesktop from '../img/portfolioDesktop.png'
import portfolioMobile from '../img/portfolioMobile.png'
import maskWhite from '../img/iphone-mask-svg-white.svg'

const projectsData = [
    {
        projectName: 'Weather App',
        desktopViewImg : weatherDesktop,
        mobileViewImg : null,
        projectTitle : 'Weather App',
        projectDescription : 'Simple Weather App on Vanilla Js, with the use of a couple of APIs',
        githubLink : 'https://github.com/vetusst/Virtual-Keyboard',
        deployLink : 'https://vetusst.github.io/Virtual-Keyboard/',
    },
    {
        projectName: 'Portfolio',
        desktopViewImg : portfolioDesktop,
        mobileViewImg : portfolioMobile,
        projectTitle : 'Profile Page',
        projectDescription : 'First version of my Profile Page on React',
        githubLink : 'null',
        deployLink : 'null',
    },
    {
        projectName: 'Virtual Keyboard',
        desktopViewImg : keyboardDesktop,
        mobileViewImg : null,
        projectTitle : 'Virtual Keyboard',
        projectDescription : 'Virtual Keyboard where all elements are generated via DOM.',
        githubLink : 'https://github.com/vetusst/Fancy-weather',
        deployLink : 'https://weather-fancy.netlify.app/',
    },
    
    
]
export default projectsData
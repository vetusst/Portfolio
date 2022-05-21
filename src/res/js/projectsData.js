import weatherDesktop from '../img/weatherAppDesktop.png'
import keyboardDesktop from '../img/keyboardDesktop.png'
import portfolioDesktop from '../img/portfolioDesktop.png'
import portfolioMobile from '../img/portfolioMobile.png'
import smartHomeDesktop from '../img/smart-home-desktop.png'
import smartHomeMobile from '../img/smart-home-mobile.png'
import foodOrderingAppDesktop from '../img/food-ordering-app-desktop.png'
import foodOrderingAppMobile from '../img/food-ordering-app-mobile.png'

const projectsData = [
    {
        projectName: 'Food Ordering App',
        desktopViewImg : foodOrderingAppDesktop,
        mobileViewImg : foodOrderingAppMobile,
        projectTitle : 'Food Ordering App',
        projectDescription : 'Food Ordering App on React to demonstrate usage of fundamental library features',
        githubLink : 'https://github.com/vetusst/react-ordering-app',
        deployLink : 'https://vetusst.github.io/react-ordering-app/',
    },
    {
        projectName: 'Portfolio',
        desktopViewImg : portfolioDesktop,
        mobileViewImg : portfolioMobile,
        projectTitle : 'Profile Page',
        projectDescription : 'First version of my Profile Page on React',
        githubLink : 'https://github.com/vetusst/Portfolio',
        deployLink : 'https://dmelnikav.tech/',
    },
    {
        projectName: 'Smart Home Interface',
        desktopViewImg : smartHomeDesktop,
        mobileViewImg : smartHomeMobile,
        projectTitle : 'Smart Home Interface',
        projectDescription : 'Smart Home demo UI on Vue.js',
        githubLink : 'https://github.com/vetusst/smart-home-task',
        deployLink : 'https://vetusst.github.io/smart-home-task',
    },
    {
        projectName: 'Weather App',
        desktopViewImg : weatherDesktop,
        mobileViewImg : null,
        projectTitle : 'Weather App',
        projectDescription : 'Simple Weather App on Vanilla Js, with the use of a couple of APIs',
        githubLink : 'https://github.com/vetusst/Fancy-weather',
        deployLink : 'https://weather-fancy.netlify.app/',
    },
    {
        projectName: 'Virtual Keyboard',
        desktopViewImg : keyboardDesktop,
        mobileViewImg : null,
        projectTitle : 'Virtual Keyboard',
        projectDescription : 'Virtual Keyboard where all elements are generated via DOM.',
        githubLink : 'https://github.com/vetusst/Virtual-Keyboard',
        deployLink : 'https://vetusst.github.io/Virtual-Keyboard/',
    },
]
export default projectsData
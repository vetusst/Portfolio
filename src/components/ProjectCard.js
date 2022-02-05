import maskWhite from '../res/img/iphone-mask-white-png.png'
import { FaWifi } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
// import { IoLogoGithub } from "react-icons/io"


const Project = ({project}) => {
    return (
        <div className="projectCard">
            <div className="projectCard-visualisation" style={{backgroundImage: `url(${project?.desktopViewImg})`}}> 
                {project.mobileViewImg && <div>
                    <div className="imgMobile" style={{backgroundImage: `url(${project.mobileViewImg})`}}></div>
                    <img className='mask' src={maskWhite} alt=''></img>
                </div>}
            </div>
            <div className="projectCard-bottom">
                <div className="projectCard-details">
                    <h2>{project.projectTitle}</h2>
                    <p>{project.projectDescription}</p>
                </div>
                <div className="projectCard-buttons">
                    <a href={project.deployLink} target='_blank' rel="noreferrer">
                        <FaWifi size='cssSize' />
                        <span>Live Demo</span>
                    </a>
                    <a href={project.githubLink} target='_blank' rel="noreferrer">
                        <FaGithub size='cssSize' />
                        <span>GitHub Repo</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Project

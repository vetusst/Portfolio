import navbar_divider_white from "../res/img/navbar_divider.svg";
import navbar_divider_black from '../res/img/navbar_divider_black.svg'


const NavbarDesktop = (props) => {
  const navbar_divider = props.page === 'projects' ? navbar_divider_black : navbar_divider_white

  return (
    <div className="navbarContainer">
      <a href="#intro">
        <span className="nav-intro">home</span>
      </a>
      <img src={navbar_divider} alt="divider"></img>
      <a href="#about">
        <span className={props.page ==='about' ? 'nav-active' : ''}>about</span>
      </a>
      <img src={navbar_divider} alt="divider"></img>
      <a href="#projects">
        <span className={props.page ==='projects' ? 'nav-active' : ''}>projects</span>
      </a>
      <img src={navbar_divider} alt="divider"></img>
      <a href="#contact">
        <span className={props.page ==='contact' ? 'nav-active' : ''}>contact</span>
      </a>
    </div>
  );
};

export default NavbarDesktop

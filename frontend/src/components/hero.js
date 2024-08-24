import "../css/hero.css"
import profile from "../img/mainpicbg.png"

function Hero() {
    return (
      <div className="hero-container">
        <div className="left">
            <img className="profile-img" src={profile} alt="logo"></img>
        </div>
        <div className="right">
          <h1 className='welcome-header'>Hi I'm Aries Joson</h1>
          <p className='welcome-p'>Junior Frontend Developer</p>
          <div className="btn-container">
            <a 
              href="/files/Aries_Joson_Resume.pdf" 
              download="resume.pdf" 
              className="btn btn-cv"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    );
  }
  
  export default Hero;
  
import "../css/about.css"
import profile2 from "../img/mainpic2.jpg"

function About() {
    return (
      <div className="about-container">  
        <div className="about-box">
            <div className="text-box">
                <h1 className="about-header">About Me</h1>  
                <div className="about-containers">
                  <div className="details-container">
                    <h3 className="details-header">Education</h3>
                    <p className="details-text">Bachelor of Science in Information Technology</p>
                  </div>
                  <div className="details-container">
                    <h3 className="details-header">Work Experience</h3>
                    <p className="details-text"> None </p>
                  </div>
                </div>
                <p className="about-text">I am Aries Joson with keen kowledge in web development, committed to creating user-friendly web experiences, optimizing performance, ensuring accessibility, and staying current with industry trends. My passion for creating user-friendly and accessible web experiences drives my commitment to excellence. I actively seek opportunities for growth and learning that lie ahead in the dynamic field of web development.
                </p>
            </div>
            {/* <div className="about-img">
              <img className="profile-img" src={profile2} alt="logo"></img>
            </div> */}
        </div>
      </div>
    );
  }
  
  export default About;
  
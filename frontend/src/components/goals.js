import "../css/goals.css"
import typing from "../vids/Typing.mp4"
import handshake from "../vids/handshake.mp4"

function Goals() {
    return (
      <div className="goals-container">
        <h1 className="goals-header">Goals</h1>
        <div className="goals-main">
          <div className="goals-box">
            <div className="typing-left">
              <video className="goals-vid" src={typing} autoPlay loop muted></video>
            </div>
            <div className="text-right">
              <p className="goals-text"> I am deeply committed to continuous learning and growth in my role. I recognize that every day presents an opportunity to expand my knowledge and develop my skills. My goal is to become proficient in my current responsibilities while also preparing myself for greater challenges in the future.<br/><br/>
              I am eager to absorb as much information as possible, whether through hands-on experience, collaboration with colleagues, or seeking out additional resources. I value feedback and see it as a vital tool for improvement. By staying curious, asking questions, and embracing new opportunities, I am determined to grow both personally and professionally, contributing more effectively to my team and the organization as a whole.</p>
            </div>
          </div>
          <div className="goals-box">
            <div className="typing-left">
              <p className="goals-text"> I am highly motivated and eager to start contributing to a dynamic and forward-thinking organization as soon as possible. With a strong passion for Frontend Development and UI/UX Design, I am ready to bring my skills, dedication, and enthusiasm to a role where I can make a meaningful impact. I am actively seeking opportunities that align with my experience and aspirations, and I am prepared to hit the ground running. </p>
            </div>
            <div className="text-right">
              <video className="goals-vid" src={handshake} autoPlay loop muted></video>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Goals;
  
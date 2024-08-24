import "../css/contact.css"
import email from "../img/email.png"
import linkedin from "../img/linkedin.png"

function Contact() {
    return (
      <div className="contact-container">
        <h1 className="contact-header">Get in Touch</h1>
        <div className="contact-box">
          <div className="contact-info">
            <img className="contact-img" src={email} alt="Email:" height="30" width="30"></img>
            <p className="contact-text">joson.aries.p.2397@gmail.com</p>
          </div>
          <div className="contact-info">
            <img className="contact-img" src={linkedin} alt="Email:" height="30" width="30"></img>
            <p className="contact-text"><a className="contact-link" href="https://www.linkedin.com/in/ajoson" target="_blank">www.linkedin.com/in/ajoson</a></p>
          </div>
        </div>
      </div>
    );
  }
  
  export default Contact;
  
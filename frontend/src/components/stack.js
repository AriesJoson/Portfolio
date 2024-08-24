import "../css/stack.css"
import html from '../img/html.png'
import css from '../img/css.png'
import javascript from '../img/javascript.png'
import mysql from '../img/mysql.png'
import reacts from '../img/reacts.png'
import tailwind from '../img/tailwind.png'
import framer from '../img/framer.png'

function Stack() {
    return (
      <div className="stack-container">
        <div className="stack-header">
            <h1 className="stack-text">Tech Stack</h1>
        </div>
        <div className="logos">
            <div className="logos-slide">
                <img className="tech-img" src={html} alt="logo" height="60" width="60"></img>
                <img className="tech-img" src={css} alt="logo" height="60" width="60"></img>
                <img className="tech-img" src={javascript} alt="logo" height="60" width="60"></img>
                <img className="tech-img" src={mysql} alt="logo" height="60" width="60"></img>
                <img className="tech-img" src={reacts} alt="logo" height="60" width="60"></img>
                <img className="tech-img" src={tailwind} alt="logo" height="60" width="60"></img>
                <img className="tech-img" src={framer} alt="logo" height="60" width="60"></img>
            </div>
            <div className="logos-slide">
                <img className="tech-img" src={html} alt="logo" height="60" width="60"></img>
                <img className="tech-img" src={css} alt="logo" height="60" width="60"></img>
                <img className="tech-img" src={javascript} alt="logo" height="60" width="60"></img>
                <img className="tech-img" src={mysql} alt="logo" height="60" width="60"></img>
                <img className="tech-img" src={reacts} alt="logo" height="60" width="60"></img>
                <img className="tech-img" src={tailwind} alt="logo" height="60" width="60"></img>
                <img className="tech-img" src={framer} alt="logo" height="60" width="60"></img>
            </div>
        </div>
      </div>
    );
  }
  
  export default Stack;
  
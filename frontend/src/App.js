import React, { useEffect } from 'react';
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Stack from "./components/stack";
import Goals from "./components/goals";
import Contact from "./components/contact";
import Projects from "./components/projects";
import Footer from "./components/footer";
import "./app.css";

function App() {

  useEffect(() => {
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        } else {
          entry.target.classList.remove('active'); // Optional
        }
      });
    }, { threshold: 0.1 });

    sections.forEach(section => {
      observer.observe(section);
    });

    // Cleanup observer on unmount
    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="main-body">
      <div className="container">
        <Navbar />
        <section id="hero" className="slide-up-fade-in"><Hero /></section>
        <section id="about" className="slide-up-fade-in"><About /></section>
        <section id="goals" className="slide-up-fade-in"><Goals /></section>
        <section id="stack" className="slide-up-fade-in"><Stack /></section>
        <section id="contact" className="slide-up-fade-in"><Contact /></section>
        <section id="projects" className="slide-up-fade-in"><Projects /></section>
        <Footer />
      </div>
    </div>
  );
}

export default App;

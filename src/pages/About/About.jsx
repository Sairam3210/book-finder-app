import React from 'react';
import "./About.css";
import aboutImg from "../../images/books-img.png";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='books-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About LitSeek</h2>
           <p className="fs-17">
                          LitSeek is a simple web app built using React and the Open Library API.
                          It allows users to search for books by title, explore book details such as authors, 
                          subjects, and publication years — all in a clean, responsive interface.</p>
          <p className="fs-17">
                        This project was designed for readers like Alex, who want a quick and intuitive way
                      to discover books for study or leisure without registration or complex navigation.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

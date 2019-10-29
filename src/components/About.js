import React from 'react';
import './About.css';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';

const About = () => (
  <div>
    <h1>About Me</h1>
    <p>Hi, I’m Amber. I work as a Software Engineer with an emphasis in Full Stack Development. In my free time I like reading, exercising, and spending time with my husband and four cats.</p>
    <p>Some other tidbits about me:</p>
    <p><strong>Last book I read:</strong> The Once & Future King by T.H. White</p>
    <p><strong>Favorite Movie:</strong> Casablanca and/or Donnie Darko</p>
    <p><strong>Favorite Game:</strong> Mass Effect 2</p>
    <p><strong>Least favorite exercise:</strong> Burpees</p>
    <div class="social-links">
      <div class="social-link"><a href="https://github.com/Maowse"><FaGithubSquare/></a></div>
      <div class="social-link linkedin"><a href="https://www.linkedin.com/in/amberphair/"><FaLinkedin/></a></div>
    </div>
  </div>
);

export default About;

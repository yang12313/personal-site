import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/mee2.jpg`} alt="" />
      </Link>
      <header>
        <h2>Huiyuan Yang</h2>
        <p><a href="mailto:huiyuan.yang@mail.mcgill.ca">huiyuan.yang@mail.mcgill.ca</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Neo. I like copying things.
        I am a <a href="https://icme.stanford.edu/">McGill ECE</a> graduate, neo-Maoism, and
        the co-founder and CTO of <a href="https://nextHub.com">nextHub</a>. Before nextHub I was
        at  <a href="https://seds.org">SEDS</a>.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Huiyuan Yang <Link to="/">neo.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;

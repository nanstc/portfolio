import React, { Component } from 'react';
//import { Document, Page } from 'react-pdf/build/entry.webpack';
//import ReactPDF from 'react-pdf';
//import Modal from 'react-modal';
import Scroll from  'react-scroll';
import './App.css';
import Project from './Project.js';

import cc from      './images/coastcapital.png';
import hackbd from   './images/hackBD.png';
import instrail from './images/instrail.png';
import linkedin from './images/ln.png';
import github from   './images/github.png';
import snowshoe from './images/p_snowshoeing.jpg';
import hiking from './images/p_hiking.jpg';
import withbird from './images/p_withbird.jpg';
var Link = Scroll.Link;
var scroller = Scroll.scroller;
var Element = Scroll.Element;

class App extends Component {
  // common function to scroll to element passed in
  constructor(props) {
    super(props);
    this.state = {
        file: './resume.pdf',
        modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.scrollTo = this.scrollTo.bind(this);
  }
  scrollTo(element) {
    scroller.scrollTo(element, {
      spy: true,
      smooth: true,
      duration: 500
    })
  }

  openModal(e) {
    e.preventDefault();
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }
  afterOpenModal() {
    console.log("clicked on modal?", this.state.modalIsOpen);
  }

  handleClick() {

  }
  render() {
    //const {file} = this.state
    return (
      <div className="App">
        <div className="Splash-img-background">
          <div className="Splash-img">
            <div className="Navbar">
              <Link className="Category" activeClass="active" to="MyStory" spy={true} smooth={true} duration={400}>
                My Story
              </Link>
              <Link className="Category" id="divider" activeClass="active" to="Work" spy={true} smooth={true} duration={400}>
                Work
              </Link>
              <a href="https://www.linkedin.com/in/nancystchen/" className="icon">
                <img src={linkedin} alt="linkedin" className="Category"/>
              </a>
              <a href="https://github.com/nanstc" className="icon">
                <img src={github} alt="github" className="Category"/>
              </a>
            </div>
            <h2 className="Quote">"What are you waiting for?"</h2>
           </div>
        </div>

        <div className="content">
          <Element name="MyStory" className = "Sub">
            | Vancouver, BC | 4th Year CS Student @ UBC | <font color="#4CAF50">Programming x Ecology</font> | Dream Big | Doer | Birder
          </Element>
            <p className = "Text">
                Hello and welcome! A couple of things you should know about me straight-up: I love birds, challenging work, teaching, good jokes, and the outdoors. To me software engineering is more than making flashy, beautiful solutions for money; I look at it as a  powerful mean to help those that are the most in need. </p>
            <p className = "Text">
                One of my biggest dreams is to <font color="#4CAF50">develop software for better education worldwide</font>. I would also love to <font color="#4CAF50">help out natural conservation via coding</font>. In the vast realm of computer science I seem to gravitate towards functional programming, systems, algorithms, and (surprisingly!) UX analysis. </p>

            <div id="content-pimg-holder" className="Text">
                    <img src={withbird} alt="Iona Island WildResearch Banding Station" className="content-p-img"/ >
                    <img src={hiking} alt="Oahu, Hawaii" className="content-p-img"/ >
                    <img src={snowshoe} alt="Elfin Lake, BC" className="content-p-img"/ >
            </div>
            <p className="Text">
                To date I have <strong>intergrated some cool outdoor ideas into several apps. Check out my work below!</strong></p>
        </div>

        <div className="content" id="project">
           <Element name="Work" className = "Sub">
            | PROJECTS |
           </Element>
            <div id="content-img-holder" >
                    <a href="Coast Capital Savings Online Ordering System">
                        <img src={cc} alt="coast_capital_savings" className="content-img"/ >
                    </a>
                    <a href="BuildDirect Product Comparison Web App">
                        <img src={hackbd} alt="hackBD" className="content-img"/ >
                    </a>
                    <a href="InsTrail Real-time Hiking Popularity App">
                        <img src={instrail} alt="insTrail" className="content-img"/ >
                    </a>
                    <a href="Inukshuk Outdoor Safety Tracking App">
                        <img src={cc} alt="inukshuk" className="content-img"/>
                    </a>
                    <a href="Magic Yelp Maddness - Group Outings Evolved">
                        <img src="magicyelp.jpg" alt="magicyelp" className="content-img"></img>
                    </a>
            </div>
        </div>
    </div>
    );
  }
}

export default App;

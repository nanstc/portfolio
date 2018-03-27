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
        <div className="Left_sidebar">
          <Link className="Category" id="divider" activeClass="active" to="Work" spy={true} smooth={true} duration={400}>
            Work </Link>
          <a href="https://www.linkedin.com/in/nancystchen/" className="icon">
            <img src={linkedin} alt="linkedin" className="Category"/></a>
          <a href="https://github.com/nanstc" className="icon">
            <img src={github} alt="github" className="Category"/></a>
        </div>

        <div className="Content">
        <div className="Top" >
          <div className="Top_img">
            <h2>
              What are you waiting for?</h2>
          </div>
          <div className="Intro">
            <Element name="MyStory" className ="Title">
              Nancy Chen </Element>
           <Element className="Text">
            | Vancouver, BC | <font color="#4CAF50"> Programmin x Ecology</font> 
            | Doer | Birder</Element>
          </div>
        </div>

        <div className="Bottom" id="project">
           <Element name="Work" className = "Title">
            | PROJECTS |
           </Element>
           <div id="content-img-holder" >
              <a href="Coast Capital Savings Online Ordering System">
                <img src={cc} alt="coast_capital_savings" className="content-img"/ ></a>
              <a href="BuildDirect Product Comparison Web App">
                <img src={hackbd} alt="hackBD" className="content-img"/ ></a>
              <a href="InsTrail Real-time Hiking Popularity App">
                <img src={instrail} alt="insTrail" className="content-img"/ ></a>
              <a href="Inukshuk Outdoor Safety Tracking App">
                <img src={cc} alt="inukshuk" className="content-img"/></a>
              <a href="Magic Yelp Maddness - Group Outings Evolved">
                <img src="magicyelp.jpg" alt="magicyelp" className="content-img"></img> </a>
           </div>
         </div>
        </div>
      </div>
    );
  }
}

export default App;

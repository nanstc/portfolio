import React, { Component } from 'react';
import Scroll from  'react-scroll';
import './App.css';
import Project from './Project.js';

import cc from       './images/coastcapital.png';
import hackbd from   './images/hackBD.png';
import instrail from './images/instrail.png';
import linkedin from './images/ln.png';
import github from   './images/github.png';
import resume from   './images/resume.pdf';
var Link = Scroll.Link;
var scroller = Scroll.scroller;
var Element = Scroll.Element;

class App extends Component {
  // common function to scroll to element passed in
  constructor(props) {
    super(props);
    this.state = {
        file: './resume.pdf',
        modalIsOpen: false,
        active_tab: 'home'
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.scrollTo = this.scrollTo.bind(this);
    this.handleClick= this.handleClick.bind(this);
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

  handleClick(tab_name) {
    this.setState({active_tab: tab_name});
    console.log(this.state.active_tab);
  }
  render() {
    //const {file} = this.state
    return (
      <div className="App">
        <div className="Left_sidebar">
          <Link className={"Sidebar_text Sidebar_tab " + ((this.state.active_tab === 'home')? "Sidebar_tab_active": "Sidebar_tab_inactive")} onClick={(e) => this.handleClick('home')} activeClass="active" to="intro" spy={true} smooth={true} duration={400}>
            N | C {/* this is where logo will be put*/} </Link>
          <Link className={"Sidebar_text Sidebar_tab " + ((this.state.active_tab === 'projects')? "Sidebar_tab_active": "Sidebar_tab_inactive") } onClick={(e) => this.handleClick('projects')} activeClass="active" to="project" spy={true} smooth={true} duration={400}>
            PROJECTS </Link>
          <Link className={"Sidebar_text Sidebar_tab " + ((this.state.active_tab === 'contact')? "Sidebar_tab_active": "Sidebar_tab_inactive") } onClick={(e) => this.handleClick('contact')} activeClass="active" to="contact" spy={true} smooth={true} duration={400} >
            CONTACT </Link>
          <a className="Sidebar_text Sidebar_tab Sidebar_tab_inactive" href={resume} target="_blank">RESUME </a>
          <div className="Sidebar_icon_container">
            <a href="https://www.linkedin.com/in/nancystchen/" target="_blank" rel="noopener noreferrer" className="Sidebar_icon">
              <img src={linkedin} alt="linkedin"/></a>
            <a href="https://github.com/nanstc" target="_blank" rel="noopener noreferrer" className="Sidebar_icon">
              <img src={github} alt="github"/></a>
	          <a href="mailto:nanstchen@gmail.com" className="Sidebar_icon">
              <i className="fa fa-envelope-square Sidebar_icon_style" ></i></a>
          </div>
        </div>

        <div className="Content">
          
          <div className="Intro" id="intro">
            <div className="Intro_img"></div>
            <div className="Intro_column">
              <div className="Intro_content">
                <Element className ="Title">
                  Nancy Chen </Element>
                <Element className="Text">
                  <p>Hello and welcome!</p>
                    <p>I'm a recent Computer Science graduate passionate about using my skills to solve real-wrold problems. I've done it with web-app, mobile, pen-and-paper prototypes, and now trying to get my hands dirty with embedded systems. I've been a long-time big fan of: teamwork, cool tech, and <a href="https://www.allaboutbirds.org/guide/Swainsons_Thrush/overview">Swainson's Trush</a>.</p>
                    <p>Cross-breeding CS solutions with ecology enigmas is my dream, and I work hard to prepare for the day I realize it.</p> </Element>
              </div>
            </div>
          </div>

          <div className="Project" id="project">
            <Element className="Title"> Projects </Element>
            <div className="table">
                <Project img={cc} 
                         title="Online Procurement System"
                         desc="Course project that is great."></Project>
                <Project img={hackbd} 
                         title="TweetMeet"
                         desc="Cool Haskell Script"></Project>
                <Project img={cc} title="Magic Yelp Madness"
                         desc="freaking topped it"></Project>
                <Project img={instrail}
                         title="Instrail" 
                         desc="Hike right now!"></Project>  
            </div> 
          </div>

          <div className="Contact" id="contact">
            <Element className="Title" style={{"lineHeight": "2em"}}>
              Contact </Element>
            <Element className="Contact_content">
              <p className="Text"> Want to Chat? Drop me a line here - <a href="mailto:nanstchen@gmail.com">Email</a>. Curious about my work? Check out my <a href="https://www.github.com/nanstc" target="_blank" rel="noopener noreferrer">github</a>. </p></Element>
            <Element className="Footer">
              <Element className="Text Footer_content Footer_text">
              © Nancy Chen 2018. </Element></Element>
          </div>

        {/*end of Content*/}
        </div> 
      {/*end of App*/}
      </div>
    );
  }
}

export default App;

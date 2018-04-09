import React, { Component } from 'react'
import Scroll from  'react-scroll';
import './App.css';
import Project from './Project.js';

import cc from       './images/coastcapital.png';
import yelp from     './images/yelp_multiple.png';
import instrail from './images/instrail.png';
import linkedin from './images/ln.png';
import github from   './images/github.png';
import tweetmeet from './images/tweetmeet.png';
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
                    <p>I'm a recent Computer Science graduate passionate about using my skills to solve real-wrold problems. I've done it with web-app, mobile, pen-and-paper prototypes, and now working my way through frontend-land while looking for a job. I've been a long-term big fan of teamwork, cool tech, and <a href="https://www.allaboutbirds.org/guide/Swainsons_Thrush/overview">Swainson's Thrush</a>.</p>
                    <p>Cross-breeding CS solutions with ecology enigmas is my dream, and I work hard to prepare for the day I realize it.</p> </Element>
              </div>
            </div>
          </div>

          <div className="Project" id="project">
            <Element className="Title"> Projects </Element>
            <div className="table">
                <Project img={cc} 
                         title="Online Procurement System"
                         desc="The web application allows users within an organization to place procurement orders to an IT department, and workers tracking and completing the orders. I led a 6-person team to work with sponsors from the Coast Capital Savings’ IT department. The finished enterprise solution includes SSL sign-on, LDAP login and SQL stored procedures designed with the MVP architecture."
                         tech="Tech stack: React + Java on Spring Boot, SQLServer"></Project>
                <Project img={tweetmeet} 
                         title="TweetMeet"
                         desc="The Haskell script conveniently selects tweets based on a handle or hashtag selected by the user. I dealt with Monad to represent states in an immutable language, and had a lot of fun implementing functions to handle I/O, OAuth, Error-handling and JSON parsing."
                         tech="Tech stack: Haskell"
                         github="tweetmeet"></Project>
                <Project img={yelp} title="Magic Yelp Madness"
                         desc={['An epic bracket war to get the gluttons moving, together. This novel UI allows group members to cast their influence on venue selection. The team evaluated the usability of the UI using cognitive walkthroughs, user stories, and focus groups, and as the team lead I couldn’t be more proud of our final prototype. Watch our demo on ', <a href="https://youtu.be/VZeDvug4YTA">Youtube</a>, '!']}
                         tech="Tech stack: Axure"></Project>
                <Project img={instrail}
                         title="Instrail"
                         tech="Tech stack: Ruby, Rails, SQL Lite" 
                         desc="Rely on this web app to plan out your next hiking adventure! Instrail uses Instagram data to visualize hiking trail check-ins around the Lower Mainland. Users can also visualize their hiking posts on Instagram through our mapping system. I pitched and PM’ed the project from start to finish and worked on the backend infastructure."></Project>  
            </div> 
          </div>

          <div className="Contact" id="contact">
            <Element className="Title" style={{"lineHeight": "2em"}}>
              Contact </Element>
            <Element className="Contact_content">
              <p className="Text"> Have a cool idea to share with, or just want to say hi? Find me on <a href="https://www.linkedin.com/in/nancystchen/">LinkedIn</a> or drop me a quick line here - <a href="mailto:nanstchen@gmail.com">Email</a>.
              <br/> Curious about my work? Check out my <a href="https://www.github.com/nanstc" target="_blank" rel="noopener noreferrer">github</a>. </p></Element>
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

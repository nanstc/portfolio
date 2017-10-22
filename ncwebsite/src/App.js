import React, { Component } from 'react';
import './App.css';
import { Document, Page } from 'react-pdf/build/entry.webpack';
//import ReactPDF from 'react-pdf';
import Scroll from 'react-scroll';
import Modal from 'react-modal';

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
  render() {
    const {file} = this.state
    return (
      <div className="App">
        <div className="Splash-img">
          <div className="Navbar">
              <Link className="Category" activeClass="active" to="MyStory" spy={true} smooth={true} duration={400}>
                My Story
              </Link>
              <Link className="Category" activeClass="active" to="Work" spy={true} smooth={true} duration={400}>
                Work
              </Link>
          </div>
          <h2 className="Quote">"What are you waiting for?"</h2>
        </div>

        <div className="content">
          <Element name="MyStory" className = "Sub">
            | Vancouver, BC | 4th Year CS Student @ UBC | Programming x Ecology | Dream Big | Doer | Birder
          </Element>
            <p className = "Text">
                Hello and welcome! A couple of things you should know about me straight-up: I love birds, challenging work, teaching, good jokes, and the outdoors. To me software engineering is more than about making flashy, beautiful solutions for people to pay and enjoy. It is a powerful mean to deliver help to those who are in need the most. </p>
            <p className = "Text">
                One of my biggest dreams is to develop software for providing better education worldwide. I am also very intersted in developing software for natural conservation, and have tried a few ideas to integrate the outdoor lifestyle into softwares. </p>
            <a href="Resume" className ="Text" onClick={this.openModal}> Check out my resume here. </a>
            <Modal
                isOpen={this.state.modalIsOpen}
                onAfterOpen={this.afterOpenModal}
                onRequestClose={this.closeModal}
                shouldCloseOnOverlayClick={true}
            >
            <Document
                file={file} >
                <Page />
            </Document>
           </Modal>
        </div>
        <div className="content">
           <Element name="Work" className = "Sub">
             Projects
           </Element>
            <p>
              Magic Yelp Madness (embedded youtube)
              Inukshuk
              InsTrail
              BuildDirect Product Comparision system
              Coast Capital Savings Online Ordering System
            </p>
        </div>
    </div>
    );
  }
}

export default App;

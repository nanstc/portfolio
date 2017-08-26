import React, { Component } from 'react';
import './App.css';
import Scroll from 'react-scroll';

var Link = Scroll.Link;
var scroller = Scroll.scroller;
var Element = Scroll.Element;

class App extends Component {
  // common function to scroll to element passed in
  constructor(props) {
    super(props);
    this.scrollTo = this.scrollTo.bind(this);
  }
  scrollTo(element) {
    scroller.scrollTo(element, {
      spy: true,
      smooth: true,
      duration: 500
    })
  }
  render() {
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
            Software Engineer | Programming x Ecology | Dream Big | Doer | Birder
          </Element>
          TODO: put down things I value and work experience
        </div>
        <div className="content">
           <Element name="Work" className = "Sub">
             Projects
           </Element>
        </div>
    </div>
    );
  }
}

export default App;

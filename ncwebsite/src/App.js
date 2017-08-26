import React, { Component } from 'react';
import './App.css';
import Scroll from 'react-scroll';

var Link = Scroll.Link;
var scroller = Scroll.scroller;

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
              <div onClick={()=> this.scrollTo('MyStory')} className= "Category" to="MySotry">
                My Story
              </div>
              <div className="Category" to="Work">
              Work
              </div>
          </div>
          <h2 className="Quote">"What are you waiting for?"</h2>
        </div>

        <div name="MyStory" className="content">
            <div className = "Sub">
              Software Engineer | Programming x Ecology | Dream Big | Doer | Birder
            </div>
            Just testing out some ideas here
        </div>
        <div name="Work" className="content">
            Work will be placed here
        </div>
    </div>
    );
  }
}

export default App;

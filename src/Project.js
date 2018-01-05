import React, { Component } from 'react';
import './Project.css';

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
        clicked: false,
    }
  }
  this.toggleProjectonClick = this.toggleProjectonClick.bind(this);

  toggleProjectonClick() {
    this.state.clicked = !this.state.clicked;

  }
  render() {
    <div className=`row ${this.state.expandedTicket ? 'expanded-project' : 'snippet'}` onClick={this.toggleProjectonClick.bind(this)}>
        <img src={cc} alt="coast_capital_savings" className="content-img"/ >
        {this.state.clicked && <div className="desc"></div>}
    </div>
    <div className="desc">
        <p>Real-time hiking trail popularity web app. Data source: instagram API.</p>
        <p>Ruby on Rails</p>
    </div>
  }
}
export default Project;

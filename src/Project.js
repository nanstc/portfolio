import React, { Component } from 'react';
import './Project.css';
import img from './images/hackBD.png';

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
        clicked: false,
    }
    this.toggleProjectonClick = this.toggleProjectonClick.bind(this);
  }

  toggleProjectonClick() {
    this.setState({clicked:!this.state.clicked});
  }
  render() {
    return (
    <div 
	className= {`row ${this.state.clicked? 'expanded-project' : 'snippet'}`}
	onClick={this.toggleProjectonClick}
	>
        <img src={img} alt="coast_capital_savings" className="content-img"/ >
        {this.state.clicked && <div className="desc"></div>}
    <div>
 	<p>something</p>
    </div>
    </div>
    )
  }
}
export default Project;

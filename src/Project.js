import React, { Component } from 'react';
import './Project.css';
import img from './images/hackBD.png';

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
        clicked: false,
    }
    this.toggleProjectOnClick = this.toggleProjectOnClick.bind(this);
  }

  toggleProjectOnClick() {
    this.setState({clicked:!this.state.clicked});
  }
  render() {
    return (
    <div className="container" onClick={this.toggleProjectOnClick}>
        <img src={this.props.img} alt="coast_capital_savings" className={'project-img' + (this.state.clicked? ' project-img-clicked' : ' project-img-unclicked')}/>
        <p className={ 'project-desc ' + (this.state.clicked? 'project-desc-clicked' : 'project-desc-unclicked')}>
          something</p>
    </div>
    )
  }
}
export default Project;

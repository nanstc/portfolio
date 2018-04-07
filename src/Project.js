import React, { Component } from 'react';
import './Project.css';
import './App.css';

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
      <div className={'Title project-title-unclicked'}> 
        {this.props.title}</div>
      <div className={ (this.state.clicked? 'content-container' : 'content-container-unclicked')}>
        <div className={ 'Text project-desc ' + (this.state.clicked? 'project-desc-clicked' : 'project-desc-unclicked')}>
           <span></span>
          <span>{this.props.desc}</span>
          <span><br/><br/>{this.props.tech}</span></div>
        <img src={this.props.img} href={this.props.github} alt="coast_capital_savings" className={'project-img' + (this.state.clicked? ' project-img-clicked' : ' project-img-unclicked')}/>
      </div>
    </div>
    )
  }
}
export default Project;

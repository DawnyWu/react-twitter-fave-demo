import React, { Component } from 'react';
import './App.css';
import Fave from './fave'

class FaveContainer extends Component {
  state = {
    fave: false
  }

  handleClick = () => {
    if (this.state.fave){
      this.setState({fave: false})
    } else {
      this.setState({fave: true})
    }
  }

  handleMouseHover = () => {
    if (this.state.fave){
      this.setState({fave: false})
    } else {
      this.setState({fave: true})
    }
  }

  render() {
    return (
      <div>
        <div className="fave-container" 
             onClick={this.handleClick}>
          <Fave size={100} fave={this.state.fave}/>
        </div>
        直接点击桃心 或者 点击按钮<button onClick={this.handleClick} >toggle</button>
      </div>
    );
  }
}

export default FaveContainer;

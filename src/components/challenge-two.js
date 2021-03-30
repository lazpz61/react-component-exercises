import React, { Component } from 'react';

export default class ChallengeTwo extends Component {
    
    constructor(){
        super();

        this.state = {
            visibility: 'visible'
            
        }
}
handleClick = () => {
    this.setState({visibility: 'hidden'})
    if (this.state.visibility === "hidden"){
        {this.handleClick = () => {
            this.setState({visibility: 'hidden'})
        }}
    }
}


render(){
    console.log("test");  
    return (
        
            <div className="LMP2">
             <h1 style={this.state}>I am Showing!</h1>
             <button onClick={this.handleClick}>Hide!</button>        
            </div>    
            
             );
 }
}
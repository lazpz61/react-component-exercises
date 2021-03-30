import React, { Component } from 'react';

export default class ChallengeTwo extends Component {
    
    constructor(){
        super();

        this.state = {
            visibility: 'visible'
            
        }
}
handleClick = () => {
    if (this.state.visibility === "visible") {
            this.setState({visibility: 'hidden'})
            } else {
                this.setState({visibility: "visible"})
            }
        }

render(){
    return (
        
            <div className="LMP2">
             <h1 style={this.state}>I am Showing!</h1>
             <button onClick={this.handleClick}>Hide!</button>        
            </div>    
            
             );
 }
}

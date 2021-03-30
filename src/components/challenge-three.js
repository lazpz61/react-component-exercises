import React, { Component } from 'react';

export default class ChallengeThree extends Component{
    constructor(){
        super();

        this.state = {
            number: 0  
        }
    }
    
    handleIncrement = () => {
            this.setState({
                number : this.state.number + 1
            })
        }
    handleDecrement = () => {
        this.setState({
            number : this.state.number - 1
        })
    }
    
    


    render() {
        return (
            
                <div className="LMP3">
                <button onClick={this.handleIncrement}>Up</button>  
                 <h1>{this.state.number}</h1>      
                 <button onClick={this.handleDecrement}>Down</button>        
                </div>    
                 );
     }
}




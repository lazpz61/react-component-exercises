import React, { Component } from 'react';

export default class ChallengeTwo extends Component {
    
    constructor(){
        super();

        this.state = {
            show: true
            
        }
}



render(){
    return (
        <div className="LMP2">
             {/* <h1 style={this.state}>I am Showing!</h1> */}
             this.state.show ? <h1>Hide and Show</h1>
             <button onClick={()=>{this.setState({show:!this.state.show})}}>{ this.state.show? 'Hide' : 'Show'} Div</button>        
        
        </div>    
            
             );
 }
}
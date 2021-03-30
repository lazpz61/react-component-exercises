import React, { Component } from 'react';

export default class ChallengeOne extends Component {
    
        constructor(){
            super();

            this.state = {
                display: 'flex',
                justifyContent:'flex-start'
            }
           
    }

    handleClickLeft = () =>{
        this.setState({justifyContent: 'flex-start'})
        }
    handleClickCenter = () =>{
            this.setState({justifyContent: 'center'})
            }
    handleClickRight = () =>{
        this.setState({justifyContent: 'flex-end'})
        }

    render(){
    return (
        <div className="LMP1">
             <h1 style={this.state}>Align Me!</h1>
            <button onClick = {this.handleClickLeft}>Left</button>
            <button onClick = {this.handleClickCenter}>Center</button>
            <button onClick = {this.handleClickRight}>Right</button>
        </div>    
        );
 }
}
import React, { Component } from 'react';

export default class ChallengeFour extends Component {
    constructor(props){
        super();

        this.state = {
            fontSize: 12
        }
    }

    handleChange = () => {
        this.setState({ fontSize: this.input.value});
    };

    biggerBtn = () => {
        this.setState({fontSize: fontSize + this.input.value})
    }

    smallerBtn = () => {
        this.setState({fontSize: fontSize - this.input.value})
    }



    render(){
        return(
            <div>
                <form>
                <h1 style={this.state} value={this.state.value} onChange={this.handleChange}>{`${this.state.fontSize}px`}</h1>
                <input type="text" />
                <button onClick={this.biggerBtn}>Bigger</button>
                <button onClick={this.smallerBtn}>Smaller</button>
                </form>
            </div>
        );
    }
}

















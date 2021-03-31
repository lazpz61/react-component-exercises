import React, { Component } from 'react';

export default class ChallengeFour extends Component {
    constructor(props){
        super(props);

        this.state = {
            fontSize: 12
        }
    }

    handleChange = (event) => {
        // this.setState({ fontSize: this.input.value});
        this.setState({
        [event.target.name]: event.target.value
        });

    biggerBtn = () => {
        this.setState({fontSize: this.state.fontSize + this.input.value})
    }

    smallerBtn = () => {
        this.setState({fontSize: this.state.fontSize - this.input.value})
    }


    }
    render(){
        return(
            <div>
                {/* <form> */}
                <h1 style={this.state} value={this.state.value} onChange={this.handleChange}>{`${this.state.fontSize}px`}</h1>
                <input type="text" value={this.input} />
                <button onClick={this.biggerBtn}>Bigger</button>
                <button onClick={this.smallerBtn}>Smaller</button>
                {/* </form> */}
            </div>
        );
    }
}

















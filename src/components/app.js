import React, { Component } from 'react';
import ChallengeOne from './challenge-one';
import ChallengeTwo from './challenge-two';

export default class App extends Component {
  constructor(){
    super();


  }
  render() {
    return (
      <div className='app'>
        <ChallengeOne />
        <hr />
        <ChallengeTwo />

      </div>
    );
  }
}

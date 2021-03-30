import React, { Component } from 'react';
import ChallengeOne from './challenge-one';
import ChallengeTwo from './challenge-two';
import ChallengeThree from './challenge-three';
import ChallengeFour from './challenge-four';

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
        <hr />
        <ChallengeThree />
        <hr />
        <ChallengeFour />
        <hr />
      </div>
    );
  }
}

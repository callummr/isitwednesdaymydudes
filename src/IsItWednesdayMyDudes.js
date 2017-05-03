import React, { Component } from 'react';
import getTheImageDependingOnWhetherItIsWednesdayMyDudes from './utilitiesMyDudes/getTheImageDependingOnWhetherItIsWednesdayMyDudes';
import getTheTextForWhetherItIsWednesdayMyDudes from './utilitiesMyDudes/getTheTextDependingOnWhetherItIsWednesdayMyDudes';
import './IsItWednesdayMyDudes.css';

class IsItWednesdayMyDudes extends Component {
  render() {
    const theNumberOfTheDayWhichIsWednesdayMyDudes = 3;
    const theNumberOfTheCurrentDayMyDudes = new Date().getDay();
    const isItWednesdayMyDudes = theNumberOfTheCurrentDayMyDudes === theNumberOfTheDayWhichIsWednesdayMyDudes;

    const theImageForWhetherIsItWednesdayMyDudes = getTheImageDependingOnWhetherItIsWednesdayMyDudes(isItWednesdayMyDudes);
    const theTextForWhetherItIsWednesdayMyDudes = getTheTextForWhetherItIsWednesdayMyDudes(isItWednesdayMyDudes);
    

    return (
      <div className="App">
        <img 
          src={theImageForWhetherIsItWednesdayMyDudes}
          alt={theTextForWhetherItIsWednesdayMyDudes}
        />
      </div>
    );
  }
}

export default IsItWednesdayMyDudes;

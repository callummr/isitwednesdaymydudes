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

    window.document.title = theTextForWhetherItIsWednesdayMyDudes;


    return (
      <div className="is-it-wednesday-my-dudes">
        <img
          src={theImageForWhetherIsItWednesdayMyDudes}
          alt={theTextForWhetherItIsWednesdayMyDudes}
          className={isItWednesdayMyDudes ? 'it-is-wednesday-my-dudes' : ''}
        />
      </div>
    );
  }
}

export default IsItWednesdayMyDudes;

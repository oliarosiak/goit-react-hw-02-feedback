import React, { Component } from 'react';

import Statistics from './statistics/Statistics';
import FeedbackOptions from './feedback/FeedbackOptions';
import Section from './section/Section';
import Notification from './notification/Notification';


class App extends Component{
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  handleFeedbackIncrement = (option) => {  
    this.setState(prevState => {
      return {
        [option]: prevState[option] + 1
      }
    });
  }

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;  
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage = () => { 
    return Math.round((this.state.good / (this.countTotalFeedback())) * 100);
  }

  render() {
    const { good, neutral, bad } = this.state;
    const stateKeys = Object.keys(this.state); 
    const onIncrement = this.handleFeedbackIncrement;
    const totalAmount = this.countTotalFeedback();
    const percentage = this.countPositiveFeedbackPercentage();

    // console.log(typeof (stateKeys));
    // console.log(stateKeys);
    // console.log(typeof (onIncrement));

    return (
      <div
        style={{
          fontSize: 25,
          color: 'darkgreen'
        }}
      >
        <Section title='Please leave feedback'>
          <FeedbackOptions options={stateKeys} onLeaveFeedback={onIncrement} />
        </Section>
        <Section title='Statistics'>
          {totalAmount > 0
            ? <Statistics good={good} neutral={neutral} bad={bad} total={totalAmount} positivePercentage={percentage} />        
            : <Notification message='There is no feedback' />
          }
        </Section>
      </div>
    );
  }
}

export default App;
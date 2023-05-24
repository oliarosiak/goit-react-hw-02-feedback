import React, { Component } from 'react';
import FeedbackStatistics from './feedback/FeedbackStatistics';


class App extends Component{
  render() {
    return (
      <div
        style={{
          // height: '100vh',
          // display: 'flex',
          // justifyContent: 'center',
          // alignItems: 'center',
          // fontSize: 40,
          // color: '#010101'
        }}
      >
        <FeedbackStatistics />
      </div>
    );
  }
}

export default App;



import React, { Component } from 'react';

class FeedbackStatistics extends Component{
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }

    handleGoodIncrement = () => {
        this.setState(prevState => ({
            good: prevState.good + 1,
        }))
    }

    handleNeutralIncrement = () => {
        this.setState(prevState => ({
            neutral: prevState.neutral + 1,
        }))
    }

    handleBadIncrement = () => {
        this.setState(prevState => ({
            bad: prevState.bad + 1,
        }))
    }

    countTotalFeedback = () => {
        const total = this.state.good + this.state.neutral + this.state.bad;
        // let total = 0; 
        // total = this.state.good + this.state.neutral + this.state.bad;
        return total;
    }

    countPositiveFeedbackPercentage = () => {
        // const persent = (this.state.good / (this.state.good + this.state.neutral + this.state.bad))*100;    
        let persent = 0;
        if (this.state.good > 0) {          
            persent = Math.round((this.state.good / (this.state.good + this.state.neutral + this.state.bad))*100);
            // persent = ((this.state.good / (this.state.good + this.state.neutral + this.state.bad))*100).toFixed(0);            
        }
        return persent;
    }


    render() {
        return (
            <>
                <h1>Please leave feedback</h1>
                {/* <Section title="" /> */}
                {/* <FeedbackOptions options={} onLeaveFeedback={}></FeedbackOptions> */}
                <div>
                    <button type='button' onClick={this.handleGoodIncrement}>Good</button>
                    <button type='button' onClick={this.handleNeutralIncrement}>Neutral</button>
                    <button type='button' onClick={this.handleBadIncrement}>Bad</button>
                </div>
                {/* <Section title="" /> */}
                {/* <Statistics good={} neutral={} bad={} total={} positivePercentage={}></Statistics> */}
                <section>
                    <h2>Statistics</h2>
                    <ul>
                        <li>Good: {this.state.good}</li>
                        <li>Neutral: {this.state.neutral}</li>
                        <li>Bad: {this.state.bad}</li>
                        <li>Total: {this.countTotalFeedback()}</li>
                        <li>Positive feedback: { this.countPositiveFeedbackPercentage() }%</li>
                    </ul>
                </section>
                
            </>
        )
    }
   
}


/**
 * Винеси відображення статистики в окремий компонент <Statistics good={} neutral={} bad={} total={} positivePercentage={}>.
 * 
    Винеси блок кнопок в компонент <FeedbackOptions options={} onLeaveFeedback={}>.

    Створи компонент <Section title="">, який рендерить секцію із заголовком і дітей (children). 
    Обгорни кожен із <Statistics> і <FeedbackOptions> у створений компонент секції.
 */

export default FeedbackStatistics;
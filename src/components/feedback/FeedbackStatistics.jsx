import React, { Component } from 'react';

class FeedbackStatistics extends Component{
    static defaultProps = {
        step: 1,
    }

    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }

    handleIncrement = (evt) => {
        console.log("Increment button was clicked!", evt); // працює
        console.log("this.props: ", this.props); // працює
    }

    render() {
        return (
            <>
                <h1>Please leave feedback</h1>
                <div>
                    <button type='button' onClick={this.handleIncrement}>Good</button>
                    <button type='button' onClick={this.handleIncrement}>Neutral</button>
                    <button type='button' onClick={this.handleIncrement}>Bad</button>
                </div>
                <section>
                    <h2>Statistics</h2>
                    <ul>
                        <li>Good: {this.props.step}</li>
                        <li>Neutral: {this.props.step}</li>
                        <li>Bad: {this.props.step}</li>
                    </ul>
                </section>
                
            </>
        )
    }
   
}

export default FeedbackStatistics;
import React, { Component } from "react";
// import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
export class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  handleClick = (key) => {
    this.setState(prev => {
      return {
        [key]:prev[key]+1
      }
    })
  }

  countTotalFeedback = () => {
    return Object.values(this.state)
      .reduce((total, item) => total + item, 0);
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round(this.state.good * 100 / this.countTotalFeedback())
  };

  render() {
    
    const total = this.countTotalFeedback();
    const goodPercentage = this.countPositiveFeedbackPercentage();

    return (
      <>
        <h1>Please leave feedback</h1>
        {/* <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleIncrement}
          ></FeedbackOptions> */}
        <div>
          {Object.keys(this.state)
            .map(key =>
              <button
                key={key}
                onClick={() => this.handleClick(key)}>
                {key}
              </button>)}
        </div>
        <h2>Statistics</h2>
        <ul>{Object.keys(this.state)
          .map(key =>
            <li key={key}>
              {key}: {this.state[key]}
            </li>)}
        <li>Total:{total}</li>
          <li>Positive feedback: {goodPercentage}</li>
          </ul>
        </>)
 }

};

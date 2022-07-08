import React, { Component } from "react";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Statistics from "./Statistics/Statistics";
import Section from "./Section/Section";

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
      <div>

        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleClick}
          ></FeedbackOptions>
        </Section>
        
        <Section title="Statistics">
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={total}
            positivePercentage={goodPercentage}>
          </Statistics>;
        </Section>
        
      </div>);
 }
};



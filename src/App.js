import "./App.css";
import { Component } from "react";
import { Section } from "./components/Section/Section";
import { FeedbackOptions } from "./components/FeedbackOptions/FeedbackOptions";
import { Statistics } from "./components/Statistics/Statistics";

class App extends Component {
  state = {
    good: 0,
    netural: 0,
    bad: 0,
  };

  onLeaveFeedback = (option) => {
    this.setState((statePrev) => ({
      [option]: statePrev[option] + 1,
    }));
  };

  countTotal = () => {
    const { good, netural, bad } = this.state;
    const result = good + netural + bad;

    return result;
  };

  positivePercentage = () => {
    const { good } = this.state;
    const total = this.countTotal();
    const result = total ? Math.round((good / total) * 100) : 0;

    return result;
  };

  render() {
    const total = this.countTotal();

    return (
      <div className="App">
        <Section>
          <FeedbackOptions
            options={["good", "netural", "bad"]}
            onLeaveFeedback={this.onLeaveFeedback}
          />
          <Statistics
            good={this.state.good}
            netural={this.state.netural}
            bad={this.state.bad}
            total={total}
            positivePercentage={this.positivePercentage}
          />
        </Section>
      </div>
    );
  }
}

export default App;

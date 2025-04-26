import { Component } from "react";

export class FeedbackOptions extends Component {
  render() {
    return (
      <ul className="feedbackButtons">
        {this.props.options.map((option) => (
          <li key={option}>
            <button
              type="button"
              onClick={() => this.props.onLeaveFeedback(option)}
            >
              {option.toUpperCase()}
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

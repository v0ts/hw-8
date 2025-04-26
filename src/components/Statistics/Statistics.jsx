import { Component } from "react";

export class Statistics extends Component {
  render() {
    return (
      <div className="resultFeedback">
        <h3>Statistics</h3>
        <ul>
          <li>
            <p>Good: {this.props.good}</p>
          </li>
          <li>
            <p>Neutral: {this.props.netural}</p>
          </li>
          <li>
            <p>Bad: {this.props.bad}</p>
          </li>
          <li>
            <p>Total: {this.props.total}</p>
          </li>
          <li>
            <p>Positive feedback: {this.props.positivePercentage()}</p>
          </li>
        </ul>
      </div>
    );
  }
}

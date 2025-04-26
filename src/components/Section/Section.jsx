import { Component } from "react";

export class Section extends Component {
  render() {
    return (
      <>
        <h3>Please leave feedback</h3>
        {this.props.children}
      </>
    );
  }
}

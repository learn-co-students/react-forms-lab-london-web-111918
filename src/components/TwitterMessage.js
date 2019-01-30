import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      twitterInput: ""
    }
  }

  updateState = (event) => {
    this.setState({twitterInput: event.target.value})
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="twitterInput" value={this.state.twitterInput} onChange={this.updateState} />
        <p>{this.props.maxChars - this.state.twitterInput.length} characters remaining</p>
      </div>
    );
  }
}

export default TwitterMessage;

import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      value: ''
    }
  }

  handleChange = (e) => {
    const input = e.target.value
    this.setState({ value: input.substr(0, this.props.maxChars) })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={this.handleChange} type="text" value={this.state.value} />
        {this.props.maxChars - this.state.value.length} charactors remaining
      </div>
    );
  }
}

export default TwitterMessage;

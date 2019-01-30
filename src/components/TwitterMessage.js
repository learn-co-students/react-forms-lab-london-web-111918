import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      value: ""
    };
  }

  handleChars = (event) => {
    this.setState({
      value: event.target.value.substr(0, this.props.maxChars)
      })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={(event) => this.handleChars(event)} value={this.state.value}/>
        <p>Characters Left: {this.props.maxChars - this.state.value.length}</p>
      </div>
    );
  }
}

export default TwitterMessage;

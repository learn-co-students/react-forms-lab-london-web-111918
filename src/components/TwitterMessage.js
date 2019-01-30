import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      maxChars: this.props.maxChars,
      message: ''
    };
  }

  handleOnChange = (event) => this.setState({message: event.target.value})

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={this.handleOnChange} value={this.state.message}/>
        {this.state.maxChars-this.state.message.length}
      </div>
    );
  }
}

export default TwitterMessage;

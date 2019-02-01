import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      maxChars: 140,
      text: ''
    };
  }

  handleChange = (event) => {
    const remainder = 140 - event.target.value.length
    this.setState({
      text: event.target.value,
      maxChars: remainder
    })
    
  }


  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input 
          type="text"
          value={this.state.text}
          onChange={event => this.handleChange(event)}  
          placeholder={this.state.maxChars} characters
        />
        <p>{this.state.maxChars} remaining</p>
      </div>
    );
  }
}

export default TwitterMessage;

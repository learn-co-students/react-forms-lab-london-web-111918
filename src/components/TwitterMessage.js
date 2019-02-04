import React from 'react'

class TwitterMessage extends React.Component {
  constructor () {
    super()

    this.state = {
      message: ''
    }
  }

  handleTextInput = (event) => {
    this.setState({
      message: event.target.value
    })
  }

  render () {
    return (
      <div>
        <strong>Your message:</strong>
        <input type='text' id='message' onChange={(event) => this.handleTextInput(event)} value={this.state.message} />
        <p>Remaining Characters: {this.props.maxChars - this.state.message.length}</p>
      </div>
    )
  }
}

export default TwitterMessage

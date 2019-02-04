import React from 'react';

class LoginForm extends React.Component {
  constructor () {
    super()

    this.state = {
      username: '',
      password: ''
    }
  }

  handleFormChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    let username = this.state.username
    let password = this.state.password
    if (!!username && !!password) {
      this.props.onSubmit(this.state)
    } 
  }

  render () {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <div>
          <label>
            Username
            <input id='username' name='username' type='text' onChange={(event) => this.handleFormChange(event)} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id='password' name='password' type='password' onChange={(event) => this.handleFormChange(event)} />
          </label>
        </div>
        <div>
          <button type='submit'>Log in</button>
        </div>
      </form>
    )
  }
}

export default LoginForm

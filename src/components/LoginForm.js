import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  handleUsername = event => {
    this.setState({
      ...this.state,
      username: event.target.value
    })
  }

  handlePassword = event => {
    this.setState({
      ...this.state,
      password: event.target.value
    })
  }

  handlesubmit = event => {
    event.preventDefault()
    if (!this.state.username && !this.state.password) {
    return(this.props.onSubmit(this.state))
    }
  }

  render() {
    return (
      <form onSubmit={(event) => this.handlesubmit(event)}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.username} onChange={(event) => this.handleUsername(event)} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value= {this.state.password} onChange={(event) => this.handlePassword(event)} />
          </label>
        </div>
        <div>
          <button type="submit" >Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;

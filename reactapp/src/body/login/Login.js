import React from 'react'
import {Redirect} from 'react-router-dom'

class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      login: '',
      pass: '',
      message: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handlePassChange = this.handlePassChange.bind(this)
    this.handleLoginChange = this.handleLoginChange.bind(this)
  }

  handleSubmit(event){
    if (this.state.login === 'Admin' && this.state.pass === '12345'){
      localStorage.setItem('logged', 'true');
      this.forceUpdate();
    } else {
      if (this.state.login === 'Admin') {
        this.setState({message: 'Wrong password'})
      } else {
        this.setState({message: 'Wrong login'})  
      }
    }

  }
  handleLoginChange(event){
    this.setState({login: event.target.value});
  }
  handlePassChange (event){
		this.setState({pass: event.target.value});
	}
render(){
  if (localStorage.getItem('logged') === 'true'){
    return(
      <Redirect to="/profile" />
    )
  }
  return (
    <div>
			<form onSubmit={this.handleSubmit}>
				<input
					id="1"
					type="text"
					placeholder="Login"
					value={this.state.login}
					onChange={this.handleLoginChange}
				/><br />
				<input
					id="2"
					type="text"
					placeholder="Password"
					value={this.state.pass}
					onChange={this.handlePassChange}
				/><br />
        <button>submit</button>
			</form>
      <h2>{this.state.message}</h2>
		</div>
    )
  }
}

export default Login;

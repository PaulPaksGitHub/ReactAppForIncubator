import React from 'react'
import {Redirect} from 'react-router-dom'
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import {inject, observer} from 'mobx-react'

@inject("store")
@observer
export default class extends React.Component {
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
            this.props.store.login();
        } else {
        if (this.state.login === 'Admin') {
            this.setState({message: 'Неверный пароль'})
        } else {
            this.setState({message: 'Неизвестный логин'})
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
        return (
            <div>
            <AppBar position="static" color="default">
                <Toolbar>
                <Typography variant="title" color="primary">
                    Авторизация
                </Typography>
                </Toolbar>
            </AppBar>

            <FormControl >
                <InputLabel htmlFor="login">Login</InputLabel>
                <Input id="login" value={this.state.login} onChange={this.handleLoginChange} />
            </FormControl><br/>

            <FormControl >
                <InputLabel htmlFor="pass">Password</InputLabel>
                <Input id="pass" value={this.state.pass} onChange={this.handlePassChange} />
            </FormControl><br/>

            <Button onClick={this.handleSubmit} variant="text" color="primary">Войти</Button>
            <h4>{this.state.message}</h4>
        </div>
        )
    }
}


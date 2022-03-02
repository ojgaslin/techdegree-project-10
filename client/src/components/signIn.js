import React, {Component} from 'react';
import axios from 'axios';
import {userContext} from './context';

export class SignIn extends Component{
    constructor() {
        super();
        this.state = {
            emailAddress: '',
            password: '',
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.onSumbit = this.onSumbit.bind(this);
    }
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }
//call to the api
onSumbit(e) {
    e.preventDefault();
    console.log(this.state);
    let base64 = require("base-64");
    axios.get('http://localhost:5000/api/users',
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Basic ' + base64.encode(this.state.emailAddress + ':' + this.state.password)
                }
            },{auth:{
                username: this.state.emailAddress,
                password: this.state.password
            }}
            )
            .then(response => {
                this.context.user = response.data
                this.context.firstName = response.data.firstName
                this.context.user.password = this.state.password
                console.log(this.context)
            })
}
    render(){
        return(
                <div class="form--centered">
                    <h2>Sign In</h2>    
                    <form onSubmit={this.onSumbit}>
                        <label for="emailAddress">Email Address</label>
                        <input id="emailAddress" name="emailAddress" type="email" value={this.state.emailAddress} onChange={this.handleInputChange}/>
                        <label for="password">Password</label>
                        <input id="password" name="password" type="password" value={this.state.password} onChange={this.handleInputChange}/>
                        <button class="button" type="submit" >Sign In</button><button class="button button-secondary" onclick="event.preventDefault(); location.href='index.html';">Cancel</button>
                    </form>
                    <p>Don't have a user account? Click here to <a href="sign-up.html">sign up</a>!</p>
                </div>
        );
    }
}

SignIn.contextType = userContext
export default SignIn;
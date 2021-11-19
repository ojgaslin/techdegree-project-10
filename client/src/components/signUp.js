import React, { Component } from 'react';
import axios from 'axios';


export class SignUp extends Component {
    constructor() {
        super();
        this.state = {
            firstName: '',
            lastName: '',
            emailAddress: '',
            password: '',
            confirmPassword: ''
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        //this.onSumbit = this.onSumbit.bind(this);
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
    onSumbit() {
        console.log(this.state);
        axios.post('http://localhost:5000/api/users',
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: this.state
            })
            .then(response => {
                console.log(response);
            })
    }
    render() {
        return (
            <div class="form--centered">
                <h2>Sign Up</h2>

                <form>
                    <label for="firstName">First Name</label>
                    <input id="firstName" name="firstName" type="text" value={this.state.firstName} onChange={this.handleInputChange} />
                    <label for="lastName">Last Name</label>
                    <input id="lastName" name="lastName" type="text" value={this.state.lastName} onChange={this.handleInputChange} />
                    <label for="emailAddress">Email Address</label>
                    <input id="emailAddress" name="emailAddress" type="email" value={this.state.emailAddress} onChange={this.handleInputChange} />
                    <label for="password">Password</label>
                    <input id="password" name="password" type="password" value={this.state.password} onChange={this.handleInputChange} />
                    <label for="confirmPassword">Confirm Password</label>
                    <input id="confirmPassword" name="confirmPassword" type="password" value={this.state.confirmPassword} onChange={this.handleInputChange} />
                    <button class="button" type="button" onClick={() => this.onSumbit()}>Sign Up</button><button class="button button-secondary" >Cancel</button>
                </form>
                <p>Already have a user account? Click here to <a href="sign-in.html">sign in</a>!</p>
            </div>
        );
    }

}

export default SignUp;                      
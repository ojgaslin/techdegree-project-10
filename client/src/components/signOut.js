import React, {Component} from 'react';
import {userContext} from './context';
import { withRouter } from "react-router-dom";

export class SignOut extends Component{
    constructor() {
        super();
        
    }
    componentDidMount(){
        this.context.user = {};
        this.props.history.push("/");    
    }

}

SignOut.contextType = userContext;
export default withRouter(SignOut);
import React, {Component} from 'react';
import axios from 'axios';
import {userContext} from './context';

export class CreateCourse extends Component{
    constructor() {
        super();
        this.state = {
          courseTitle:'',
          courseDescription:'',
          estimatedTime: '',
          materialsNeeded: ''
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }
    //call to api
    onSubmit(e) {
        e.preventDefault();
        console.log(this.context);

        let base64 = require("base-64");
        axios.post('http://localhost:5000/api/courses',
        this.state,            {
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
        console.log(this.context);
    })
    }
    render() {
        return(
                <div class="wrap">
                <h2>Create Course</h2>
                <div class="validation--errors">
                    <h3>Validation Errors</h3>
                    <ul>
                        <li>Please provide a value for "Title"</li>
                        <li>Please provide a value for "Description"</li>
                    </ul>
                </div>
                <form onSubmit={this.onSubmit}>
                    <div class="main--flex">
                        <div>
                            <label for="courseTitle">Course Title</label>
                            <input id="courseTitle" name="courseTitle" type="text" value={this.state.courseTitle} onChange={this.handleInputChange}/>

                            <p>By Joe Smith</p>

                            <label for="courseDescription">Course Description</label>
                            <textarea id="courseDescription" name="courseDescription" type="text" value={this.state.courseDescription} onChange={this.handleInputChange}></textarea>
                        </div>
                        <div>
                            <label for="estimatedTime">Estimated Time</label>
                            <input id="estimatedTime" name="estimatedTime" type="text" value={this.state.estimatedTime} onChange={this.handleInputChange}/>

                            <label for="materialsNeeded">Materials Needed</label>
                            <textarea id="materialsNeeded" name="materialsNeeded" type="text" value={this.state.materialsNeeded} onChange={this.handleInputChange}></textarea>
                        </div>
                    </div>
                    <button class="button" type="submit">Create Course</button><button class="button button-secondary">Cancel</button>
                </form>
            </div>
        );
    } 
}
CreateCourse.contextType = userContext
export default CreateCourse;

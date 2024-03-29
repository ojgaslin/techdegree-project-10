import logo from './logo.svg';
import React, { Component } from 'react';
import { userContext } from './components/context.js'
import './App.css';
import axios from 'axios';
import Header from './components/header'
import SignIn from './components/signIn';
import SignUp from './components/signUp';
import Course from './components/course';
import CreateCourse from './components/createCourse';
import Courses from './components/courses';
import UpdateCourse from './components/updateCourse';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';
//**import PrivateRoute from '';
class App extends React.Component{
  constructor(){
    super();
    this.state = {
      courses: [],
      user: {}
    }
  }

  componentDidMount() {
    //this.performSearch();
    this.loadCourses();  
    this.setState({user: {firstName: '',
    lastName: ''
  }})
  }

  loadCourses(){
      axios.get('http://localhost:5000/api/courses',
  {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    credentials: 'include'
  })
  .then(response => {
    this.setState({courses: response.data})
    //console.log(this.state)
  })
  .catch(error => {

  });
  }

  render(){
    return (
          <userContext.Provider value={this.state.user}>
              <BrowserRouter>
                          <div className="App">
              <Header/>
                  <Switch>
                    <Route exact path="/"/>
                    <Route path="/courses/create" render={() => <CreateCourse/>}/>
                    <Route path="/courses/:id?/update" render={() => <UpdateCourse/>}/>
                    <Route path="/courses/:id?" render={() => <Course/>}/>
                    <Route path="/courses"/>
                    <Route path="/signin" render={() => <SignIn/>}/>
                    <Route path="/signup" render={() => <SignUp/>}/>
                    <Route path="/signout"/>
                  </Switch>
                  </div>
                </BrowserRouter>
                </userContext.Provider>
          )
        }
}

// async function loadCourses(){


// }

// function App() {
//   axios.get('http://localhost:5000/api/courses',
//   {
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'
//     },
//     credentials: 'include'
//   })
//   .then(response => {
  
//     render() { return (
//       <div className="App">
//         <table>
//           <tr>
//             <th>id</th>
//             <th>title</th>
//             <th>estimatedTime</th>
//             <th>description</th>
//             <th>materialsNeeded</th>
//           </tr>
//           {response.data.map(object => {
//             <tr>
//             <td>object.id</td>
//             <td>object.title</td>
//             <td>object.estimatedTime</td>
//             <td>object.description</td>
//             <td>object.materialsNeeded</td>
//           </tr>
//           })}
//         </table>
//       </div>
//     )}
//   })
//   .catch(error => {

//   });


// }

export default App;

import logo from './logo.svg';
import './App.css';
import axios from 'axios';

async function loadCourses(){
  axios.get('http://localhost:5000/api/courses',
  {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    credentials: 'include'
  })
  .then(response => {
    console.log(response);
    return response.data; 
  })
  .catch(error => {

  });

}

function App() {
  var courses = [];
  courses = await loadCourses();
  return (
    <div className="App">
      <table>
        <tr>
          <th>id</th>
          <th>title</th>
          <th>estimatedTime</th>
          <th>description</th>
          <th>materialsNeeded</th>
        </tr>
        {courses.map((object, i) => <tr>
          <td>object.id</td>
          <td>object.title</td>
          <td>object.estimatedTime</td>
          <td>object.description</td>
          <td>object.materialsNeeded</td>
        </tr>) }
      </table>
    </div>
  );
}

export default App;

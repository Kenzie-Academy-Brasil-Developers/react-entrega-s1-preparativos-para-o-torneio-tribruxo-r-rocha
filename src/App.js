import "./App.css";
import Student from "./components/Student";
import { useEffect, useState } from "react";

function App() {

  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("https://hp-api.herokuapp.com/api/characters/students")
      .then((response) => response.json())
      .then((response) => setStudents(response))
      .catch((err) => console.log(err))
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {students.map((elem, index) => <Student key={index} name={elem.name} house={elem.house} alive={elem.alive} yearOfBirth={elem.yearOfBirth} image={elem.image} />)}
      </header>
    </div>
  );
}

export default App;

import "./App.css";
import Student from "./components/Student";
import { useEffect, useState } from "react";
import Start from "./components/Start";

function App() {
  const [students, setStudents] = useState([]);

  const [players, setPlayers] = useState([]);

  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    fetch("https://hp-api.herokuapp.com/api/characters/students")
      .then((response) => response.json())
      .then((response) => setStudents(response))
      .catch((err) => console.log(err));
  }, []);

  const start = () => {
    setIsLogged(!isLogged);
  };

  const selectPlayers = () => {
    /** Seleciona Jogador 1 */
    const player1 = students[Math.floor(Math.random() * 10)];
    console.log(students);
    console.log(player1);

    /** Seleciona Jogador 2 */
    const players2 = students.filter((elem) => elem.house !== player1.house);
    console.log(players2);
    const player2 = players2[Math.floor(Math.random() * players2.length)];
    console.log(player2);

    /** Seleciona Jogador 3 */
    const players3 = players2.filter((elem) => elem.house !== player2.house);
    console.log(players3);
    const player3 = players3[Math.floor(Math.random() * players3.length)];
    console.log(player3);

    setPlayers([player1, player2, player3]);
  };

  return (
    <div className="App">
      <>
        {!isLogged ? (
          <header className="App-header">
            <Start />
            {players.map((elem, index) => {
              return (
                <Student
                  key={index}
                  name={elem.name}
                  house={elem.house}
                  alive={elem.alive}
                  yearOfBirth={elem.yearOfBirth}
                  image={elem.image}
                />
              );
            })}
            <button className="btn-grad" onClick={(selectPlayers, start)}>
              START
            </button>
          </header>
        ) : (
          <header className="App-header Background">
            <div className="Title">Jogadores</div>
            {players.map((elem, index) => {
              return (
                <Student
                  key={index}
                  name={elem.name}
                  house={elem.house}
                  alive={elem.alive}
                  yearOfBirth={elem.yearOfBirth}
                  image={elem.image}
                />
              );
            })}
            <button className="btn-grad btn-grad-indigo" onClick={selectPlayers}>
              SELECIONAR OS BRUXOS
            </button>
          </header>
        )}
      </>
    </div>
  );
}

export default App;

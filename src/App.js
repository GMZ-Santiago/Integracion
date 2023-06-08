import Cards from "./components/cards/Cards";
import axios from "axios";
import { useEffect, useState } from "react";
import NavBar from "./components/navBar/navBar";
import { Route, Routes, useLocation, useNavigate,  } from "react-router-dom";


import style from "./App.css"
import "./App.css";
import Detail from "./components/detail/detail";
import About from "./components/About/About";
import ErrorPage from "./components/error/errorPage";
import LandingPage from "./components/landingPage/landingPage";
import Favorities from "./components/favorites/favorities";

// const example = {
//   id: 1,
//   name: "Rick Sanchez",
//   status: "Alive",
//   species: "Human",
//   gender: "Male",
//   origin: {
//     name: "Earth (C-137)",
//     url: "https://rickandmortyapi.com/api/location/1",
//   },
//   image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
// };

function App() {
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const EMAIL = 'rick@morty.com';
  const PASSWORD = 'ryk123';

  function login(userData) {
    if(userData.password === PASSWORD && userData.email === EMAIL){
      setAccess(true);
      navigate('/home');
    }
  }

useEffect(() => {
  !access && navigate ('/');
},[access]);

  function searchHandler(id) {
    // setCharacters([...characters, example]);
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(({data}) => {
      if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
      } else {
        window.alert("¡No hay personajes con este ID!");
      }
    });
  }

  function closeHandler(id) {
    let deleted = characters.filter((character) => character.id !== Number(id));

    setCharacters(deleted);
  }

  function randomHandler() {
    let haveIt = [];
    //Generate random number
    let random = (Math.random() * 826).toFixed();

    //Coerce to number by boxing
    random = Number(random);

    if (!haveIt.includes(random)) {
      haveIt.push(random);
      fetch(`https://rickandmortyapi.com/api/character/${random}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
          } else {
            window.alert("No hay personajes con ese ID");
          }
        });
    } else {
      console.log("Ya agregaste todos los personajes");
      return false;
    }
  }

  return (
    <div className="App">
      <div className={style.nav}></div>

    {location.pathname !== '/' && <NavBar onSearch={searchHandler} random={randomHandler} />}

      

      <Routes>

        <Route path = '/' element = {<LandingPage login = {login}/>}/>
        <Route path = "/home" 
        element = {<Cards characters={characters} onClose = {closeHandler}/>} />
        <Route path = "/detail:id" element = {<Detail/>}/>
        <Route path = "/about" element = {<About />}/>
        <Route path = "/favorites" element = {<Favorities/>} />
        <Route path = "*" element = {<ErrorPage/>}/> 
        
      </Routes> 
    </div>
  );
}

export default App;


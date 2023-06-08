import { useNavigate } from "react-router-dom";
import style from "./card.module.css";
import { connect } from "react-redux";
import {addFavorite, removeFavorite} from "../../redux/actions";
import { useState, useEffect } from "react";

function Card(props) {
  const navigate = useNavigate()
  const {character, onClose, addFavorite, removeFavorite, favorites} = props;
  const {image, name, species, gender, id} = character;


  const [fav, setFav] = useState(false);

  useEffect(() => {
    favorites.forEach((fav) => {
       if (fav.id === character.id) {
          setFav(true);
       }
    });
 }, [favorites]);


  function navigateHandler () {
    navigate(`/detail/${character.id}`)
}

const handleFavorite = (data) => {
  if(!fav){
    addFavorite(data)
    setFav(true);
  }else{
    removeFavorite(data);
    setFav(false);
  }
} 

  return (
    <div className={style.cardContainer}>

    {
      fav ? (
        <button onClick={ () => handleFavorite(character.id)}>❤️</button>
      ) : (
        <button onClick={ () => handleFavorite(character)}>🤍</button>
       )
    }

      <div className={style.imageContainer}>
        <img
          className={style.characterImage}
          src={character.image}
          alt={character.name}
          onClick = {navigateHandler}
        />
        <h1 className={style.name}>{character.name}</h1>
        <button
          className={style.closeButton}
          onClick={() => {
            onClose(character.id);
          }}
        >
          X
        </button>
      </div>

      <div className={style.atributes}>
        <h3>{character.species}</h3>
        <h3>{character.gender}</h3>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFavorite: (character) => dispatch (addFavorite(character)),
    removeFavorite: (id) => dispatch (removeFavorite(id)),
  }
}

const mapStatetoProps = (state) => {
  return {
    favorites: state.myFavorites,
  }
}

export default connect (mapStatetoProps, mapDispatchToProps) (Card);
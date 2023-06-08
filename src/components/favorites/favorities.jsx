import {connect, useDispatch} from "react-redux";
import Cards from "../../components/cards/Cards";
import { filterCards, orderCards } from "../../redux/actions";
import { useState } from "react";


function Favorites(props) {

const dispatch = useDispatch();

const [aux, setAux] = useState(false);

  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value));
    setAux(true);
}

const handleFilter = (event) => {
  dispatch(filterCards(event.target.value));
}
 
  return (
    <div>
      <select onChange={handleOrder}>
        <option value="A">Ascendente</option>
        <option value="D">Descendente</option>
      </select>

      <select onChange={handleFilter}>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">unknown</option>
        <option value="allCharacters">All Characters</option>
      </select>

      <Cards characters={props.favorites} />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    favorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, null)(Favorites);
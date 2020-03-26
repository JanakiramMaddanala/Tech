import React from 'react';
import PropTypes from 'prop-types';
import Unchecked from "../static/images/unchecked.png";
import Checked from "../static/images/checked.png";


const RecipeList = props => {
  const { style, recipes, onClick, onFavouriteClick, favourites } = props;

  return (
    <div style={style}>
      <h1 className="h2 px4">Recipes</h1>
      <ul className="list-reset mx4">
        {recipes.map(recipe => (
          <li
            key={recipe.id}
            onClick={() => onClick(recipe.id)}
            className="py1 pointer border-bottom-dashed"
          >
               <span className="mr1" onClick={() => onFavouriteClick(recipe.id)}>
                  {
                    favourites.includes(recipe.id) 
                    ? <img src={Checked} alt="checked"/> 
                    : <img src={Unchecked} alt="unchecked"/>
                  }
                </span>      
            <span className="align-top">{recipe.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

RecipeList.propTypes = {
  style: PropTypes.object,
  recipes: PropTypes.array,
  onClick: PropTypes.func,
};

export default RecipeList;

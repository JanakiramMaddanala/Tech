import React from 'react';
import PropTypes from 'prop-types';

const RecipeDetail = props => {
  const { recipe, style } = props;
  if (!recipe) {
    return (
      <p style={style} className="h3 p2 bg-white italic center m2">
        Please select a recipe to see the details
      </p>
    );
  }

  return (
    <div className="p2 bg-white m2" style={style}>
      <h2>{recipe.name}</h2>
      <img src={recipe.image} className="fit img-border" alt="recipe" />
      <div className="mt2 mb2">
        <span className="mr2">{recipe.category}</span>
        <span className="italic">{recipe.calories}</span>
        Calories
      </div>
      <section className="p2">
        <h3 className="h3">Ingredients</h3>
        <ol>
          {recipe.ingredients.map(ingredient => (
            <li key={ingredient}>{ingredient}</li>
          ))}
        </ol>
      </section>
      <section className="p2">
        <h3 className="h3">Steps</h3>
        <ol>
          {recipe.steps.map(step => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </section>
    </div>
  );
};

RecipeDetail.propTypes = {
  style: PropTypes.object,
  recipe: PropTypes.object,
};

export default RecipeDetail;

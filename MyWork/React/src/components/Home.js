import React from 'react';
import RecipeList from './RecipeList';
import RecipeDetail from './RecipeDetail';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      currentRecipe: null,
      favourites: [],
    };
  }

  componentDidMount() {
    fetch(`${API_URL}/v1/recipes`)
      .then(res => res.json())
      .then(recipes => {
        this.setState({ recipes });
      });
  }

  onRecipeClick = id => {
    fetch(`${API_URL}/v1/recipes/${id}`)
      .then(res => res.json())
      .then(recipe => {
        this.setState({ currentRecipe: recipe });
      });
  };

  onFavouriteClick = (id) => {
      this.setState(({favourites, ...state}) => {
      const index = favourites.indexOf(id);

      if(index !== -1){
        return {...state, favourites: favourites.filter(f => f !== id)}
      }else {
        return {...state, favourites: [...favourites, id]}
      }
    });
  }

  render() {
    const { recipes, currentRecipe, favourites } = this.state;

    return (
      <div>
        <main style={{ display: 'flex' }}>
          <RecipeList
            recipes={recipes}
            favourites={favourites}
            style={{ flex: 1 }}
            onClick={this.onRecipeClick}
            onFavouriteClick={this.onFavouriteClick}
          />
          <RecipeDetail recipe={currentRecipe} style={{ flex: 2 }} />
        </main>
      </div>
    );
  }
}

export default Home;

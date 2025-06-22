import { recipes } from "./data";
import { Fragment } from "react";

function Ingredients({ recipeIngredients }) {
  return recipeIngredients.map((ingredient) => <li>{ingredient}</li>);
}

export default function RecipeList() {
  // Implicit return "... => ()", instead of using the return keyword.
  const recipesList = recipes.map((recipe) => (
    <Fragment key={recipe.id}>
      <h2>{recipe.name}</h2>
      <ul>
        <Ingredients recipeIngredients={recipe.ingredients} />
      </ul>
    </Fragment>
  ));

  return (
    <div>
      <h1>Recipes</h1>
      {recipesList}
    </div>
  );
}

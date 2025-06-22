import { recipes } from "./data";
import { Fragment } from "react";
import { Text } from "@chakra-ui/react";
import Header from "../components/ui/custom/Header";

function Ingredients({ recipeIngredients }) {
  return recipeIngredients.map((ingredient, index) => (
    <li key={index}>{ingredient}</li>
  ));
}

export default function RecipeList() {
  // Implicit return "... => ()", instead of using the return keyword.
  const recipesList = recipes.map((recipe) => (
    <Fragment key={recipe.id}>
      <Text textStyle="m" fontWeight="bold">
        {recipe.name}:
      </Text>
      <ul>
        <Ingredients recipeIngredients={recipe.ingredients} />
      </ul>
      <br />
    </Fragment>
  ));

  return (
    <div>
      <Header description="Rendering several DOM nodes for each item of list. Used mainly React's Fragment, map(), and ChakraUI." />

      <Text textStyle="xl" fontWeight="bold">
        Recipe List
      </Text>
      <br />
      {recipesList}
    </div>
  );
}

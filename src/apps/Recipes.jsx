import { recipes } from "./data";
import { Fragment } from "react";
import { Text } from "@chakra-ui/react";
import { Divider } from "./utils";

function Ingredients({ recipeIngredients }) {
  return recipeIngredients.map((ingredient) => <li>{ingredient}</li>);
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
    </Fragment>
  ));

  return (
    <div>
      <Text textStyle="sm" fontWeight="light">
        <b>Description</b>: Rendering several DOM nodes for each item of list.
        Used mainly React's Fragment, map(), and ChakraUI.
      </Text>
      <Divider />
      <Text textStyle="xl" fontWeight="bold">
        Recipe List
      </Text>
      <br />
      {recipesList}
    </div>
  );
}

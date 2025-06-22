import Gallery from "./apps/Gallery";
import PackingList from "./apps/PackingList";
import PeopleInfo from "./apps/People";
import RecipeList from "./apps/Recipes";

const appsMap = {
  Gallery: <Gallery />,
  "Packing List": <PackingList />,
  "People Info": <PeopleInfo />,
  Recipe: <RecipeList />,
};

export default appsMap;

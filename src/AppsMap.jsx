import Gallery from "./apps/Gallery";
import PackingList from "./apps/PackingList";
import PeopleInfo from "./apps/People";
import RecipeList from "./apps/Recipes";
import ClockApp from "./apps/Clock";
import QuotesGenerator from "./apps/QuotesGenerator";
import Toolbar from "./apps/Toolbar";
import Restaurants from "./apps/Restaurants";
import Form from "./apps/FormSnapshot";
import Counter from "./apps/Counter";

const appsMap = {
  Gallery: <Gallery />,
  "Packing List": <PackingList />,
  "People Info": <PeopleInfo />,
  Recipe: <RecipeList />,
  Clock: <ClockApp />,
  "Quotes Generator": <QuotesGenerator />,
  Toolbar: <Toolbar />,
  Restaurants: <Restaurants />,
  "Form Snapshot": <Form />,
  Counter: <Counter />,
};

export default appsMap;

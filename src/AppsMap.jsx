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
import Pointer from "./apps/Pointer";
import RestoForm from "./apps/RestoForm";
import Todo from "./apps/Todo";
import Riddles from "./apps/Riddles";
import SearchBar from "./apps/SearchBar";
import ThemeToggler from "./apps/ThemeToggler";
import AdvancedTodo from "./apps/AdvancedTodo";

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
  Pointer: <Pointer />,
  "Restaurant Form": <RestoForm />,
  Todo: <Todo />,
  Riddles: <Riddles />,
  "Search Bar": <SearchBar />,
  "Theme Toggler": <ThemeToggler />,
  "Advanced Todo": <AdvancedTodo />,
};

export default appsMap;

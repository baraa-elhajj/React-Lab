import { useState } from "react";
import { foods } from "./data.jsx";
import Header from "../components/ui/custom/Header.jsx";
import { HStack, Input, Text } from "@chakra-ui/react";

function filterItems(items, query) {
  query = query.toLowerCase();
  return items.filter((item) =>
    item.name.split(" ").some((word) => word.toLowerCase().startsWith(query))
  );
}

function Search({ query, onChange }) {
  return (
    <>
      <Text fontSize="sm" w="xs">
        Search
      </Text>
      <Input
        placeholder="Search food"
        value={query}
        onChange={onChange}
        size="xs"
        w="3xs"
      />
    </>
  );
}

function FoodList({ items }) {
  return (
    // Change to Chakra UI cards
    <table>
      <tbody>
        {items.map((food) => (
          <tr key={food.id}>
            <td>
              <Text fontSize="sm">{food.name}</Text>
            </td>
            <td>
              <Text fontSize="sm" fontStyle="italic" color="gray.600">
                {food.description}
              </Text>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const results = filterItems(foods, query);

  function handleChange(e) {
    setQuery(e.target.value);
  }

  return (
    <>
      <Header
        description="Rendered a simple search bar component that 
      updates the result when the search input changes. This app tests 
      the state lifting concept. In fact, to coordinate two components, 
      move their state to their common parent, pass their info using 
      props in the parent block, then pass event handlers for the childs
      so they could change the parent state."
      />

      <Search query={query} onChange={handleChange} />
      <br />
      <br />
      <FoodList items={results} />
    </>
  );
}

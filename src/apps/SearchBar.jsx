import { useState } from "react";
import { foods } from "./data.jsx";
import Header from "../components/ui/custom/Header.jsx";
import { Box, Card, Grid, Image, Input } from "@chakra-ui/react";

function filterItems(items, query) {
  query = query.toLowerCase();
  return items.filter((item) =>
    item.name.split(" ").some((word) => word.toLowerCase().startsWith(query))
  );
}

function Search({ query, onChange }) {
  return (
    <>
      <Input
        placeholder="Search food"
        value={query}
        onChange={onChange}
        size="xs"
        w="auto"
      />
    </>
  );
}

function FoodList({ items }) {
  return (
    <>
      <Grid templateColumns="repeat(2, 1fr)" gap="6">
        {items.map((food) => (
          <Card.Root
            key={food.id}
            flexDirection="row"
            overflow="hidden"
            maxW="md"
            size="sm"
          >
            <Image
              objectFit="cover"
              maxW="100px"
              src={`/images/${food.image}`}
              alt={food.name}
            />
            <Box>
              <Card.Body>
                <Card.Title mb="2">{food.name}</Card.Title>
                <Card.Description>{food.description}</Card.Description>
              </Card.Body>
            </Box>
          </Card.Root>
        ))}
      </Grid>
    </>
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
        badgesIds={[5, 2]}
      />

      <Search query={query} onChange={handleChange} />
      <br />
      <br />
      <FoodList items={results} />
    </>
  );
}

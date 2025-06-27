import { useState } from "react";
import { restaurantsList } from "./data";
import { Image, Text, HStack, VStack, Button } from "@chakra-ui/react";
import Header from "../components/ui/custom/Header";

export default function Restaurants() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(true);

  function handleNextClick() {
    if (index === restaurantsList.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }

  function handlePreviousClick() {
    if (index === 0) {
      setIndex(restaurantsList.length - 1);
    } else {
      setIndex(index - 1);
    }
  }

  let restaurant = restaurantsList[index];
  return (
    <>
      <Header description="Rendering a Restaurant Gallery app, focusing on React useState() hook." />

      <Text textStyle="lg" fontWeight="bold">
        {restaurant.name}
      </Text>
      <HStack wrap="wrap" gap="5">
        <Image
          src={restaurant.url}
          boxSize="200px"
          borderRadius="md"
          fit="cover"
          alt={restaurant.alt}
        />
        <VStack wrap="wrap" gap="2" alignItems="flex-start">
          <Text textStyle="sm">Founded by:</Text>
          <Text fontWeight="bold">{restaurant.chef}</Text>
          <Text textStyle="sm" maxWidth="2/3">
            {showMore && restaurant.description}
          </Text>
          <Button
            onClick={() => setShowMore(!showMore)}
            size="2xs"
            variant="surface"
          >
            <Text textStyle="2xs">{showMore ? "Hide" : "Show"} details</Text>
          </Button>
        </VStack>
      </HStack>
      <Text textStyle="xs" fontWeight="light">
        ({index + 1} of {restaurantsList.length})
      </Text>
      <br />
      <HStack wrap="wrap" gap="2">
        <Button onClick={handlePreviousClick} size="2xs" variant="surface">
          <Text textStyle="2xs">Previous</Text>
        </Button>
        <Button onClick={handleNextClick} size="2xs" variant="surface">
          <Text textStyle="2xs">Next</Text>
        </Button>
      </HStack>
    </>
  );
}

import { useState } from "react";
import { restaurantsList } from "./data";

export default function Restaurants() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

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

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let restaurant = restaurantsList[index];
  return (
    <>
      <button onClick={handlePreviousClick}>Previous</button>
      <button onClick={handleNextClick}>Next</button>
      <h2>
        <i>{restaurant.name} </i>
        by {restaurant.chef}
      </h2>
      <h3>
        ({index + 1} of {restaurantsList.length})
      </h3>
      <button onClick={handleMoreClick}>
        {showMore ? "Hide" : "Show"} details
      </button>
      {showMore && <p>{restaurant.description}</p>}
      <img src={restaurant.url} alt={restaurant.alt} />
    </>
  );
}

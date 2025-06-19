import { Text } from "@chakra-ui/react";
import { people } from "./data";
import { getImageUrl } from "./utils";

function Chemists() {
  const chemistsList = people.filter(
    (person) => person.profession === "chemist"
  );

  const result = chemistsList.map((person) => (
    <li key={person.id}>
      <img src={getImageUrl(person)} alt={person.name} />
      <p>
        <b>{person.name}:</b>
        {" " + person.profession + " "}
        known for {person.accomplishment}
      </p>
    </li>
  ));

  return <ul>{result}</ul>;
}

function People({ profession }) {
  const peopleList = people.filter(
    (person) => person.profession === profession
  );

  const result = peopleList.map((person) => (
    <li key={person.id}>
      <img src={getImageUrl(person)} alt={person.name} />
      <p>
        <b>{person.name}:</b>
        {" " + person.profession + " "}
        known for {person.accomplishment}
      </p>
    </li>

    // NOTE: When each item needs to render several DOM nodes, surround the result block with React's <Fragment>
    // TODO: Create a component to test this out.
    /*
    const listItems = people.map(person =>
        <Fragment key={person.id}>
            <h1>{person.name}</h1>
            <p>{person.bio}</p>
        </Fragment>
    );
    */
  ));

  return <ul>{result}</ul>;
}

export default function PeopleInfo() {
  return (
    <section>
      <Text textStyle="sm" fontWeight="light">
        <b>Description</b>: Rendering components from an array using
        JavaScript’s map() and filter() functions, and learning when to use
        React Keys.
      </Text>

      <br />
      <Text textStyle="xl" fontWeight="bold">
        Chemists:
      </Text>
      <Chemists />

      <br />
      <Text textStyle="xl" fontWeight="bold">
        List by Profession:
      </Text>
      <People profession={"physicist"} />
    </section>
  );
}

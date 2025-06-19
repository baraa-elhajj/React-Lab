import { Text } from "@chakra-ui/react";
import { people } from "./data";
import { getImageUrl } from "./utils";

const peopleArray = [
  "Creola Katherine Johnson: mathematician",
  "Mario José Molina-Pasquel Henríquez: chemist",
  "Mohammad Abdus Salam: physicist",
  "Percy Lavon Julian: chemist",
  "Subrahmanyan Chandrasekhar: astrophysicist",
];

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

export default function PeopleInfo() {
  const peopleInfoList = peopleArray.map((person) => <li>{person}</li>);
  return (
    <section>
      <Text textStyle="sm" fontWeight="light">
        <b>Description</b>: Rendering components from an array using
        JavaScript’s map() and filter() functions, and learning when to use
        React Keys.
      </Text>
      <br />
      <ul>{peopleInfoList}</ul>

      <br />
      <Text textStyle="xl" fontWeight="bold">
        Chemists:
      </Text>
      <Chemists />
    </section>
  );
}

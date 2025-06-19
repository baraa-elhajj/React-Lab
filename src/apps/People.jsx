import { Text } from "@chakra-ui/react";

const peopleArray = [
  "Creola Katherine Johnson: mathematician",
  "Mario José Molina-Pasquel Henríquez: chemist",
  "Mohammad Abdus Salam: physicist",
  "Percy Lavon Julian: chemist",
  "Subrahmanyan Chandrasekhar: astrophysicist",
];

// to be used later
const people = [
  {
    id: 0,
    name: "Creola Katherine Johnson",
    profession: "mathematician",
  },
  {
    id: 1,
    name: "Mario José Molina-Pasquel Henríquez",
    profession: "chemist",
  },
  {
    id: 2,
    name: "Mohammad Abdus Salam",
    profession: "physicist",
  },
  {
    id: 3,
    name: "Percy Lavon Julian",
    profession: "chemist",
  },
  {
    id: 4,
    name: "Subrahmanyan Chandrasekhar",
    profession: "astrophysicist",
  },
];

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
    </section>
  );
}

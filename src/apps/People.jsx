import { Text } from "@chakra-ui/react";

const people = [
  "Creola Katherine Johnson: mathematician",
  "Mario José Molina-Pasquel Henríquez: chemist",
  "Mohammad Abdus Salam: physicist",
  "Percy Lavon Julian: chemist",
  "Subrahmanyan Chandrasekhar: astrophysicist",
];

export default function PeopleInfo() {
  const peopleInfoList = people.map((person) => <li>{person}</li>);
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

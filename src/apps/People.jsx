import { Text, HStack, Image } from "@chakra-ui/react";
import { people } from "./data";
import { getImageUrl } from "./utils";
import Header from "../components/ui/custom/Header";

function PersonInfo({ person }) {
  return (
    <li key={person.id}>
      <HStack wrap="wrap" gap="5">
        {/* <img src={getImageUrl(person)} alt={person.name} /> */}
        <Image
          src={getImageUrl(person)}
          boxSize="100px"
          borderRadius="full"
          fit="cover"
          alt={person.name}
        />
        <p>
          <b>{person.name}:</b>
          {" " + person.profession + " "}
          known for {person.accomplishment}
        </p>
      </HStack>
    </li>
  );
}

function Chemists() {
  const chemistsList = people
    .filter((p) => p.profession === "chemist")
    .map((p) => <PersonInfo key={p.id} person={p} />);

  return <ul>{chemistsList}</ul>;
}

function People({ profession }) {
  const peopleList = people
    .filter((person) => person.profession === profession)
    .map((p) => <PersonInfo key={p.id} person={p} />);

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
  return <ul>{peopleList}</ul>;
}

export default function PeopleInfo() {
  return (
    <section>
      <Header
        description="Rendering components from an array using
        JavaScript’s map() and filter() functions, and learning when to use
        React Keys."
      />

      <Text textStyle="xl" fontWeight="bold">
        Chemists:
      </Text>
      <br />
      <Chemists />

      <br />
      <br />

      <Text textStyle="xl" fontWeight="bold">
        List by Profession:
      </Text>
      <br />
      <People profession={"physicist"} />
    </section>
  );
}

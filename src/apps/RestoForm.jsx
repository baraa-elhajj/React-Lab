import { useState } from "react";
import Header from "../components/ui/custom/Header";
import { Field, Input, Image, HStack, VStack, Text } from "@chakra-ui/react";

export default function RestoForm() {
  const [person, setPerson] = useState({
    name: "Mohammad Abdul Salam",
    profession: "Physicist",
    info: {
      accomplishment: "electromagnetism theory",
      city: "Pakistan",
      imageId: "bE7W1ji",
    },
  });

  //   TODO: implement useImmer()

  function handleNameChange(e) {
    setPerson({
      ...person,
      name: e.target.value,
    });
  }

  function handleProfessionChange(e) {
    setPerson({
      ...person,
      profession: e.target.value,
    });
  }

  function handleCityChange(e) {
    setPerson({
      ...person,
      info: {
        ...person.info,
        city: e.target.value,
      },
    });
  }

  return (
    <>
      <Header
        description="A quick form to test copying nested objects with the spread syntax, 
    or useImmer(), ultimately avoiding state mutation. Applied useState() hook with an object 
    having all the form input values instead of creating a state for every form input."
      />

      <Text fontStyle="md">Copy with spread syntax:</Text>
      <br />
      <HStack gap="5">
        <VStack gap="2">
          <Field.Root maxW="xs">
            <Field.Label>Name</Field.Label>
            <Input
              placeholder="John Doe"
              value={person.name}
              onChange={handleNameChange}
            />
          </Field.Root>
          <Field.Root maxW="xs">
            <Field.Label>Profession</Field.Label>
            <Input
              placeholder="Scientist"
              value={person.profession}
              onChange={handleProfessionChange}
            />
          </Field.Root>
          <Field.Root maxW="xs">
            <Field.Label>City</Field.Label>
            <Input
              placeholder="Qatar"
              value={person.info.city}
              onChange={handleCityChange}
            />
          </Field.Root>
        </VStack>
        <VStack gap="3" alignItems="flex-start">
          <Image
            src={"https://i.imgur.com/bE7W1jis.jpg"}
            boxSize="100px"
            borderRadius="full"
            fit="cover"
            alt={person.name}
          />
          <p>
            {person.name}
            <br />
            is a {person.profession} from {person.info.city}
            <br />
            He is specialized in {person.info.accomplishment}.
          </p>
        </VStack>
      </HStack>

      <br />
      <br />
      <Text fontStyle="md">Copy with useImmer():</Text>
      <br />
      <HStack gap="5">
        <VStack gap="2">
          <Field.Root maxW="xs">
            <Field.Label>Name</Field.Label>
            <Input
              placeholder="John Doe"
              value={person.name}
              onChange={handleNameChange}
            />
          </Field.Root>
          <Field.Root maxW="xs">
            <Field.Label>Profession</Field.Label>
            <Input
              placeholder="Scientist"
              value={person.profession}
              onChange={handleProfessionChange}
            />
          </Field.Root>
          <Field.Root maxW="xs">
            <Field.Label>City</Field.Label>
            <Input
              placeholder="Qatar"
              value={person.info.city}
              onChange={handleCityChange}
            />
          </Field.Root>
        </VStack>
        <VStack gap="3" alignItems="flex-start">
          <Image
            src={"https://i.imgur.com/bE7W1jis.jpg"}
            boxSize="100px"
            borderRadius="full"
            fit="cover"
            alt={person.name}
          />
          <p>
            {person.name}
            <br />
            is a {person.profession} from {person.info.city}
            <br />
            He is specialized in {person.info.accomplishment}.
          </p>
        </VStack>
      </HStack>
    </>
  );
}

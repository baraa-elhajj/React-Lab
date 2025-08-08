import Profile from "./Profile";
import { Text, HStack } from "@chakra-ui/react";
import Header from "../components/ui/custom/Header";

export default function Gallery() {
  return (
    <section>
      <Header
        description="Applying import/export keywords, to display a
        component inside another."
        badgesIds={[1]}
      />

      <Text textStyle="xl" fontWeight="bold">
        Amazing scientists
      </Text>
      <HStack wrap="wrap" gap="5">
        <Profile />
        <Profile />
        <Profile />
      </HStack>
    </section>
  );
}

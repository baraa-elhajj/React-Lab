import Profile from "./Profile";
import { Text } from "@chakra-ui/react";

export default function Gallery() {
  return (
    <section>
      <Text textStyle="sm" fontWeight="light">
        <b>Description</b>: Applying import/export keywords, to display a
        component inside another.
      </Text>
      <br />
      <Text textStyle="xl" fontWeight="bold">
        Amazing scientists
      </Text>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}

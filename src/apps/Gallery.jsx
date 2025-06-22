import Profile from "./Profile";
import { Text } from "@chakra-ui/react";
import Header from "../components/ui/custom/Header";

export default function Gallery() {
  return (
    <section>
      <Header
        description="Applying import/export keywords, to display a
        component inside another."
      />

      <Text textStyle="xl" fontWeight="bold">
        Amazing scientists
      </Text>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}

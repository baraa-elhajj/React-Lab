import Profile from "./Profile";
import { Text } from "@chakra-ui/react";
import Divider from "../components/ui/Custom/Divider";

export default function Gallery() {
  return (
    <section>
      <Text textStyle="sm" fontWeight="light">
        <b>Description</b>: Applying import/export keywords, to display a
        component inside another.
      </Text>
      <Divider />
      <Text textStyle="xl" fontWeight="bold">
        Amazing scientists
      </Text>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}

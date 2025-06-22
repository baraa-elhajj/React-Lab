import { Text } from "@chakra-ui/react";
import Divider from "./Divider";

export default function Header({ description }) {
  return (
    <div>
      <Text textStyle="sm" fontWeight="light">
        <b>Description</b>: {description}
      </Text>
      <Divider />
    </div>
  );
}

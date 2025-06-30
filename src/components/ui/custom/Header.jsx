import { Text } from "@chakra-ui/react";
import Divider from "./Divider";

export default function Header({ description }) {
  return (
    <div>
      <Text textStyle="sm" fontWeight="light" color="gray.600">
        <Text as="span" fontWeight="bold">
          Description:
        </Text>{" "}
        {description}
      </Text>
      <Divider />
    </div>
  );
}

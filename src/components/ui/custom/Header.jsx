import { Text } from "@chakra-ui/react";
import Divider from "./Divider";
import Badges from "./Badges";

export default function Header({ description, badgesIds }) {
  return (
    <div>
      <Text textStyle="sm" fontWeight="light" color="gray.600">
        <Text as="span" fontWeight="bold">
          Description:
        </Text>{" "}
        {description}
      </Text>
      {console.log("Header >> badgesIds: ", badgesIds)}
      <Badges badgesIdList={badgesIds} />
      <Divider />
    </div>
  );
}

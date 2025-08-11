import { Text } from "@chakra-ui/react";
import Divider from "./Divider";
import Badges from "./Badges";

/**
 *
 * @param {string} props.description - Text to display in the header section.
 * @param {number[]} props.badgesIds -  A list of badge identifiers. Each ID corresponds to a specific badge from data.jsx/reactBadges[].
 * @returns Returns a paragraph containing the description provided, a list of tech badges, and a divider.
 */
export default function Header({ description, badgesIds }) {
  return (
    <>
      <Text textStyle="sm" fontWeight="light" color="gray.600">
        <Text as="span" fontWeight="bold">
          Description:
        </Text>{" "}
        {description}
      </Text>
      <Badges badgesIdList={badgesIds} />
      <Divider />
    </>
  );
}

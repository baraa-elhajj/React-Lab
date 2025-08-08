import { Badge, HStack } from "@chakra-ui/react";
import { reactBadges } from "../../../apps/data";

export default function Badges({ badgesIdList }) {
  return (
    badgesIdList && (
      <HStack mt="2" mb="-2" wrap="wrap" gap="2">
        {badgesIdList.map((id, index) => (
          <Badge
            key={index}
            colorPalette={reactBadges.find((item) => item.id === id).color}
            variant="solid"
            px={2}
            py={1}
            borderRadius="full"
            size="xs"
          >
            {reactBadges.find((item) => item.id === id).name}
          </Badge>
        ))}
      </HStack>
    )
  );
}

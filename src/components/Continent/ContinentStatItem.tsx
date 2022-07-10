import { Tooltip, Flex, Text } from "@chakra-ui/react";
import { InfoOutlineIcon } from "@chakra-ui/icons";

interface ContinentStatItemProps {
  stat: number;
  title: string;
  details?: string;
}

export function ContinentStatItem({
  stat,
  title,
  details,
}: ContinentStatItemProps) {
  return (
    <Flex
      direction="column"
      justifyContent="center"
      alignItems={["left", "center"]}
    >
      <Text
        color="yellow.450"
        fontSize={["24px", "48px"]}
        lineHeight={["36px", "72px"]}
        fontWeight="600"
      >
        {stat}
      </Text>
      <Text
        color="gray.650"
        fontSize={["18px", "24px"]}
        lineHeight={["27px", "36px"]}
        fontWeight="600"
      >
        {title}

        {details && (
          <Tooltip
            label={details}
            aria-label="A tooltip"
            hasArrow
            placement="top"
          >
            <InfoOutlineIcon
              fontSize={["10", "15"]}
              ml="5px"
              color="gray.250"
            />
          </Tooltip>
        )}
      </Text>
    </Flex>
  );
}

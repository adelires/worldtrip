import { Flex } from "@chakra-ui/react";
import { MenuItem } from "./MenuItem";

export function Menu() {
  return (
    <Flex
      w="100%"
      px={["50", "140"]}
      pt={["36px","140px"]}
      pb={["36px","80px"]}
      justify={["space-around", "space-between"]}
      flexWrap="wrap"
      gap={27}
    >
      <MenuItem imgUrl="/imgs/cocktail.svg" label="vida noturna" />
      <MenuItem imgUrl="/imgs/beach.svg" label="praia" />
      <MenuItem imgUrl="/imgs/building.svg" label="moderno" />
      <MenuItem imgUrl="/imgs/museum.svg" label="clássico" />
      <MenuItem imgUrl="/imgs/earth.svg" label="e mais..." />
    </Flex>
  );
}

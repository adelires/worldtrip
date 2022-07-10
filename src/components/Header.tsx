import { Flex, Image, Link as ChakraLink } from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import Link from "next/link";

interface HeaderProps {
  backTo?: string;
}

export function Header({ backTo }: HeaderProps) {
  return (
    <Flex
      as="header"
      direction="row"
      justify="center"
      h={[50, 100]}
      w="100%"
      alignItems="center"
      position="relative"
    >
      {backTo && (
        <Link href={backTo}>
          <ChakraLink position="absolute" left={["22px", "140px"]}>
            <ChevronLeftIcon fontSize={["16px", "32px"]} color="gray.600" />
          </ChakraLink>
        </Link>
      )}

      <Image
        src="/imgs/logo.svg"
        alt="Logo com a escrita worldtrip"
        w={[81, 186]}
      />
    </Flex>
  );
}

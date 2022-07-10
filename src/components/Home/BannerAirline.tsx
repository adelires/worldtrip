import { Box, Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react";

export function BannerAirline() {
  const isDesktop = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex
      border="1px solid"
      bgImage="url('imgs/background.png')"
      w="100%"
      justify="space-between"
      position="relative"
      height={[163, 335]}
      px={["16px", "140px"]}
      align="center"
    >
      <Box>
        <Text
          fontSize={[20, 36]}
          lineHeight={["30px", "54px"]}
          maxW={426}
          color="gray.10"
        >
          5 Continentes, infinitas possibilidades.
        </Text>
        <Text
          fontSize={[14, 20]}
          lineHeight={["21px", "30px"]}
          fontWeight="400"
          maxW={524}
          mt="20px"
          color="gray.250"
        >
          Chegou a hora de tirar do papel a viagem que você sempre sonhou.{" "}
        </Text>
      </Box>

      {isDesktop && (
        <Box>
          <Image
            src="/imgs/airplane.svg"
            alt="Imagem de um avião amarelo sobrevoando entre as nuvens."
            maxW={417}
            transform="rotate(3deg)"
            position="absolute"
            right={140}
            bottom={-31}
          />
        </Box>
      )}
    </Flex>
  );
}

import { Box, Flex, Img, Text } from "@chakra-ui/react";

interface ContinentCityProps {
  city: {
    name: string;
    country: string;
    countryFlag: string;
    imgUrl: string;
  };
}

export function ContinentCity({ city }: ContinentCityProps) {
  return (
    <Box w={["271px", "256px"]} borderWidth="1px" borderColor="yellow.450">
      <Img w="100%" height="173px" src={city.imgUrl} />

      <Flex padding="18px 24px 25px" justify="space-between" align="center">
        <Box>
          <Text
            fontSize="20px"
            lineHeight="25px"
            fontWeight="600"
            color="gray.650"
            mb="12px"
          >
            {city.name}
          </Text>
          <Text
            fontSize="16px"
            lineHeight="26px"
            fontWeight="500"
            color="gray.450"
          >
            {city.country}
          </Text>
        </Box>

        <Img w="30px" h="30px" borderRadius="50%" src={city.countryFlag} />
      </Flex>
    </Box>
  );
}

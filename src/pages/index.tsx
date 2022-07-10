import { Box, Flex, Text, useBreakpointValue } from "@chakra-ui/react";
import { GetStaticProps } from "next";

import { BannerAirline } from "../components/Home/BannerAirline";
import { Carrosel } from "../components/Carrossel";
import { Header } from "../components/Header";
import { Menu } from "../components/Menu";
import { api } from "../services/api";

export interface ContinentItemProps {
  id: string;
  name: string;
  stats: {
    countries: number;
    languages: number;
    cities: number;
  };
  subtitle: string;
  description: string;
  cities: Array<{
    name: string;
    country: string;
    countryFlag: string;
    imgUrl: string;
  }>;
  imgUrl: string;
}

interface HomeProps {
  continents: ContinentItemProps[];
}

export default function Home({ continents }: HomeProps) {

  return (
    <Box as="main" maxW={1440} mx="auto" marginBottom="40px">
      <Header />
      <BannerAirline />
      <Menu />

      <Box
        w={["60px", "90px"]}
        borderColor="gray.600"
        borderWidth="1px"
        mx="auto"
        mb={["24px", "52px"]}
      ></Box>
      <Flex
        justify="center"
        direction="column"
        align="center"
        maxW={839}
        m="auto"
        fontSize={["20px", "36px"]}
        lineHeight={["30px", "54px"]}
        color="gray.650"
        fontWeight="500"
        marginBottom={["20px", "52px"]}
      >
        <Text>Vamos nessa?</Text>
        <Text>Então escolha seu continente</Text>
      </Flex>

      <Carrosel itens={continents} />
    </Box>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const continents = await api.get("/continents");

  return {
    props: {
      continents: continents.data,
    },
  };
};

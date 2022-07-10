import { Box, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";

import { ContinentCity } from "../components/Continent/ContinentCity";
import { ContinentStatItem } from "../components/Continent/ContinentStatItem";
import { Header } from "../components/Header";
import { api } from "../services/api";

import { ContinentItemProps } from "./index";

interface ContinentProps {
  continent: ContinentItemProps;
}

export default function Continent({ continent }: ContinentProps) {
  return (
    <Box as="main" maxW={1440} mx="auto" marginBottom="45px">
      <Header backTo="/" />
      <Flex
        padding={["0", "50px 140px"]}
        alignItems={["center", "flex-end"]}
        justify={["center", "left"]}
        bgImage={`url('${continent.imgUrl}')`}
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        backgroundPosition="center"
        height={["150px", "500px"]}
        boxShadow="inset 0 0 0 2000px rgba(0,0,0,.2)"
      >
        <Text
          fontSize={["28px", "48px"]}
          lineHeight={["42px", "72px"]}
          color="gray.10"
        >
          {continent.name}
        </Text>
      </Flex>

      <Flex
        margin={["24px 16px", "80px 140px"]}
        justify="space-between"
        fontSize={["14px", "24px"]}
        lineHeight={["21px", "36px"]}
        fontWeight="400"
        color="gray.650"
        direction={["column", "row"]}
        gap={["16px", "70px"]}
      >
        <Text maxW="600px" textAlign="justify">
          {continent.description}
        </Text>
        <Flex gap={["39px", "42px"]}>
          <ContinentStatItem stat={continent.stats.countries} title="países" />
          <ContinentStatItem stat={continent.stats.languages} title="línguas" />
          <ContinentStatItem
            stat={continent.stats.cities}
            title="cidades +100"
            details="Contida na lista das +100 cidades"
          />
        </Flex>
      </Flex>

      <Box margin={["32px 16px 0", "80px 140px 0"]}>
        <Text
          fontSize={["24px", "36px"]}
          lineHeight={["36px", "54px"]}
          fontWeight="500"
          color="gray.650"
          mb={["20px", "40px"]}
        >
          Cidades +100
        </Text>
        <Grid templateColumns={["repeat(1, 1fr)", "repeat(4, 1fr)"]} gap="45px">
          {continent.cities.map((city) => {
            return (
              <GridItem key={city.name} mx={["auto", "0"]}>
                <ContinentCity city={city} />
              </GridItem>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const continents = await api.get("/continents");
  return {
    paths: continents.data.map((item) => ({
      params: {
        id: item.id,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params;
  const continents = await api.get("/continents");

  const continent = continents.data.find((item) => {
    return item.id === id;
  });

  return {
    props: {
      continent: continent,
    },
  };
};

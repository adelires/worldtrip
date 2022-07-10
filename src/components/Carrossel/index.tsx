import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Text, Link as ChakraLink, Flex } from "@chakra-ui/react";
import Link from "next/link";

interface CarroselItem {
  id: string;
  name: string;
  subtitle: string;
  imgUrl: string;
}

interface CarroselProps {
  itens: CarroselItem[];
}

export function Carrosel({ itens }: CarroselProps) {
  return (
    <Swiper
      slidesPerView={1}
      modules={[Navigation, Pagination]}
      navigation
      pagination={{ clickable: true }}
    >
      {itens.map((item) => {
        return (
          <SwiperSlide key={item.id}>
            <Link href={`/${item.id}`} passHref>
              <ChakraLink _hover={{ textDecoration: "none" }}>
                <Flex
                  backgroundImage={`url('${item.imgUrl}')`}
                  backgroundRepeat="no-repeat"
                  backgroundSize="cover"
                  backgroundPosition="center"
                  h={["250px", "450px"]}
                  alignItems="center"
                  justifyContent="center"
                  color="gray.10"
                  flexDirection="column"
                  boxShadow="inset 0 0 0 2000px rgba(0,0,0,.5)"
                >
                  <Text
                    fontSize={["24px", "48px"]}
                    lineHeight={["36px", "72px"]}
                    fontWeight="700"
                    marginBottom="16px"
                  >
                    {item.name}
                  </Text>
                  <Text
                    fontSize={["14px", "24px"]}
                    lineHeight={["21px", "36px"]}
                    fontWeight="700"
                    maxW="80%"
                    color="gray.250"
                  >
                    {item.subtitle}
                  </Text>
                </Flex>
              </ChakraLink>
            </Link>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

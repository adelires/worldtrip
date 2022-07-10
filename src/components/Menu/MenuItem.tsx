import {
  Box,
  Flex,
  Image,
  ImageProps,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

interface MenuItemProps extends ImageProps {
  imgUrl: string;
  label: string;
}

export function MenuItem({ imgUrl, label, ...rest }: MenuItemProps) {
  const isDesktop = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <Flex
      direction={["row","column"]}
      justify="center"
      align="center"
    >
      {isDesktop ? (
        <Image
          src={imgUrl}
          {...rest}
          width="85px"
          marginBottom="24px"
          alt={label}
        />
      ) : (
        <Box as="span" w="8px" h="8px" backgroundColor="yellow.450" borderRadius="50%" mr="8px"></Box>
      )}
      <Text
        fontSize={["18px", "24px"]}
        lineHeight={["27px", "36px"]}
        fontWeight="600"
        color="gray.650"
      >
        {label}
      </Text>
    </Flex>
  );
}

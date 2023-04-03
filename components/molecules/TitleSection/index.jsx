import { ChevronRightIcon } from "@chakra-ui/icons";
import { Text, Box, Flex } from "@chakra-ui/react";

const TitleSection = ({ title, subTitle, width, withBtn }) => {
  return (
    <Box width={width}>
      <Text textStyle={"title-semi-medium"}>{title}</Text>
      <Flex justifyContent={"space-between"}>
        <Text textStyle={"title-small-normal"} color={"gray.400"}>
          {subTitle}
        </Text>
        {withBtn ? (
          <Text
            textStyle={"title-small-normal"}
            color={"color-pink"}
            as={"button"}
          >
            See More <ChevronRightIcon color={"color-pink"} w={6} h={6} />
          </Text>
        ) : null}
      </Flex>
    </Box>
  );
};

export default TitleSection;

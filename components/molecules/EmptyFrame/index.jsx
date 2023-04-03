import { Text, Center } from "@chakra-ui/react";

const EmptyFrame = ({ children, width, height }) => {
  return (
    <Center
      width={width}
      height={height}
      bg={"color-gray"}
      textAlign={"center"}
    >
      <Text textStyle={"title-medium"} color={"color-gray-2"}>
        {children}
      </Text>
    </Center>
  );
};

export default EmptyFrame;

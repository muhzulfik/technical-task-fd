import {
  Box,
  Flex,
  Link,
  Button,
  useColorModeValue,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Center,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon, SearchIcon } from "@chakra-ui/icons";
import NextImage from "@/components/atoms/NextImage";

const nav = [
  { label: "SKINCARE", href: "#" },
  { label: "MAKE UP", href: "#" },
  { label: "BODY", href: "#" },
  { label: "HAIR", href: "#" },
  { label: "FRAGNANCE", href: "#" },
  { label: "NAILS", href: "#" },
  { label: "TOOLS", href: "#" },
  { label: "BRAND", href: "#" },
];

export default function Nav() {
  return (
    <>
      <Box pl={4} borderBottom={"2px"} borderBottomColor="gray.200">
        <Flex h={14} alignItems={"center"}>
          <HStack>
            <Button variant={"transparent"}>
              <HamburgerIcon h={6} w={6} />
            </Button>
            <NextImage
              src={
                "https://s3.ap-southeast-1.amazonaws.com/assets.femaledaily.com/web-assets/icon/ic-fd.svg"
              }
              alt="logo"
              width={155}
              height={30}
            />
          </HStack>
          <Box flex={1} mx={8}>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<SearchIcon color="gray.300" />}
              />
              <Input
                type="tel"
                placeholder="Search products, articles, topics, brands, etc"
              />
            </InputGroup>
          </Box>
          <Center bgColor={"color-pink"} h="full" w={"56"} as="button">
            <Text color={"white"}>LOGIN/SIGNUP</Text>
          </Center>
        </Flex>
      </Box>
      <Box px={4} borderBottom={"2px"} borderBottomColor={"gray.200"}>
        <Center h={14}>
          <HStack spacing={"4"}>
            {nav.map((value) => (
              <Link
                textStyle="title-small"
                href={value.href}
                style={{ textDecoration: "none" }}
              >
                {value.label}
              </Link>
            ))}
          </HStack>
        </Center>
      </Box>
    </>
  );
}

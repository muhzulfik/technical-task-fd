import { StarIcon, ChevronRightIcon } from "@chakra-ui/icons";
import {
  Text,
  Center,
  VStack,
  HStack,
  Stack,
  Box,
  Card,
  CardBody,
  Avatar,
  Flex,
  Image,
  SimpleGrid,
  Spacer,
  Button,
  AspectRatio,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import EmptyFrame from "@/components/molecules/EmptyFrame";
import TitleSection from "@/components/molecules/TitleSection";
import Carousel from "@/components/organism/Carousels";
import Link from "next/link";
import NextImage from "@/components/atoms/NextImage";

const HomePage = () => {
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get("https://virtserver.swaggerhub.com/hqms/FDN-WP/0.1/wp")
      .then((res) => {
        setData(res.data);
        console.log("ini merupakan data editor", res.data?.["editor's choice"]);
      });
  }, []);

  return (
    <>
      <Stack spacing={14} pb={12}>
        <VStack spacing={6}>
          <EmptyFrame width={"970px"} height={"50px"}>
            Top Frame 970x50
          </EmptyFrame>
          <EmptyFrame width={"970px"} height={"250px"}>
            Billboard 970x250
          </EmptyFrame>
        </VStack>
        <Stack spacing={"20"} px={"16"}>
          <TitleSection
            title={"Editor's Choice"}
            subTitle={"Curated With Love"}
            withBtn={true}
          />
          <SimpleGrid columns={[2, null, 5]} spacing="20px">
            {data?.["editor's choice"].map((value, index) => (
              <Stack position={"relative"} key={index}>
                <Flex position={"absolute"} zIndex={2} mt={"-12"} ml={4}>
                  <Avatar
                    size="lg"
                    name="Ryan Florence"
                    src="https://bit.ly/ryan-florence"
                  />
                  <Box ml={2}>
                    <Text>{value.editor}</Text>
                    <Text>{value.role}</Text>
                  </Box>
                </Flex>
                <Link href={"#"}>
                  <Card maxW={"xs"}>
                    <CardBody>
                      <Image
                        src={value.product.image}
                        alt="Green double couch with wooden legs"
                        borderRadius="lg"
                      />
                      <Box display="flex" mt="2" alignItems="center">
                        <Box as="span" mr="2" textStyle={"title-small"}>
                          {value.product.rating}
                        </Box>
                        {Array(5)
                          .fill("")
                          .map((_, i) => (
                            <StarIcon
                              key={i}
                              color={
                                i + 1 < value.product.rating
                                  ? "color-pink"
                                  : "gray.300"
                              }
                            />
                          ))}
                        <Box as="span" ml="2" textStyle={"title-small-normal"}>
                          (7)
                        </Box>
                      </Box>
                      <Text textStyle={"title-small"}>
                        {value.product.name}
                      </Text>
                      <Text
                        textStyle={"subtitle-small-normal"}
                        fontWeight={"medium"}
                      >
                        {value.product.description}
                      </Text>
                    </CardBody>
                  </Card>
                </Link>
              </Stack>
            ))}
          </SimpleGrid>
        </Stack>
        <HStack bg={"#fcdce4"} minH={"xs"}>
          <Stack w={"25%"}>
            <NextImage
              src={
                "https://s3.ap-southeast-1.amazonaws.com/assets.femaledaily.com/web-assets/icon/ic-fd.svg"
              }
              alt="logo"
              width={200}
              height={30}
            />
          </Stack>
          <Stack w={"40%"} spacing={4}>
            <Text textStyle={"title-semi-medium"}>
              Looking for products that are just simply perffect for you?
            </Text>
            <Text fontSize={"18px"} fontWeight={"medium"}>
              Here are some products that we believe match your skin, hair, and
              body! Have we mentioned that they solve your concerns too?
            </Text>
            <Box alignSelf={"end"}>
              <Button bg={"color-pink"} color={"white"} maxW={"xs"}>
                See My Matches
              </Button>
            </Box>
          </Stack>
          <SimpleGrid columns={[2, null, 3]} spacing="20px" p={"6"} pr={"16"}>
            {data?.["editor's choice"].slice(0, 3).map((value, index) => (
              <Link href={"#"} key={index}>
                <Stack>
                  <Card maxW={"xs"}>
                    <CardBody>
                      <Image
                        src={value.product.image}
                        alt="Green double couch with wooden legs"
                        borderRadius="lg"
                      />
                      <Box display="flex" mt="2" alignItems="center">
                        <Box as="span" mr="1" textStyle={"subtitle-small"}>
                          {value.product.rating}
                        </Box>
                        {Array(5)
                          .fill("")
                          .map((_, i) => (
                            <StarIcon
                              key={i}
                              color={
                                i + 1 < value.product.rating
                                  ? "color-pink"
                                  : "gray.300"
                              }
                            />
                          ))}
                        <Box as="span" ml="1" color="gray.600" fontSize="sm">
                          (7)
                        </Box>
                      </Box>
                      <Text textStyle={"subtitle-small"}>
                        {value.product.name}
                      </Text>
                      <Text textStyle={"subtitle-small-normal"}>
                        {value.product.description}
                      </Text>
                    </CardBody>
                  </Card>
                </Stack>
              </Link>
            ))}
          </SimpleGrid>
        </HStack>
        <VStack spacing={6}>
          <EmptyFrame width={"970px"} height={"250px"}>
            Horizontal 970x250 <br /> (Internal campaign only)
          </EmptyFrame>
        </VStack>
        <Stack spacing={"10"} px={"16"}>
          <TitleSection
            title={"Latest Articles"}
            subTitle={"So you can make better purchase decision"}
            withBtn={true}
          />
          <SimpleGrid columns={[2, null, 3]} spacing="20px">
            {data?.["latest articles"].map((value, index) => (
              <Link href={"#"} key={index}>
                <Card maxW={"sm"} variant={"unstyled"}>
                  <CardBody>
                    <Image src={value.image} alt="" borderRadius="lg" />
                    <Text textStyle={"title-small"}>{value.title}</Text>
                    <Text textStyle={"subtitle-small-normal"}>
                      {value.author} | {value.published_at}
                    </Text>
                  </CardBody>
                </Card>
              </Link>
            ))}
          </SimpleGrid>
        </Stack>
        <HStack spacing={"10"} px={"16"}>
          <TitleSection
            width={"60%"}
            title={"Latest Reviews"}
            subTitle={"So you can make better purchase decision"}
            withBtn={true}
          />
          <Spacer />
          <EmptyFrame width={"300px"} height={"250px"}>
            MR 2 <br /> 300x250
          </EmptyFrame>
        </HStack>
        <Stack spacing={"10"} px={"16"}>
          <TitleSection
            title={"Popular Groups"}
            subTitle={"Where the beauty TALK are"}
            withBtn={true}
          />
          <SimpleGrid columns={[2, null, 4]} spacing="20px">
            <Card maxW={"xs"}>
              <CardBody>
                <VStack>
                  <Avatar
                    size="2xl"
                    name="Segun Adebayo"
                    src="https://bit.ly/ryan-florence'"
                  />
                  <Text textAlign={"center"} textStyle={"title-small"}>
                    Embrace The Curl
                  </Text>
                  <Text textAlign={"center"}>
                    May our curls pop and never stop!
                  </Text>
                </VStack>
              </CardBody>
            </Card>
            <Card maxW={"xs"}>
              <CardBody>
                <VStack>
                  <Avatar
                    size="2xl"
                    name="Segun Adebayo"
                    src="https://bit.ly/prosper-baba"
                  />
                  <Text textAlign={"center"} textStyle={"title-small"}>
                    Embrace The Curl
                  </Text>
                  <Text textAlign={"center"}>
                    May our curls pop and never stop!
                  </Text>
                </VStack>
              </CardBody>
            </Card>
            <Card maxW={"xs"}>
              <CardBody>
                <VStack>
                  <Avatar
                    size="2xl"
                    name="Segun Adebayo"
                    src="https://bit.ly/code-beast"
                  />
                  <Text textAlign={"center"} textStyle={"title-small"}>
                    Embrace The Curl
                  </Text>
                  <Text textAlign={"center"}>
                    May our curls pop and never stop!
                  </Text>
                </VStack>
              </CardBody>
            </Card>
            <Card maxW={"xs"}>
              <CardBody>
                <VStack>
                  <Avatar
                    size="2xl"
                    name="Segun Adebayo"
                    src="https://bit.ly/sage-adebayo"
                  />
                  <Text textAlign={"center"} textStyle={"title-small"}>
                    Embrace The Curl
                  </Text>
                  <Text textAlign={"center"}>
                    May our curls pop and never stop!
                  </Text>
                </VStack>
              </CardBody>
            </Card>
          </SimpleGrid>
        </Stack>
        <Stack spacing={"10"} px={"16"}>
          <TitleSection
            title={"Latest Videos"}
            subTitle={"Watch and learn, ladies"}
            withBtn={true}
          />
        </Stack>
        <Stack spacing={"10"} px={"16"}>
          <TitleSection
            title={"Trending This Week"}
            subTitle={"See our weekly most reviewed products"}
          />
          <SimpleGrid columns={[2, null, 5]} spacing="20px">
            {data?.["editor's choice"].map((value, index) => (
              <Stack position={"relative"} key={index}>
                <Link href={"#"}>
                  <Card maxW={"xs"} variant={"unstyled"}>
                    <CardBody>
                      <Image
                        src={value.product.image}
                        alt="Green double couch with wooden legs"
                        borderRadius="lg"
                      />
                      <Box display="flex" mt="2" alignItems="center">
                        <Box as="span" mr="2" textStyle={"title-small"}>
                          {value.product.rating}
                        </Box>
                        {Array(5)
                          .fill("")
                          .map((_, i) => (
                            <StarIcon
                              key={i}
                              color={
                                i + 1 < value.product.rating
                                  ? "color-pink"
                                  : "gray.300"
                              }
                            />
                          ))}
                        <Box as="span" ml="2" textStyle={"title-small"}>
                          (7)
                        </Box>
                      </Box>
                      <Text textStyle={"title-small"}>
                        {value.product.name}
                      </Text>
                      <Text
                        textStyle={"subtitle-small-normal"}
                        fontWeight={"medium"}
                      >
                        {value.product.description}
                      </Text>
                    </CardBody>
                  </Card>
                </Link>
              </Stack>
            ))}
          </SimpleGrid>
        </Stack>
        <Stack spacing={"10"} px={"16"}>
          <TitleSection
            title={"Top Brands"}
            subTitle={"We all know and love"}
            withBtn={true}
          />
        </Stack>
        <Stack spacing={"4"} px={"16"}>
          <Text textStyle={"title-semi-medium"}>
            Female Daily - Find everything you want to know about beauty on
            Female Daily
          </Text>
          <Text textStyle={"title-small-normal"} fontWeight={"medium"}>
            Product Reviews, Tips & Tricks, Expert and Consumer Opinions, Beauty
            Tutorials, Discussions, Beauty Workshops, anything!
            <br />
            We are here to be your friendly solution to all things beauty,
            inside and out!
          </Text>
        </Stack>
        {/* <Carousel /> */}
      </Stack>
    </>
  );
};

export default HomePage;

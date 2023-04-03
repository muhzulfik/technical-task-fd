import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
  VisuallyHidden,
  chakra,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { FaTwitter, FaYoutube, FaInstagram, FaFacebookF } from "react-icons/fa";
import DownloadPlayStore from "../../../assets/img/download-play-store.svg";
import DownloadAppStore from "../../../assets/img/download-app-store.svg";
import NextImage from "@/components/atoms/NextImage";
import EmptyFrame from "@/components/molecules/EmptyFrame";

const SocialButton = ({ children, label, href, bg }) => {
  return (
    <chakra.button
      bg={bg}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <Box
      bg={"white"}
      borderTopWidth={2}
      borderStyle={"solid"}
      borderColor={"gray.200"}
    >
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={2}>
          <Stack align={"flex-start"}>
            <Link href={"#"} textStyle={"subtitle-small"}>
              Company
            </Link>
            <Link href={"#"} textStyle={"subtitle-small"}>
              About Us
            </Link>
            <Link href={"#"} textStyle={"subtitle-small"}>
              Feedback
            </Link>
            <Link href={"#"} textStyle={"subtitle-small"}>
              Contact
            </Link>
          </Stack>

          <Stack align={"flex-start"}>
            <Link href={"#"} textStyle={"subtitle-small"}>
              Support
            </Link>
            <Link href={"#"} textStyle={"subtitle-small"}>
              Terms && Condition
            </Link>
            <Link href={"#"} textStyle={"subtitle-small"}>
              Privacy Policy
            </Link>
            <Link href={"#"} textStyle={"subtitle-small"}>
              Help
            </Link>
          </Stack>

          <Stack align={"flex-start"}>
            <Link href={"#"} textStyle={"subtitle-small"}>
              Awards
            </Link>
            <Link href={"#"} textStyle={"subtitle-small"}>
              Newsletter
            </Link>
          </Stack>

          <Stack align={"flex-start"}>
            <Text textStyle={"subtitle-small"}>Download Our Mobile App</Text>
            <HStack spacing={2}>
              <NextImage
                src={DownloadAppStore}
                alt="logo"
                width={155}
                height={30}
              />
              <NextImage
                src={DownloadPlayStore}
                alt="logo"
                width={155}
                height={30}
              />
            </HStack>
          </Stack>
        </SimpleGrid>
      </Container>

      <Box>
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          //   justify={{ md: "space-between" }}
          align={{ md: "center" }}
        >
          <Stack w={"74%"}>
            <NextImage
              src={
                "https://s3.ap-southeast-1.amazonaws.com/assets.femaledaily.com/web-assets/icon/ic-fd.svg"
              }
              alt="logo"
              width={155}
              height={30}
            />
            <Text>
              Copyright © 2015 - 2017 Female Daily Network. All rights reserved
            </Text>
          </Stack>
          <Stack direction={"row"} spacing={6}>
            <SocialButton label={"Facebook"} href={"#"} bg={"#3e5996"}>
              <FaFacebookF fill="white" />
            </SocialButton>
            <SocialButton label={"Twitter"} href={"#"} bg={"#58abeb"}>
              <FaTwitter fill="white" />
            </SocialButton>
            <SocialButton label={"Instagram"} href={"#"} bg={"#468ac4"}>
              <FaInstagram fill="white" />
            </SocialButton>
            <SocialButton label={"YouTube"} href={"#"} bg={"#cf272c"}>
              <FaYoutube fill="white" />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
      <VStack mt={4}>
        <EmptyFrame
          width={["320", "468", "970px"]}
          height={["50px", "60px", "50px"]}
        >
          Bottom Frame 970x50, 468x60, 320x50
        </EmptyFrame>
      </VStack>
    </Box>
  );
}

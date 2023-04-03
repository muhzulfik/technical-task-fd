import { Box, Flex } from "@chakra-ui/react";
import Nav from "../Navbar";
import Footer from "../Footer";

const Layout = ({ children }) => (
  <Flex flexDirection="column" minH="100vh">
    <Nav />
    <Box as="main" flexGrow={1} minH={{ base: "xl", lg: "2xl" }} py={4}>
      {children}
    </Box>
    <Footer />
  </Flex>
);

export default Layout;

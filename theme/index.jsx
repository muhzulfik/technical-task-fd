import { extendTheme } from "@chakra-ui/react";

import colors from "./foundation/colors";
import textStyles from "./foundation/typography";

const theme = extendTheme({
  colors,
  textStyles,
});

export default theme;

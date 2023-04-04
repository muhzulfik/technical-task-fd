import React, { useEffect, useState } from "react";
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
  Image,
  HStack,
  Icon,
} from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import {
  BiChevronLeft,
  BiChevronRight,
  BiLeftArrowAlt,
  BiRightArrowAlt,
} from "react-icons/bi";
// And react-slick as our Carousel Lib
import Slider from "react-slick";
import axios from "axios";

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 2,
  dotsClass: "button__bar",
};

const Carousel = () => {
  const [slider, setSlider] = useState(
    (React.useState < Slider) | (null > null)
  );

  // This list contains all the data for carousels
  // This can be static or loaded from a server
  const cards = [
    "https://images.unsplash.com/photo-1612852098516-55d01c75769a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
    "https://images.unsplash.com/photo-1627875764093-315831ac12f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
    "https://images.unsplash.com/photo-1571432248690-7fd6980a1ae2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
    "https://images.unsplash.com/photo-1627875764093-315831ac12f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
  ];

  console.log("ini merupakan slider", slider);

  return (
    <Box position={"relative"} height={"auto"}>
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />

      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
          <Image src={card} alt="Dan Abramov" key={index} />
        ))}
      </Slider>

      <HStack>
        <Icon
          as={BiChevronLeft}
          w={8}
          h={8}
          cursor={"pointer"}
          fill={"color-pink"}
          onClick={() => slider?.slickPrev()}
        />

        {/* {cards.map((value, i) => (
          <span
            class={index === i ? "active dot" : "dot"}
            // onclick={setIndex(0)}
          ></span>
        ))} */}

        <Icon
          as={BiChevronRight}
          w={8}
          h={8}
          cursor={"pointer"}
          fill={"color-pink"}
          onClick={() => slider?.slickNext()}
        />
      </HStack>
    </Box>
  );
};

export default Carousel;


import React from 'react'


import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Box, Image, Link, Text } from '@chakra-ui/react';
import { topSlidingImage } from '../Data/products.data';
import "./crousel.css";


function Carosel() {
    return (
        <div>
            <Box w="100%" margin={"auto"} display={"flex"} border="1px solid lightgrey">
                <Box w={"70%"}>
                    <AliceCarousel
                        autoPlay={true}
                        infinite
                        autoPlayInterval={2000}
                        disableButtonsControls="true"
                        disableDotsControls="true"
                        
                    >
                        {topSlidingImage.map((e, i) => (
                            <Image w="100%" key={i} src={e.img} />
                        ))}
                    </AliceCarousel>
                </Box>
                <Box w="30%">
                    <Link
                        target="_blank"
                        href="https://www.1mg.com/categories/featured/tata-1mg-healthcare-products-664"
                    >
                        <Image
                            h="100%"
                            w="100%"
                            src="https://onemg.gumlet.io/diagnostics%2F2024-01%2F1706088937_1948x800+%2827%29.png"
                        />
                    </Link>
                </Box>
            </Box>
            <Box className='crousel' textAlign={"center"} border="1px solid lightgrey">
                <Text
                    className='crousel-Text'
                >
                    Tata 1mg: India’s Leading Online Pharmacy & Healthcare Platform
                </Text>
            </Box>
        </div>
    )
}

export default Carosel
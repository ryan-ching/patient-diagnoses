import React from "react";
import { HStack, Box, Text } from "@chakra-ui/react";
import nemsLogo from "../images/nems-logo.png"
const Header = () => {
    return (
        <Box p="5" display="flex" justifyContent="center" alignItems="center">
            <HStack>
                <img src={nemsLogo} alt="NEMS Logo"/>
                <Box p="10">
                    <Text fontSize="2xl">NEMS Patient Diagnosis (Interview Project)</Text>
                </Box>
            </HStack>
        </Box>
    );
}

export default Header;
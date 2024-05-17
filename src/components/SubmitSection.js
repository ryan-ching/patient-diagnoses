import React from "react";
import {Button} from '@chakra-ui/react'
import {checkIcon} from '@chakra-ui/icons'

const SubmitSection = () => {
    return (
        <Button leftIcon={<checkIcon />} colorScheme="green" variant="solid">
            Submit Diagnoses
        </Button>
    );
}

export default SubmitSection;
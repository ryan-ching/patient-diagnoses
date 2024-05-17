import react from 'react';
import {Box, Text, HStack, Flex} from '@chakra-ui/react';
import DiagnosisSection from './DiagnosisSection';
const PatientInfo = ({patient}) => {
    return (
        <HStack>
            <Box>
                <Text>Patient ID: {patient.id}</Text>
                <Text>Name: {patient.name}</Text>
                <Text>Age: {patient.age}</Text>
                <Text>Address: {patient.address}</Text>
                <Text>Gender/Sex: {patient.gender}</Text>
                <Text>Symptoms: {patient.symptoms.join(", ")}</Text>
            </Box>
            <Box>
                <DiagnosisSection patient={patient}/>
            </Box>
        </HStack>
    )
}

export default PatientInfo;
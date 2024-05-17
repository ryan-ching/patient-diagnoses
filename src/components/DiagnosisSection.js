import React from "react";
import { diagnosisList, symptomsList } from "./Data";
import {Select, Box, Text, Button} from '@chakra-ui/react'
import {AddIcon, addIcon} from '@chakra-ui/icons'
const DiagnosisSection = (patientSymptoms) => {
    const [diagnosis, setDiagnosis] = React.useState([]);

    const filteredDiagnosis = diagnosisList.filter((diagnosis) => {
        return diagnosisList.filter((diagnosis) => {
            (diagnosis.symptoms.includes(patientSymptoms))
        })
    });
    return (
        <Box>
            <Text>Select Diagnosis</Text>
            <Select placeHolder="Select Diagnosis">
                {diagnosisList.map((diagnosis, index) => (
                    <option value={index}>{diagnosis.name}</option>
                ))}
            </Select>
            <Button colorScheme="teal" variant="solid">
                <AddIcon />
            </Button>
        </Box>
    );
}

export default DiagnosisSection;
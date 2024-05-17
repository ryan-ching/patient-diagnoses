import React from "react";
import { diagnosisList, symptomsList } from "./Data";
import {Select, Box, Text, Button, HStack} from '@chakra-ui/react'
import {AddIcon, addIcon} from '@chakra-ui/icons'
const DiagnosisSection = ({patient}) => {
    const [diagnosis, setDiagnosis] = React.useState([]);

    const filteredDiagnosis = diagnosisList.filter((diagnosis) => {
        return diagnosisList.filter((diagnosis) => {
            (diagnosis.symptoms.includes(patient.symptoms))
        })
    });
    return (
        <Box>
            <HStack>
                <Box>
                    <Text>CURRENT SYMPTOMS:</Text>
                    {patient.symptoms.map((symptom) => (
                        <Text>{symptom}</Text>
                    ))}
                </Box>
                <Box>
                    <Text>CURRENT DIAGNOSIS:</Text>
                    {patient.diagnoses.map((diagnosis) => (
                        <Text>{diagnosis}</Text>
                    ))}
                </Box>
                <HStack>
                    <Select placeHolder="Select Diagnosis">
                        {diagnosisList.map((diagnosis, index) => (
                            <option value={index}>{diagnosis.name}</option>
                        ))}
                    </Select>
                    <Button colorScheme="teal" variant="solid">
                        <AddIcon />
                    </Button>
                </HStack>
            </HStack>
        </Box>
    );
}

export default DiagnosisSection;
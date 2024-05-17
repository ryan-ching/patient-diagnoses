import React from "react";
import { diagnosisList, symptomsList } from "./Data";
import {Select, Box, Text} from '@chakra-ui/react'
const DiagnosisSection = () => {
    const [selectSymptoms, setSelectSymptoms] = React.useState([]);

    // const filteredDiagnosis = diagnosisList.filter((diagnosis) => {
    //     return diagnosisList.filter((diagnosis) => {
    //         (diagnosis.symptoms.includes(selectSymptoms))
    //     })
    // });
    return (
        <Box>
            <Text>Select Diagnosis</Text>
            <Select placeHolder="Select Diagnosis">
                {diagnosisList.map((diagnosis, index) => (
                    <option value={index}>{diagnosis.name}</option>
                ))}
            </Select>
        </Box>
        
    );
}

export default DiagnosisSection;
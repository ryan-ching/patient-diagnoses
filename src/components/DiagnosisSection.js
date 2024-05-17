import React from "react";
import { diagnosisList } from "./Data";
import {Select, Box, Text, Button, HStack} from '@chakra-ui/react'
import {AddIcon} from '@chakra-ui/icons'
const DiagnosisSection = ({patient}) => {
    const [selectDiagnosis, setSelectDiagnosis] = React.useState('');

    const filteredDiagnosis = diagnosisList.filter((diagnosis) => {
        return diagnosisList.filter((diagnosis) => {
            (diagnosis.symptoms.includes(patient.symptoms))
        })
    });

    const handleChange = (e) => {
        console.log("clicked change")
        e.preventDefault();
        setSelectDiagnosis(e.target.value);
        console.log({selectDiagnosis})
    }

    const handleAddDiagnosis = () => {
        console.log("clicked add")
        if (selectDiagnosis !== '') {
            setSelectDiagnosis([...patient.diagnoses, selectDiagnosis]);
        }
        console.log({selectDiagnosis})
    }
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
                    <Select value={selectDiagnosis} onChange={handleChange} placeHolder="Select Diagnosis">
                        {diagnosisList.map((diagnosis, index) => (
                            <option value={diagnosis.name}>{diagnosis.name}</option>
                        ))}
                    </Select>
                    <Button colorScheme="teal" variant="solid" onClick={handleAddDiagnosis}>
                        <AddIcon />
                    </Button>
                </HStack>
            </HStack>
        </Box>
    );
}

export default DiagnosisSection;
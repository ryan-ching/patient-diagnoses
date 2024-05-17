import React from "react";
import { diagnosisList } from "./Data";
import {Select, Box, Text, Button, HStack} from '@chakra-ui/react'
import {AddIcon, CloseIcon} from '@chakra-ui/icons'

const PatientSection = ({patient, updatePatientDiagnosis, deletePatientDiagnosis}) => {
    const [selectDiagnosis, setSelectDiagnosis] = React.useState('');
    const [deleteDiagnosis, setDeleteDiagnosis] = React.useState('');

    const filteredDiagnosis = diagnosisList.filter((diagnosis) => {
        return diagnosis.symptoms.some(symptom => patient.symptoms.includes(symptom));
    })
    .sort((a, b) => {
        const aSymptoms = a.symptoms.filter(symptom => patient.symptoms.includes(symptom)).length;
        const bSymptoms = b.symptoms.filter(symptom => patient.symptoms.includes(symptom)).length;
        return bSymptoms - aSymptoms;
    });

    const handleChange = (e) => {
        console.log("clicked change")
        e.preventDefault();
        setSelectDiagnosis(e.target.value);
    };

    const handleAddDiagnosis = () => {
        console.log("clicked add")
        if (selectDiagnosis !== '') {
            updatePatientDiagnosis(patient.id, selectDiagnosis);
        }
        console.log({selectDiagnosis})
    };
    const handleDelete = (e) => {
        e.preventDefault();
        setDeleteDiagnosis(e.target.value);
    }
    const handleDeleteDiagnosis = (e) => {
        e.preventDefault();
        setDeleteDiagnosis(e.target.value);
        deletePatientDiagnosis(patient.id, deleteDiagnosis);
    }
    return (
        <Box >
            <HStack spacing={300} justify="center" align="center" width="100%">
                <Box>
                    <Text>Patient ID: {patient.id}</Text>
                    <Text>Name: {patient.name}</Text>
                    <Text>Age: {patient.age}</Text>
                    <Text>Address: {patient.address}</Text>
                    <Text>Gender/Sex: {patient.gender}</Text>
                </Box>
                <Box>
                    <Text>CURRENT SYMPTOMS:</Text>
                    {patient.symptoms.map((symptom) => (
                        <Text>{symptom}</Text>
                    ))}
                </Box>
                <HStack>
                    <Select value={selectDiagnosis} onChange={handleChange}>
                        <option value="" disabled selected hidden>Select Diagnosis </option>
                        {filteredDiagnosis.map((diagnosis, index) => (
                            <option value={diagnosis.name}>{diagnosis.name}</option>
                        ))}
                    </Select>
                    <Button colorScheme="teal" variant="solid" onClick={handleAddDiagnosis}>
                        <AddIcon />
                    </Button>
                </HStack>
                <Box>
                    <Text>CURRENT DIAGNOSIS:</Text>
                    {patient.diagnoses.map((diagnosis) => (
                        <HStack>
                            <Text>{diagnosis}</Text>
                            <Button value={diagnosis} onClick={handleDeleteDiagnosis}><CloseIcon /></Button>
                        </HStack>
                    ))}
                </Box>
            </HStack>
        </Box>
    );
}

export default PatientSection;
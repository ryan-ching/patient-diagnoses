import React from "react";
import { diagnosisList } from "./Data";
import {Select, Box, Text, Button, HStack} from '@chakra-ui/react'
import {AddIcon, CloseIcon} from '@chakra-ui/icons'

const PatientSection = ({patient, updatePatientDiagnosis, deletePatientDiagnosis}) => {
    // State for diagnosis selected in scroll menu (to be added)
    const [selectDiagnosis, setSelectDiagnosis] = React.useState('');
    // State for diagnosis selected to be deleted
    const [deleteDiagnosis, setDeleteDiagnosis] = React.useState('');

    // Only include diagnoses that have one common symptom with current patient
    const filteredDiagnosis = diagnosisList.filter((diagnosis) => {
        return diagnosis.symptoms.some(symptom => patient.symptoms.includes(symptom));
    })
    // Sort by length of common symptoms
    .sort((a, b) => {
        const aSymptoms = a.symptoms.filter(symptom => patient.symptoms.includes(symptom)).length;
        const bSymptoms = b.symptoms.filter(symptom => patient.symptoms.includes(symptom)).length;
        return bSymptoms - aSymptoms;
    });
    // Whenever diagnosis selected from dropdown, update selectDiagnosis
    const handleChange = (e) => {
        // console.log("clicked change")
        e.preventDefault();
        setSelectDiagnosis(e.target.value);
    };
    // When + button clicked, add diagnosis to currentpatient in patientStatus
    const handleAddDiagnosis = () => {
        // console.log("clicked add")
        if (selectDiagnosis !== '') {
            updatePatientDiagnosis(patient.id, selectDiagnosis);
        }
        console.log({selectDiagnosis})
    };
    // When X button clicked, delete associated diagnosis from current patient in patientStatus
    const handleDeleteDiagnosis = (e) => {
        e.preventDefault();
        setDeleteDiagnosis(e.target.value);
        deletePatientDiagnosis(patient.id, deleteDiagnosis);
    }
    return (
        <Box >
            <HStack spacing={100} justify="center" align="center" width="100%">
                <Box bg="teal.500" p={5} w={400} h={150} borderRadius={10}>
                    <Text color="white">Patient ID: {patient.id}</Text>
                    <Text color="white">Name: {patient.name}</Text>
                    <Text color="white">Age: {patient.age}</Text>
                    <Text color="white">Address: {patient.address}</Text>
                    <Text color="white">Gender/Sex: {patient.gender}</Text>
                </Box>
                <Box bg="teal.500" p={5} w={400} h={150} borderRadius={10}>
                    <Text color="white">CURRENT SYMPTOMS:</Text>
                    {patient.symptoms.map((symptom) => (
                        <Text color="white">{symptom}</Text>
                    ))}
                </Box>
                <Box bg="teal.500" p={5} w={400} h={150} borderRadius={10}>
                    <Text color="white" paddingBottom={10}> ADD DIAGNOSIS</Text>
                    <HStack>
                        <Select value={selectDiagnosis} onChange={handleChange}>
                            <option value="" disabled selected hidden>Select Diagnosis </option>
                            {filteredDiagnosis.map((diagnosis) => (
                                <option color="white" value={diagnosis.name}>{diagnosis.name}</option>
                            ))}
                        </Select>
                        <Button colorScheme="teal" variant="solid" onClick={handleAddDiagnosis}>
                            <AddIcon />
                        </Button>
                    </HStack>
                </Box>
                <Box bg="teal.500" p={5} w={400} h={150} borderRadius={10}>
                    <Text color="white">CURRENT DIAGNOSIS:</Text>
                    {patient.diagnoses.map((diagnosis) => (
                        <HStack 
                            justify="space-between"
                            borderRadius={5}
                            borderWidth="2px" 
                            borderColor="teal.500">
                            <Text color="white" textSize={10} paddingLeft={4}>{diagnosis}</Text>
                            <Button value={diagnosis} onClick={handleDeleteDiagnosis}><CloseIcon color="teal.500"/></Button>
                        </HStack>
                    ))}
                </Box>
            </HStack>
        </Box>
    );
}

export default PatientSection;
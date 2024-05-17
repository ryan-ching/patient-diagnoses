import React from "react";
import { patientList, diagnosisList, symptomsList} from "./Data";
import DiagnosisSection from "./DiagnosisSection";
import SubmitSection from "./SubmitSection";
import {Select, Box, Card, CardHeader, CardBody, Stack, Text, StackDivider, Button} from '@chakra-ui/react'

const PatientSection = () => {
    return (
        <Card>
            <CardHeader>PATIENTS</CardHeader>
            <CardBody>
            <Stack divider={<StackDivider borderColor="black"/>} spacing="4">
            {patientList.map((patient) => (
                    <Box>
                        <Text>Patient ID: {patient.id}</Text>
                        <Text>Name: {patient.name}</Text>
                        <Text>Age: {patient.age}</Text>
                        <Text>Address: {patient.address}</Text>
                        <Text>Gender/Sex: {patient.gender}</Text>
                        <Text>Symptoms: {patient.symptoms.join(", ")}</Text>
                        <DiagnosisSection patientSymptoms={patient.symptoms}/>
                    </Box>
            ))}
            </Stack>
            </CardBody>
            <SubmitSection />
        </Card>
    );
};

export default PatientSection;
import React from "react";
import { patientList, diagnosisList, symptomsList} from "./Data";
import PatientInfo from "./PatientInfo";
import SubmitSection from "./SubmitSection";
import {Select, Box, Card, CardHeader, CardBody, Stack, Text, StackDivider, Button} from '@chakra-ui/react'

const PatientSection = () => {
    return (
        <Card>
            <CardHeader>PATIENTS</CardHeader>
            <CardBody>
            <Stack divider={<StackDivider borderColor="black"/>} spacing="4">
            {patientList.map((patient) => (
                    <PatientInfo patient={patient} />
            ))}
            </Stack>
            </CardBody>
            <SubmitSection />
        </Card>
    );
};

export default PatientSection;
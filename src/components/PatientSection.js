import React from "react";
import { patientList } from "./Data";
import {Box, Card, CardHeader, CardBody, CardFooter, Stack, Text, StackDivider, Heading} from '@chakra-ui/react'

const PatientSection = () => {
    return (
        <Card>
            <CardHeader>PATIENTS</CardHeader>
            <CardBody>
            <Stack divider={<StackDivider borderColor="black"/>} spacing="4">
            {patientList.map((patient, index) => (
                    <Box>
                        <Text textTransform={"uppercase"}>Name: {patient.name}</Text>
                        <Text textTransform={"uppercase"}>Age: {patient.age}</Text>
                        <Text textTransform={"uppercase"}>Address: {patient.address}</Text>
                        <Text textTransform={"uppercase"}>Gender/Sex: {patient.gender}</Text>
                        <Text textTransform={"uppercase"}>Symptoms: {patient.symptoms.join(", ")}</Text>
                    </Box>
            ))}
            </Stack>
            </CardBody>
        </Card>
    );
};

export default PatientSection;
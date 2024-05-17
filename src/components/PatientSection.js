import React from "react";
// import { PatientList } from "./Data";
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
const PatientList = [
    {
        name: "John Doe",
        age: 20,
        address: "1234 West St.",
        gender: "M"
    },
    {
        name: "Jane Doe",
        age: 40,
        address: "3456 North St.",
        gender: "F"
    },
    {
        name: "Jim Doe",
        age: 70,
        address: "7890 South St.",
        gender: "M"
    },
]

const PatientSection = () => {
    return (
        <Card>
            {PatientList.map((patient, index) => (
                <Card key={index}>
                    <CardHeader>{patient.name}</CardHeader>
                    <CardBody>
                        <p>AGE: {patient.age}</p>
                        <p>ADDRESS: {patient.address}</p>
                        <p>GENDER: {patient.gender}</p>
                    </CardBody>
                </Card>
            ))}
        </Card>
    );
};

export default PatientSection;
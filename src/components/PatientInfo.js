import react from 'react';
import {Box, Text, HStack, Flex} from '@chakra-ui/react';
import DiagnosisSection from './DiagnosisSection';
import {diagnosisList, patientList} from './Data';
const PatientInfo = ({patient}) => {
    const [patientStatus, setPatientStatus] = react.useState([...patientList]);
    const handleAddDiagnosis = (patientId, diagnosisIndex) => {
        const updatedPatient = patientList.map((patient) => {
            if (patient.id === patientId) {
                return {
                    ...patient,
                    diagnoses: [...patient.diagnoses, diagnosisList[diagnosisIndex]]
                }
            }
            return patient;
        })
        setPatientStatus(updatedPatient);
    }
    return (
        <HStack>
            <Box>
                <Text>Patient ID: {patient.id}</Text>
                <Text>Name: {patient.name}</Text>
                <Text>Age: {patient.age}</Text>
                <Text>Address: {patient.address}</Text>
                <Text>Gender/Sex: {patient.gender}</Text>
            </Box>
            <Box>
                <DiagnosisSection patient={patient} onAddDiagnosis={handleAddDiagnosis}/>
            </Box>
        </HStack>
    )
}

export default PatientInfo;
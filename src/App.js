import react from 'react';
import {Box, Text, HStack, Stack, Card, CardHeader, CardBody, StackDivider} from '@chakra-ui/react';
import Header from './components/Header';
import PatientSection from './components/PatientSection';
import SubmitSection from './components/SubmitSection';
import {ChakraProvider} from '@chakra-ui/react';
import {diagnosisList, patientList} from './components/Data';

function App() {
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
      <ChakraProvider>
        <Header />
        <Card>
            <CardHeader>
                <Text fontSize="3xl" display="flex" justifyContent="center">Patient Information</Text>
            </CardHeader>
            <CardBody>
            <Stack divider={<StackDivider borderColor="black"/>} spacing="4">
            {patientList.map((patient) => (
                <HStack>
                  <PatientSection patient={patient} onAddDiagnosis={handleAddDiagnosis}/>
                </HStack>
            ))}
            </Stack>
            </CardBody>
            <SubmitSection />
        </Card>
        </ChakraProvider>
    )
}

export default App;

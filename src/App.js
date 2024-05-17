import react, { useEffect } from 'react';
import {Text, HStack, Stack, Card, CardHeader, CardBody, StackDivider} from '@chakra-ui/react';
import Header from './components/Header';
import PatientSection from './components/PatientSection';
import SubmitSection from './components/SubmitSection';
import {ChakraProvider} from '@chakra-ui/react';
import {patientList} from './components/Data';

function App() {
    // If data stored locally, inital state is set to that data, otherwise set to patientList (empty diagnoses)
    const [patientStatus, setPatientStatus] = react.useState(() => {
      const savedData = localStorage.getItem('patientStatus');
      return savedData ? JSON.parse(savedData) : patientList;
    });
    // Update local storage whenever patientStatus changes
    useEffect(() => {
        localStorage.setItem('patientStatus', JSON.stringify(patientStatus));
    }, [patientStatus]);
    // Passed into PatientSection.js, called when + button clicked, 
    // only adds diagnosis if not already in patient.diagnoses
    const updatePatientDiagnosis = (patientId, newDiagnosis) => {
        setPatientStatus((prevPatientStatus) => {
            return prevPatientStatus.map((patient) => {
                if (patient.id === patientId && !patient.diagnoses.includes(newDiagnosis)) {
                    return {
                        ...patient,
                        diagnoses: [...patient.diagnoses, newDiagnosis]
                    }
                }
                return patient;
            })
        })
    }
    // Passed into PatientSection.js, called when - button clicked, diagnosis guaranteed to be in patient.diagnoses 
    // since its only displays current diagnoses
    const deletePatientDiagnosis = (patientId, diagnosis) => {
        setPatientStatus((prevPatientStatus) => {
            return prevPatientStatus.map((patient) => {
                if (patient.id === patientId) {
                    return {
                        ...patient,
                        diagnoses: patient.diagnoses.filter((d) => d !== diagnosis)
                    }
                }
                return patient;
            })
        })
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
            {patientStatus.map((patient) => (
                <HStack>
                  <PatientSection 
                    patient={patient}
                    updatePatientDiagnosis={updatePatientDiagnosis} 
                    deletePatientDiagnosis={deletePatientDiagnosis}/>
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

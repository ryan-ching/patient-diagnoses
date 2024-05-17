import React from 'react';
import PatientSection from './components/PatientSection';
import DiagnosisSection from './components/DiagnosisSection';
import { ChakraProvider } from '@chakra-ui/react';


function App() {
  return (
    <ChakraProvider>
        <PatientSection />
        <DiagnosisSection />
    </ChakraProvider>
  );
}

export default App;

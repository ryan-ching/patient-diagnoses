import React from 'react';
import PatientSection from './components/PatientSection';
import DiagnosisSection from './components/DiagnosisSection';
import { ChakraProvider } from '@chakra-ui/react';

import Header from './components/Header';

function App() {
  return (
    <ChakraProvider>
        <Header />
        <PatientSection />
    </ChakraProvider>
  );
}

export default App;

import React from 'react';
import PatientSection from './components/PatientSection';
import { ChakraProvider } from '@chakra-ui/react';


function App() {
  return (
    <ChakraProvider>
      <div>
        <PatientSection />
      </div>
    </ChakraProvider>
  );
}

export default App;

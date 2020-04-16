import React from 'react';
import VanillaForm from './VanillaForm';
import FormikForm from './FormikForm';
import './css/styles.css';

function App() {
  return (
    <div className="App">
      <div className="w-full max-w-md mx-auto py-8">
        <FormikForm />
      </div>
    </div>
  );
}

export default App;

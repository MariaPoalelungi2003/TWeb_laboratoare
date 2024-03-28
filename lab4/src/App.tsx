// App.tsx
import React from 'react';
import logo from './logo.svg';
import './App.css';
import './interfaces.ts';

const App: React.FC = () => {
  // Utilizarea interfeței într-un obiect
  const myObject: SecondInterface = {
    field1: "Hello",
    field2: 42,
    field3: true,
    field4: ["a", "b", "c"],
    field5: { key: "example", value: 123 },
    additionalField1: new Date(),
    additionalField2: "extra field"
  };
console.log(myObject);
  return (
      <div className="App">
        <h1>Detalii obiect:</h1>
        <p>Field 1: {myObject.field1}</p>
        <p>Field 2: {myObject.field2}</p>
        <p>Field 3: {myObject.field3.toString()}</p>
        <p>Field 4: {myObject.field4.join(", ")}</p>
        <p>Field 5 Key: {myObject.field5.key}</p>
        <p>Field 5 Value: {myObject.field5.value}</p>
        <p>Additional Field 1: {myObject.additionalField1.toString()}</p>
        <p>Additional Field 2: {myObject.additionalField2}</p>
      </div>
  );
}

export default App;

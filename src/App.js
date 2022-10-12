import React from "react";
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <h1>My React App - credit card component</h1>
      <Card
        data={{
          name: "Oliveira, Rafael",
          bank: "Big Bank, Inc",
          cardNumber1: "1234",
          cardNumber2: "5678",
          cardNumber3: "8765",
          cardNumber4: "4321",
          expiryDate: "08/19",
        }}
      />
    </div>
  );
}

export default App;

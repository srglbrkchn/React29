import React, { useState } from "react";

function App() {
  const [fName, setFName] = useState("");
  const[lName, setLname] = useState("");

  function handleFName(event) {
    setFName(event.target.value);
  }

  function handleLName(event) {
    setLname(event.target.value);
  }

  return (
    <div className="container">
      <h1>Hello {fName} {lName} </h1>
      <form>
        <input name="fName" value={fName} onChange={handleFName} placeholder="First Name" />
        <input name="lName" value={lName} onChange={handleLName} placeholder="Last Name" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;

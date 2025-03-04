import React, { useState } from "react";

function MyComponent() {
  let [name, setName] = useState("Guest");
  const [age, setAge] = useState(0);
  const updateName = () => {
    setName("Siddappa");
    console.log(name);
  };
  const updateAge = () => {
    setAge(age + 1);
    console.log(age);
  };
  return (
    <div>
      <p>Name:{name}</p>
      <button onClick={updateName}>SetName</button>
      <p>Age:{age}</p>
      <button onClick={updateAge}>incrementAge</button>
    </div>
  );
}

export default MyComponent;

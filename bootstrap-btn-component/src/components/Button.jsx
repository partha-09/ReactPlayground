import { useState } from "react";

function Button() {
  const [btnval, setbtnval] = useState(0);
  const handleClick1 = () => {
    setbtnval((btnval) => btnval + 1);
    console.log(btnval);
  };
  const handleClick2 = () => {
    setbtnval((btnval) => btnval - 1);
    console.log(btnval);
  };
  return (
    <>
      <h1>Button Element</h1>
      {btnval < 0 && <p>Negative values are not accepted</p>}
      <button type="button" className="btn btn-primary" onClick={handleClick1}>
        increment
      </button>
      <button type="button" className="btn btn-danger" onClick={handleClick2}>
        decrement
      </button>
    </>
  );
}

export default Button;

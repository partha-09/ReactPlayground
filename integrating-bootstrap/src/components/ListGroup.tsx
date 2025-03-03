import { useState } from "react";

function ListGroup() {
  let items = ["Karnataka", "kerala", "maharastra", "goa"];

  const [seleccted, setseleccted] = useState(-1);
  return (
    <>
      <h1>List Elements</h1>
      {items.length === 0 && <p>NO items to display</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              seleccted === index ? "list-group-item active" : "list-group-item"
            }
            key={item}
            onClick={() => setseleccted(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;

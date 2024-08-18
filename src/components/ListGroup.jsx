import { useState } from "react";

function ListGroup() {
  let items = ["Paris", "Seoul", "Tokyo", "London", "Washington"];
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      <h1>List</h1>

      {items.length === 0 && <p>No Item Found!</p>}
      
      <ul className="list-group">
        {/*key helps to indentify each item so react can keep track of it */}
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item-active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {setSelectedIndex(index),console.log(item)}}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;

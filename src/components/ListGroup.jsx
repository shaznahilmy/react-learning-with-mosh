import { useState } from "react";

/**
 * @typedef {Object} Props
 * @property {string[]} items - The array of strings.
 * @property {string} heading - The heading string.
 * @property {function(string): void} onSelect - The function to call when an item is selected.
 */

/**
 * @param {Props} props
 */

function ListGroup({ items, heading, onSelect }) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      <h1>{heading}</h1>

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
            onClick={() => {
              setSelectedIndex(index);
              onSelect(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;

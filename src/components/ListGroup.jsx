//import {MouseEvent} from "react";
function ListGroup() {
  let items = ["Paris", "Seoul", "Tokyo", "London", "Washington"];
  //js compilor doesnt know the type of parameter event is, whether its  string/number etc
  //const handleClick = () => console.log(event.);
  return (
    <>
      <h1>List</h1>
      {items.length===0 && <p>No Item Found!</p>}
      <ul className="list-group">
       {/*key helps to indentify each item so react can keep track of it */}
        {items.map((item) => (
          <li className="list-group-item" key={item} onClick={(event)=>console.log(event)}>{item}</li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;

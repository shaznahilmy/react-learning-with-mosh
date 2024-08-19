import ListGroup from "./components/ListGroup";

var items = ["Paris", "Seoul", "Tokyo", "London", "Washington"];
var heading = "Cities";

// var items = ["France", "Korea", "Japan", "England", "USA"];
// var heading = "Countries";

const handleSelect = (item) => {
  console.log("Selected item: ",item);

};

function App(){
  return <div><ListGroup items={items} heading={heading} onSelect={handleSelect}/></div>
}
export default App;
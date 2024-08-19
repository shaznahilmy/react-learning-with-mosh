import ListGroup from "./components/ListGroup";

var items = ["Paris", "Seoul", "Tokyo", "London", "Washington"];
var heading = "Cities";

// var items = ["France", "Korea", "Japan", "England", "USA"];
// var heading = "Countries";

function App(){
  return <div><ListGroup items={items} heading={heading}/></div>
}
export default App;
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";

function App() {

  const items = ["India", "Japan", "Germany", "Paris", "Venice"];


    // create a handle for function handling 
    const handleonSelectItem = (item:string) => {
      console.log("You selected: " + item);
    }

  return (
    <div>
      <ListGroup items={items} heading="Most Loved Countries" onSelectItem={handleonSelectItem} />
      <Alert>Sorry you got in <span className="uppercase text-red-700 text-lg">"hell!"</span></Alert>
    </div>
  );
}

export default App;

import ListGroup from "./components/ListGroup";

function App() {

  const items = ["India", "Japan", "Germany", "Paris", "Venice"];

  return (
    <div>
      <ListGroup items={items} heading="Most Loved Countries" />
    </div>
  );
}

export default App;

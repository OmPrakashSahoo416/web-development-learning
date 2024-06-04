import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import ButtonClassic from "./components/ButtonClassic";
import { useState } from "react";

function App() {

  const items = ["India", "Japan", "Germany", "Paris", "Venice"];


    // create a handle for function handling 
    const handleonSelectItem = (item:string) => {
      console.log("You selected: " + item);
    }

    const [alertVisible, SetAlertVisible] = useState(false);


    

  return (
    <div>
      <ListGroup items={items} heading="Most Loved Countries" onSelectItem={handleonSelectItem} />
      {/* <Alert>Sorry that was it from my side</Alert> */}

      {/* when the first condition is true second condition returns  */}
      {alertVisible && <Alert onClick={() => SetAlertVisible(false)}>You clicked and I got your IP address</Alert>}

      {/* The below thing is called lifting state up in react, since we are using app tsx functions and strings 
      to change the contents in below components which is lower in virtual dom using props */}
      <ButtonClassic color="bg-purple-500" onClick={() => SetAlertVisible(true)}>Click Me!</ButtonClassic>
    </div>
  );
}

export default App;

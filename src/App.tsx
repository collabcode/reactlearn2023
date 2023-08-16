import React from "react";
import "./App.css";
import Message from "./components/Message";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./components/Card";

function App() {
  //write a for loop
  const items = [1, 2, 3, 4, 5, 6, 7];

  return (
    <div className="App">
      <Message text="Hello World" />
      <div className="card-group">
        {items.map((i) => (
          <Card
            id={i}
            title="card title"
            description="card description"
            image={"https://picsum.photos/seed/" + i * 100 + "/200"}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

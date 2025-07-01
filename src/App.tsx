import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "London", "Paris", "Tokyo", "Islamabad"];

  return (
    <div>
      <ListGroup items={items} heading="Cities" />
    </div>
  );
}

export default App;

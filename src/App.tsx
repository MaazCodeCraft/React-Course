import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "London", "Paris", "Tokyo", "Islamabad"];

  let HandleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={HandleSelectItem}
      />
    </div>
  );
}

export default App;

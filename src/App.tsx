import ListGroup from "./components/ListGroup";

function App() {
  const items = ["New York", "Los Angles", "San Francisco"];
  return (
    <div>
      <ListGroup
        heading="Miami"
        items={items}
        onSelectItem={() => console.log(items)}
      />
    </div>
  );
}

export default App;

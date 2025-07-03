import Button from "./components/Button/Button";

function App() {
  return (
    <div>
      <Button color="primary" onClick={() => console.log("Clicked")}>
        Button
      </Button>
    </div>
  );
}

export default App;

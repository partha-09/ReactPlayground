import List from "./List";

function App() {
  const fruits = [
    { id: 1, name: "Apple", calories: 95 },
    { id: 2, name: "orange", calories: 45 },
    { id: 3, name: "Banana", calories: 105 },
    { id: 4, name: "coconut", calories: 159 },
    { id: 5, name: "pineapple", calories: 37 },
  ];
  return (
    <>
      <List items={fruits} category="Fruits" />
    </>
  );
}

export default App;

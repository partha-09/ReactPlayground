function List(props) {
  //   const fruits = ["Apple", "orange", "Banana", "coconut", "pineapple"];
  //  CASE1: return fruits;   it return "AppleorangeBananapineapple"
  /*CASE 2:
  const listItems = fruits.map((fruit) => <li>{fruit}</li>);
  return <ul>{listItems}</ul>;
OP:
Apple
orange
Banana
coconut
pineapple
*/
  /*
  const fruits = [
    { id: 1, name: "Apple", calories: 95 },
    { id: 2, name: "orange", calories: 45 },
    { id: 3, name: "Banana", calories: 105 },
    { id: 4, name: "coconut", calories: 159 },
    { id: 5, name: "pineapple", calories: 37 },
  ];
  //   fruits.sort((a, b) => a.name.localeCompare(b.name)); lexiogrpahic ascending
  //   fruits.sort((a, b) => b.name.localeCompare(a.name)); descendong

  //  fruits.sort((a, b) => a.calories - b.calories); //NUMERIC
  //fruits.sort((a, b) => b.calories - a.calories); // Reverse NUMERIC
  //   const lowcalfruits = fruits.filter((fruit) => fruit.calories < 100);
  //   const highcalfruits = fruits.filter((fruit) => fruit.calories > 100);

  const listItems = fruits.map((fruit) => (
    <li key={fruit.id}>
      {fruit.name}: &nbsp;
      <b>{fruit.calories}</b>
    </li>
  ));
  return <ol>{listItems}</ol>;

  */
  const itemlist = props.items;
  const category = props.category;
  const listItems = itemlist.map((fruit) => (
    <li key={fruit.id}>
      {fruit.name}: &nbsp;
      <b>{fruit.calories}</b>
    </li>
  ));
  return (
    <>
      <h2>{category}</h2>
      <ol>{listItems}</ol>;
    </>
  );
}

export default List;

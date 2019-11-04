var GroceryList = () => (
  <div>
    <ul>
      <Apples />
      <Pears />
    </ul>
  </div>
);

var Apples = () => (
  <li>Apples</li>
);

var Pears = () => (
  <li>Pears</li>
);

ReactDOM.render(<GroceryList />, document.getElementById("app"));
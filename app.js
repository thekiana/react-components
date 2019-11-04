// var GroceryList = (props) => (
//   <div>
//     <ul>
//     {props.groceryItems.map((item) => {
//       return (<li> {item} </li>);
//     })}
//     </ul>
//   </div>
// );


class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li>{this.props.item}</li>
    );
  }

}

var GroceryList = (props) => (
  <ul>
    {props.groceryItems.map(item =>
      <GroceryListItem item={item} />
    )}
  </ul>
);



ReactDOM.render(<GroceryList groceryItems={['apples', 'pears', 'peaches']}/>, document.getElementById("app"));
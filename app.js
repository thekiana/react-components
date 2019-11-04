// var GroceryList = (props) => (
//   <div>
//     <ul>
//     {props.groceryItems.map((item) => {
//       return (<li> {item} </li>);
//     })}
//     </ul>
//   </div>
// );
var GroceryList = () => (
  <div>
    <GroceryListItem groceryItems={['apples', 'pears', 'peaches']}/>
  </div>
);

const GroceryListItem = (props) => {
  return (
    <div>
      <ul>
        {props.groceryItems.map((item) => {
          return (<li>{item}</li>)
        })}
      </ul>
    </div>
  )
}



ReactDOM.render(<GroceryList />, document.getElementById("app"));
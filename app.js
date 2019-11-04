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

    this.state = {
      done: false
    };
  }

  onListItemHover() {
    this.setState({
      done: !this.state.done
    });
  }

  render() {

    var style = {
      fontWeight: this.state.done ? 'bold' : 'normal'
    };

    return (
      <li style={style} onMouseEnter={this.onListItemHover.bind(this)} onMouseLeave={this.onListItemHover.bind(this)}>{this.props.item}</li>
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
import React, {Component} from 'react';
// import firebase from './components/firebase.js';

// class App extends Component {
//   constructor(){
//     super()
//     this.state = {
//       todos: [{title:"mehruu", edit: false},{title:"bubu",edit:false},{title:"pupu",edit:false}],
//       value: ""
//     }
//   }
//   add_todo = () => {
//     let obj = {title: this.state.value}
//     this.state.todos.push(obj);
//     this.setState({
//       todos: this.state.todos,
//       value:""
//     })
//   }
//
//   delete_todo = (index)=>{
//     this.state.todos.splice(index,1)
//     this.setState({
//       todos: this.state.todos
//     })
//   }
//
//   edit_todo = (index) => {
//     this.state.todos[index].edit = true;
//     this.setState({
//       todos:this.state.todos
//     })
//   }
//   handle_change = (e,index)=>{
//     this.state.todos[index].title = e.target.value;
//     this.setState({
//       todos:this.state.todos
//     })
//   }
//   update = (index)=>{
//     this.state.todos[index].edit = false;
//     this.setState({
//       todos:this.state.todos
//     })
//   }
//   render(){
//     let {todos,value} = this.state;
//     return(
//       <div>
//         <input value = {value} type="text" onChange={(e) =>this.setState({value: e.target.value})} placeholder="Enter Your TODO"/>
//         <button onClick={this.add_todo} type="button">Add Item</button>
//         <ul>
//           {todos.map((v,i)=>{
//             return <li key={i}>{v.edit? <input type="text" value={v.title} onChange={(e)=>this.handle_change(e,i)} /> : v.title}
//               {v.edit?
//                 <button onClick={() => this.update(i)} type="button">Update</button>
//                 :
//                 <button onClick={( )=> this.edit_todo(i)} type="button">Edit</button>
//               }
//               <button onClick={() => this.delete_todo(i)} type="button">Delete</button>
//             </li>
//           })}
//         </ul>
//       </div>
//     )
//   }
// }
//
//
//

import BlahRouter from './config/router'
import { connect } from 'react-redux'
class App extends Component{
  render(){
    console.log(this.props);
    return(
      <BlahRouter />
    )
  }
}

const mapStateToProps = (state) => ({
  name: state.name,
  
})




export default connect(mapStateToProps, null) (App);

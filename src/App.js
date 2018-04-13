import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class LikeButton extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
    // alert()
    this.setState(
      (prevState) => ({
        counter:prevState.counter+1
      })
    )  
}
render(){
  return (
    <span type="button" onClick={this.handleClick}>{this.state.counter} <i className="fa fa-thumbs-o-up"></i></span>
    // <button onClick={this.handleClick}>like</button>
  )
}

}

class App extends Component {
  constructor(props){
    super(props);
        this.state = {
          todos:[],
          title:'Share Your Information Here',
          counter:0,
          index:'',
          act:0,
        };
        this.addTodo = this.addTodo.bind(this);
        this.removeQuote = this.removeQuote.bind(this);
  }
 
  addTodo(e){
    e.preventDefault();
    let author = this.refs.author.value;
    let quote = this.refs.quote.value;
    let counter = this.state.counter;
    
    /*if(this.state.act === 0){
        let todo={
          author,quote
        }
       
    }
    else{
      let index = this.state.index;
      todos[index].author = author;
      todos[index].quote = quote;
    }*/

    let todo = {
      author,quote,counter
    };

    counter++;

    let todos = this.state.todos;

    todos.push(todo);

    this.setState({
      todos: todos,
      counter:counter,
      act:0
    });

    this.refs.todoForm.reset();
  }


  removeQuote(index){
    // console.log(index);
    // console.log(this.state);
    let newTodos = this.state.todos;
    
    newTodos.splice(index,1);
      this.setState({
        todos: newTodos
      });
  }

  /*edit(index){
    alert('jjdfjjkd');
    let todo = this.state.todos[index];
    this.refs.author.value = todo.author;
    this.refs.quote.value = todo.quote;

    this.setState({
      act:1,
      index:i
    });
    this.refs.focus.author.focus();
  }*/
  
  handleSubmit (e) {
    e.preventDefault();
    var Counter = React.createClass({
      incrementCount: function(){
        this.setState({
          count: this.state.count + 1
        });
      }, 
      getInitialState: function(){
         return {
           count: 0
         }
      },
      render: function(){
        return (
          <div className="counter">
            <h1>{this.state.count}</h1>
            <button className="btn" onClick={this.incrementCount}>Increment</button>
          </div>
        );
      }
    });
  }
 


  render() {
    let title = this.state.title;
    let todos = this.state.todos;
    return (
      <div >
      
        <form ref = "todoForm" className="App" onSubmit={this.handleSubmit}>
        <h1>{title}</h1>
        <label>Author  </label>
          <input type = "text" ref = "author" placeholder = "Enter Author Name"/>
        <br/><br/>

        <label>Quote </label>
          <textarea ref = "quote" placeholder = "Enter quote"/>
        <br/><br/>

          <button className="addBtn" onClick = {this.addTodo}>Add</button>
        </form>

          <div className="outer">
            {this.state.todos.map((todo,index)=>{
              return (
                <div className="list_wrap" key={todo.counter}><div className="myListdata">"Quote:{todo.quote} !"</div> 
                <div className="authorsign"> Author:{todo.author}</div>
                <div className="myBtnrmv">
                  <button className="remove_btn" onClick = {()=>this.removeQuote(index)}>Remove</button>
                  <LikeButton />
                </div>
                </div>
              )
            })}
            <div>
            </div>
          </div>
      </div>
    );
  }
}

export default App;

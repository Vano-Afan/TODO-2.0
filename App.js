import React from 'react';
import logo from './logo.svg';
import './App.css';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {task: ''};
  }
  
  updateText = (e => {
    this.setState({task: e.target.value});
  });
  
  submitForm = (e => {
    e.preventDefault();
    let item = e.target[0].value;
    
    if (!item) {
    
    } else {
     this.props.submitAction(item);
     this.setState({task: ''}); 
    }
  });
  
  render() {
    return (
      <form
        onSubmit={this.submitForm}
        className="todo-form">
        <input
          type="text"
          placeholder="Добавить элемент"
          onChange={this.updateText}
          value={this.state.task} />
        <input type="submit" />
      </form>
    );
  }
}

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
       
      ]
    };
  }
  
  addItem = (item => {
    let newItems = this.state.items;
    newItems.push(item);
    this.setState({items: newItems});
  });
  
  deleteItem = (idx => {
    let newItems = this.state.items;
    newItems.splice(idx, 1);
    this.setState({items: newItems});
   
  });
  
  render() {
    return (
      <div className="todo-list">
        <TodoForm submitAction={this.addItem} />
        <ItemsList
          items={this.state.items}
          clickAction={this.deleteItem} />
      </div>
    );
  }
}

class ItemsList extends React.Component {
  render() {
    let listItems = this.props.items.map((item, i) => {
      return (
        <li key={i}>
          <div className="text">{item}</div>
          <div
            onClick={this.props.clickAction.bind(this, i)}
            className="delete fa fa-trash"></div>
        </li>
        
      );
    });
    return <ul>{listItems}</ul>
  }
}

class App extends React.Component {
  render() {
    return (
      <div className="row">
        <TodoList />
      </div>
    );
  }
}

export default App;

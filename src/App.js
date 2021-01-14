import { Component } from 'react';
import TodoItem from './component/TodoItem';

class App extends Component {
  constructor(){
    super();
    this.TodoItem=[
      'aaaaaa',
      'bbbbbbb',
      'cccccc'
    ];
  }
  render() {
    return(
      <div className='App'>
        {
          this.TodoItem.map((item,index) => <TodoItem key={index} title={item}/>)
        }
      </div>
    )
  }
}

export default App;
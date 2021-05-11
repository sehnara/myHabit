import React, { Component } from 'react';
import './app.css';
import Habit from './components/habit';
import Habits from './components/habits';

class App extends Component {  
  state={
    habits:[
      {id : 1, name:'Reading', count : '7'},
      {id : 2, name:'Running', count : '3'},
      {id : 3, name:'Sleeping', count : '2'}
    ]
  }

  handleIncrease = (habit) =>{
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    habits[index].count++;
    this.setState({habits});
  }

  handleDecrease = (habit) =>{
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    habits[index].count = habits[index].count-1 <0 ? 0 : habits[index].count-1;
    this.setState({habits});
  }

  handleDelete = (habit) =>{
     const habits = [...this.state.habits];
     const id = habit.id;
     const newHabits = habits.filter((h)=>{
       return h.id !== id;
     });
    //  console.log(newHabits);
     this.setState({habits:newHabits});
  }
  render(){
    return (
      <Habits        
        habits = {this.state.habits}  
        onIncrease = {this.handleIncrease}
        onDecrease = {this.handleDecrease}
        onDelete = {this.handleDelete}
      />
    );
  };
  
}

export default App;

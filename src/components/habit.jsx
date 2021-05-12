import React, { PureComponent } from 'react';

class Habit extends PureComponent {  

    componentDidMount(){ // UI 상에 등록이 될 때, ex) 로딩 스피너 같은 거 할 때
        console.log(`habit : ${this.props.habit.name} muonted!!`);
    }
    componentWillUnmount(){ // 지우기 전에 발동
        console.log(`habit : ${this.props.habit.name} will be unmuonted!!`);
    }

    

    handleIncrease = () =>{
        this.props.onIncrease(this.props.habit);
    }
    
    handleDecrease = () =>{
        this.props.onDecrease(this.props.habit);
    }

    handleDelete = () =>{
        this.props.onDelete(this.props.habit);
    }


    render() {
        
        const {name, count} = this.props.habit;        
        console.log({name});

        return (
            <li className='habit'>
                <span className="habit-name">{name}</span>
                <span className="habit-count">{count}</span>
                <button className="habit-button habit-increase" onClick={this.handleIncrease}><i className="fas fa-plus-square"></i></button>
                <button className="habit-button habit-decrease" onClick={this.handleDecrease}><i className="fas fa-minus-square"></i></button>
                <button className="habit-button habit-delete" onClick={this.handleDelete}><i className="fas fa-trash"></i></button>
            </li>
        );  
    }
}

export default Habit;
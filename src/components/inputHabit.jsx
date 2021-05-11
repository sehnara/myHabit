import React, { Component } from 'react';

class InputHabit extends Component {
    inputRef = React.createRef();                                               // 1. inputRef 선언

    onSubmit=event=>{
        event.preventDefault();

        const name = this.inputRef.current.value;        
        this.props.onAdd(name);
        this.inputRef.current.value ='';
    }
    
    render() {
        return (
            <div>
                <form className="habit-form" onSubmit={this.onSubmit}>
                    <input 
                        ref={this.inputRef}                                     // 2. input value 받아올 때, inputRef
                        className="habit-input" 
                        type="text" 
                        placeholder="what is your plan?"
                    />
                    <button className="add-button" onClick={this.onSubmit}>Add</button>
                </form>
            </div>
        );
    }
}

export default InputHabit;
// import React, { PureComponent } from 'react';

import React from 'react';
import { memo } from 'react';

// function component

// 1. const 붙여주기
// 2. this 날려주기
// 3. memo를 통해서 render를 최소화 할 수 있다.(==pureComponent)

const InputHabit = memo(props => { 
    const formRef = React.createRef();
    const inputRef = React.createRef();                                               // 1. inputRef 선언

    const onSubmit = event =>{
        event.preventDefault();
        const name = inputRef.current.value;        
        name && props.onAdd(name);
        inputRef.current.value ='';
    }

    return (
        <div>
            <form className="habit-form" onSubmit={onSubmit}>
                <input 
                    ref={inputRef}                                     // 2. input value 받아올 때, inputRef
                    className="habit-input" 
                    type="text" 
                    placeholder="what is your plan?"
                />
                <button className="add-button" onClick={onSubmit}>Add</button>
            </form>
        </div>
    );
  }
);
export default InputHabit;


// class component

// class InputHabit extends PureComponent {
//     inputRef = React.createRef();                                               // 1. inputRef 선언

//     onSubmit=event=>{
//         event.preventDefault();

//         const name = this.inputRef.current.value;        
//         this.props.onAdd(name);
//         this.inputRef.current.value ='';
//     }
    
//     render() {
//         return (
//             <div>
//                 <form className="habit-form" onSubmit={this.onSubmit}>
//                     <input 
//                         ref={this.inputRef}                                     // 2. input value 받아올 때, inputRef
//                         className="habit-input" 
//                         type="text" 
//                         placeholder="what is your plan?"
//                     />
//                     <button className="add-button" onClick={this.onSubmit}>Add</button>
//                 </form>
//             </div>
//         );
//     }
// }

// export default InputHabit;
import React, { Component, useState } from 'react';
import { useEffect } from 'react';
import { useCallback } from 'react';
import { useRef } from 'react';

// import React from 'react';

const Simplehabit = (props) => {
    const [count, setCount] = useState(0); //count를 업데이트하는 setCount // useState(초기값) 
    const spanRef = useRef();              // 전체가 function이라서 함수가 반복될 때, reset이 된다. ref의 경우도 마찬가지. 따라서 useRef()를 써서 react가 기억하게 한다.

    const handleIncrease = useCallback(()=>{// 반복해서 써도, 계쏙 새로 만들지 않고, 동일한 callback함수를 쓴다.
        setCount(count+1);
    });

    useEffect(()=>{ // mount 될 때와 update될 때마다 호출된다.(useEffect)
        console.log(`mounted & unmounted : ${count}`)
    }, [count]); // 2번째 인자를 안주면 전체 function이 호출될 때마다 호출, 2번째 인자를 []로 주면 mount에만 호출, 2번째 인자자를 주면 count가 변경할 때만 호출, 2

    return (
        <div className="habit">
            <span ref={spanRef} className='habit-name'>Reading</span>
            <span className='habit-count'>{count}</span>
            <button className="habit-button habit-increase" onClick={handleIncrease}>
                <i className="fas fa-plus-square"></i>
            </button>
        </div>
    );
};

export default Simplehabit;




// class Simplehabit extends Component {
//     state={
//         count : 0
//     }
//     handleIncrease=()=>{
//         this.setState({count:this.state.count+1});
//     }
//     render() {
//         return (
//             <div className="habit">
//                 <span className='habit-name'>Reading</span>
//                 <span className='habit-count'>{this.state.count}</span>
//                 <button className="habit-button habit-increase" onClick={this.handleIncrease}><i className="fas fa-plus-square"></i></button>
//             </div>
//         );
//     }
// }

// export default Simplehabit;
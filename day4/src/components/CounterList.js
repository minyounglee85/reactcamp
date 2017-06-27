/*
이제 여러 카운터들을 렌더링해줄 CounterList 컴포넌트를 만들어보겠습니다. 
이 컴포넌트는 카운터 객체들의 배열 counters 와, 카운터를 조작하는 onIncrement, onDecrement, onSetColor 함수를 props로 전달받습니다.
counters를 Counter 컴포넌트 배열로 로 변환하는 과정에선, key 를 배열의 index 로 설정하고, index 값도 컴포넌트에 props로 전달을 해줍니다. 
그리고, color 값과 number 값을 각각 설정하는 대신에, {...counter} 으로 객체를 풀어서 한꺼번에 전달해줄수도 있습니다.
*/
import React from 'react';
import Counter from './Counter';
import PropTypes from 'prop-types';
import { List } from 'immutable';

import './CounterList.css';

const CounterList = ({counters, onIncrement, onDecrement, onSetColor}) => {

    const counterList = counters.map(
        (counter, i) => (
            <Counter 
                key={i}
                index={i}
                {...counter.toJS()}
                onIncrement={onIncrement}
                onDecrement={onDecrement}
                onSetColor={onSetColor}
            />
        )
    );

    return (
        <div className="CounterList">
            {counterList}
        </div>
    );
};

CounterList.propTypes = {
    counters: PropTypes.instanceOf(List),
    onIncrement: PropTypes.func,
    onDecrement: PropTypes.func,
    onSetColor: PropTypes.func
};

CounterList.defaultProps = {
    counters: [],
    onIncrement: () => console.warn('onIncrement not defined'),
    onDecrement: () => console.warn('onDecrement not defined'),
    onSetColor: () => console.warn('onSetColor not defined')
}

export default CounterList;
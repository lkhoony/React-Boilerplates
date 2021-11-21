import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {decrement, increment} from "../actions/counterAction";
import {Counter} from "../presentational";

const counterContainer = (props) => {

    // mapDispatchToProps 인자 전달 할 경우
    const {number, increment, decrement} = props;

    // 그렇지 않을 경우 : dispatch를 전달받게 됨됨
    // const {number, dispatch} = props;

    return(
        <>
            {/*<Counter */}
            {/*    number={number} */}
            {/*    increment={()=>dispatch({type : 'INCREMENT'})} */}
            {/*    decrement={()=>dispatch({type : 'DECREMENT'})}>*/}
            {/*</Counter>*/}

            <Counter
                number={number}
                increment={increment}
                decrement={decrement}>
            </Counter>
        </>
    )
}
/**
 *
 * store의 데이터를 connect로 연결될 컴포넌트에 전달하기 위한 mapStateToProps
 *
 * @return : Plain Object (객체 리턴)
 */
const mapStateToProps = state => ({
    number : state.counter.number
});

/**
 *
 * @param dispatch
 * @return {{decrement: (function(): *), increment: (function(): *)}}
 *
 * dispatch
 * increment()는 { type : 'INCREMENT' }를 리턴하는 액션 생성
 * dispatch가 store의 reducer에게 type을 넘겨주고 reducer는 type을 확인해서 그에 맞는 동작을 수행하는 것
 *
 * dispatch를 props로 전달받게 되는데, dispatch({type : 'something'})을 실행하기 위해 아래와 같이 수행
 */

// const mapDispatchToProps = dispatch => ({
//     increment : () => dispatch(increment()),
//     decrement : () => dispatch(decrement())
// })

// bindActionCreators를 사용해서 액션 생성 함수를 한번에 전달할 수 있음
const mapDispatchToProps = dispatch => (
    bindActionCreators({increment, decrement}, dispatch)
);
/**
 * connect 함수에 전달하는 인자
 *
 * connect(mapStateToProps, mapDispatchToProps, mergeProps, _ref2)
 *
 * connect에 mapDispatchToProps 인자를 전달하지 않으면 default로 dispatch 함수를 props로 받게 됨
 */
export default connect(mapStateToProps,mapDispatchToProps)(counterContainer);
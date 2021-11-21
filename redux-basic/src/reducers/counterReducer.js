/**
 * 초기상태 정의
 */
import {DECREMENT, INCREMENT} from "../actions/counterAction";

const initialState = {
    number : 0
};

/**
 * reducer 작성
 *
 * 리듀서 함수의 경우 꼭 export default를 해줘야 함, 나중에 스토어를 만들 때, 이 함수를 필요로 함
 */

// export default로 export하면 중괄호를 사용하지 않고도 import를 할 수 있음
export default function counter(state=initialState, action){
    switch (action.type){
        case INCREMENT :
            return {
                ...state,
                number : state.number+1
            }
        case DECREMENT :
            return {
                ...state,
                number: state.number-1
            }
        default :
            return {
                ...state
            }
    }
}
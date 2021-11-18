import {combineReducers} from 'redux';
import counter from "./counterReducer";

// 다른 리듀서를 만들게되면 여기에 넣어줌
export default combineReducers({
   counter
});

/**
 * {
 *     counter : {
 *         number : 0
 *     }
 * }
 *
 * 다른 리듀서에서 사용하는 초기값
 */
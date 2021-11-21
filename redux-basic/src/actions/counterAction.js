// 액션 타입 정의
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

// 액션 생성함수 정의
export const increment = () => {
    return {
        type : INCREMENT
    }
}

export const decrement = () => {
    return {
        type : DECREMENT
    }
}

/**
 * - export를 사용하면 import 하는 곳에서 중괄호를 사용해서 불러올 수 있음
 *
 * - export default로 내보냈을 경우, import할 때 개발자가 원하는 이름을 지정해줄 수 있음
 */

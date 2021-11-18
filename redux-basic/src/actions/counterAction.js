// 액션 타입 정의
export const INCREMENT = 'COUNTER';
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


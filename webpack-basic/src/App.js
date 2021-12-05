import React from 'react'
import style from './style.css';
import { hot } from 'react-hot-loader/root'

const App = () =>{
    return(
        <div className={style.title}>hello, webpack!</div>
    )
}
export default hot(App);
import React from 'react'
import style from './scssStyle.scss';
import { hot } from 'react-hot-loader'

const App = () =>{
    return(
        <>
            <div className={style.title}>hello, webpack!</div>
            <div className={style.contentTitle}>content title</div>
            <div className={style.contentBody}>content body</div>
        </>

    )
}
export default hot(module)(App);
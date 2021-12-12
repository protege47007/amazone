import React, {useState} from 'react'
import Cate from './aside/Cate'
import Help from './aside/Help'
import LogOut from './aside/LogOut'
import Sell from './aside/Sell'

function Aside() {
    const [state, setState] = useState({
        name: '',
        value: false
    });
    return (
        <div className="aside-cont">
            <label 
            className="menu"
            htmlFor="aside" 
            onClick={()=> state.value? setState({name: 'aside-display', value: false}):setState({name: '', value: true})}
            >
                {"{[]}"}
            </label>

        <aside id="aside" className={state.name}>
            <Cate/>
            <Sell/>
            <Help/>
            <LogOut/>
        </aside>
        </div>
    )
}

export default Aside

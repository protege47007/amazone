import React from 'react'
import Aside from './Aside';
import Body from './Body';
import Header from './Header';

function Desktop() {
    return (
        <div className="desktop">
            <Header/>
            <Aside/>
            <Body/>
        </div>
    )
}

export default Desktop

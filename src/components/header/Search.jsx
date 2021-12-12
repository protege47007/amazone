import React from 'react'
import Button from '../compnent/Button'
import Input from '../compnent/Input'
import Select from './Select';
import {categories} from '../body/resource';


function Search() {
    return (
        <>
        <form action="https://google.com/" method="get">
            <Input/>
            <Select/>
            <Button type="submit" styleName="search-btn" name="S"/>
        </form>
        <div className="select-alt">
        {categories.map((e, i) => (
         <p value={e.name} key={i}>
            {e.name}
        </p>))}
    </div>
        </>
    )
}

export default Search

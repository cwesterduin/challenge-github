import React from 'react'

function Item({ title }){
    return(
        <li>{title}</li>
    )
}

function Result({result}){
    const resultList = result.map(item => <Item title={item.name}/>)
    return(
        <ul>{resultList}</ul>
    )
}

export default Result

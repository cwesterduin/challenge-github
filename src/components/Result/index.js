import React from 'react'

function Item({ title }){
    console.log(title)
    return(
        <div className="repo-container">
        <li>{title.name}</li>
        </div>
    )
}

function Result({result}){
    const resultList = result.map(item => <Item title={item}/>)
    return(
        <ul>{resultList}</ul>
    )
}

export default Result

import React from 'react'

function Item({ repo }){
 
    return(
        <div className="repo-container">
        <h3>{repo.name}</h3>
        <p>Forks: {repo.forks}</p>
        <p>Stargazers: {repo.stargazers_count}</p>
        </div>
    )
}

function Result({result}){
    const resultList = result.map(item => <Item repo={item}/>)
    return(
        <ul>{resultList}</ul>
    )
}

export default Result

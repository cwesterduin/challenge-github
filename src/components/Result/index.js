import React from 'react'
import { Link } from 'react-router-dom'
import { selectRepo } from '../../actions'
import { useDispatch } from 'react-redux'

function Item({ repo }){
    const dispatch = useDispatch()
    
    function handleClick(repo){
        console.log(repo)
        dispatch(selectRepo(repo))
    }

    return(
        <div className="repo-container">
        <h3>{repo.name}</h3><Link onClick={() => handleClick(repo.name)} to={'/info'}>more info...</Link>
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

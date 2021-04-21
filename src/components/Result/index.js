import React from 'react'
import { Link } from 'react-router-dom'
import { selectRepo } from '../../actions'
import { useDispatch } from 'react-redux'
import { GoGitBranch, GoTelescope, GoIssueOpened } from "react-icons/go";




function Item({ repo }) {
    const dispatch = useDispatch()

    function handleClick(repo) {
        console.log(repo)
        dispatch(selectRepo(repo))
    }

    return (
        <div className="repo-container">
            <h3>{repo.name}</h3><Link onClick={() => handleClick(repo.name)} to={'/info'}>see collaborators...</Link>
            <div className="git-icons-container">
                <p><GoGitBranch /> {repo.forks}</p>
                <p><GoTelescope /> {repo.stargazers_count}</p>
                <p><GoIssueOpened /> {repo.open_issues}</p>
            </div>
        </div>
    )
}

function Result({ result }) {
    const resultList = result.map(item => <Item repo={item} />)
    return (
        <ul className="result-container">{resultList}</ul>
    )
}

export default Result

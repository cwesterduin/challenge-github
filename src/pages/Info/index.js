import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Avatar } from '../../components'

function Collabs({data}){
    return (
        data.map(item => <span><h3>{item.login}</h3><Avatar url={item.avatar_url}/></span>)
    )
}

function Info(){
    const repo = useSelector(state => state.repo);

    const [collabs, setCollabs] = useState([])

    const [isLoaded, setIsLoaded] = useState(false)
    const [error, setError] = useState(null)
  
    useEffect(() => {
    if (repo) {
    fetch(repo.contributors_url)
      .then(res => res.json())
      .then(
        (result) => {
            setCollabs(result);
            setIsLoaded(true);
          },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
    } else {}
    }, [])

    return (
        repo ? 
            <div>
                <h2>{repo.name}</h2>
                <small>by:</small>
                <div style={{display:'flex'}}>
                <Collabs data={collabs}/>
                </div>
            </div> 
            : 
            <div>404 repo not found</div>
    )
}

export default Info
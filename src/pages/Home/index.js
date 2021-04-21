import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SearchForm, Result, Toggle, Avatar } from '../../components';
import { getResult } from '../../actions';

function Home(){

    const result = useSelector(state => state.user.repos);
    const mode = useSelector(state => state.mode);

    const username = useSelector(state => state.user.name);
    const loading = useSelector(state => state.loading);
    const error = useSelector(state => state.error)

    const dispatch = useDispatch();
    
    const search = searchTerm => dispatch(getResult(searchTerm));

    const renderResult = () => loading ? <p>Loading . . .</p> : <Result result={result}/>
return (
        <>
        <div id="search">
            <SearchForm getResult={search}/>

        <div className="user-info">
            <h1>{username && `Stalking: ${username}`}</h1>
            {result.length > 0 ? <Avatar url={result[0].owner.avatar_url} /> : null }
        </div>
            { error ? <p role="alert">Oops there's been an error! {error}</p> : renderResult() }   
            
        </div>
        </>
    );

}

export default Home;
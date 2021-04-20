import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SearchForm, Result, Toggle } from './components';
import { getResult } from './actions';
import {Helmet} from "react-helmet";
import './style.css'
function Search(){

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
        <Toggle/>
        <p>toggle? {JSON.stringify(mode)}</p>
        <div id="search">
            <SearchForm getResult={search}/>

            <h1>{username && `Stalking: ${username}`}</h1>

            { error ? <p role="alert">Oops there's been an error! {error}</p> : renderResult() }   
            
        </div>
        </>
    );

}

export default Search;
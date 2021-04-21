var options = {
    headers: {
                "Authorization": "token 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"
             }
             };

export const setMode = mode => ({ type: 'SET_MODE', payload: mode})
export const toggleMode = () => ({ type: 'TOGGLE_MODE'})

const loading = username => ({ type: 'LOADING', payload: username });

const loadResult = (results) => ({ 
    type: 'LOAD_RESULT',
    payload: results
});

const getRepositories = async username => {
    try {
        const res = await fetch(`https://api.github.com/users/${username}/repos`, options)
        if (res.status === 404) { throw Error }
        const data = await res.json()
        return data
    } catch(err) {
        throw new Error('No user found!')
    }
}

export const getResult = searchTerm => {
    return async dispatch => {
        dispatch(loading(searchTerm));
        try {
            const result = await getRepositories(searchTerm);
            dispatch(loadResult({result, searchTerm}))
        } catch (err) {
            console.warn(err.message);
            dispatch({ type: 'SET_ERROR', payload: err.message })
        };
    };
};
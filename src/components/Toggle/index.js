import React, { useEffect, useState } from 'react'
import { toggleMode, setMode } from '../../actions'
import { useDispatch } from 'react-redux'
import { HelmetStyles } from '..'
import COLORS from './colors'
function Toggle(){
    
    const dispatch = useDispatch()
    const [trackToggle, setTrackToggle] = useState(true)

    function handleClick(){
        dispatch(toggleMode())
        setTrackToggle(i => !i)
    }
    
    useEffect(() => {
        dispatch(setMode(window.localStorage.getItem('color-mode') === 'dark' ? false : true))
    },[])

    return(
        <>
            <HelmetStyles COLORS={COLORS} trackToggle={trackToggle} />
            <button onClick={handleClick}>toggle</button>
        </>
    )
}

export default Toggle
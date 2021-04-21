import React from 'react'

function Avatar({url}) {
    return (
        <img src={url} className="user-avatar" alt="github-user-avatar"/>
    )
}

export default Avatar
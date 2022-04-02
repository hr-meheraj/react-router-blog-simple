import React from 'react'
import {Link} from 'react-router-dom'
function NotFound() {
    return (
        <div className='not-found'>
            <h1>404</h1>
            <h2> Not Avaialbe Page </h2>
            <h3><Link to='/'>Back to Home</Link></h3>
        </div>
    )
}

export default NotFound

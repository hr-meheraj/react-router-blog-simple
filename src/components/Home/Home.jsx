import React from 'react'
import { useNavigate } from 'react-router-dom';
import Spinner from '../Spinner/Spinner.jsx';
function Home() {
    const navigate = useNavigate();
    return (
        <div>
            <div className="header">
                <h2>Welcome to React Router. </h2>
                <button className='explore-btn' onClick={() => navigate('/blog')}> Explore &rarr;</button>
            </div>
        </div>
    )
}

export default Home

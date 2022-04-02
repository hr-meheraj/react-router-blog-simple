import React from 'react'
import {Link} from 'react-router-dom'

function BlogCard({data}) {
    const {imageUrl, title, admin, blog, _id} = data;
    return (
        <div className='card'>
            <h2>{title}</h2> 
            <p>{blog.slice(0,100)}....<Link to={"/blog/"+_id}>Read More</Link></p>
        </div>
    )
}

export default BlogCard

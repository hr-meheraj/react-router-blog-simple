import React from 'react'
import useFetch from '../../hooks/useFetch'
import Spinner from '../Spinner/Spinner';
import BlogCard from './BlogCard';

function Blog() {
    const [data,setData,loading] = useFetch('https://retro-tech-talks.herokuapp.com/blogs');
    return (
        <div className='blog-container'>
           {
               loading && <Spinner/>
           }
           {
               data.length > 1 &&  data.map(eachData => <BlogCard key={eachData._id} data={eachData}/>)
           }
        </div>
    )
}

export default Blog

import React,{useState} from 'react'
import {useParams} from 'react-router-dom'
import useFetch from '../../hooks/useFetch';
import NotFound from '../NotFound/NotFound';
import Spinner from '../Spinner/Spinner';
function BlogDetails() {
    const {blogId} = useParams();
    const [data, setData,loading] = useFetch(`https://retro-tech-talks.herokuapp.com/getBlog/${blogId}`);
    console.log(data);
    return (
        <div>
           {
               data  && loading ? <Spinner/> :
               <div className={data ? "show card-details" : "hide"}>
               <div className='img'>
               <img src={data.imageURL} alt='Image'/>
               </div>
                
                <h1>{data.title}</h1> 
                <p>{data.blog}</p>
                <i>Writer : Hr Meheraj</i> 
                </div>
           }
        </div>
    )
}

export default BlogDetails

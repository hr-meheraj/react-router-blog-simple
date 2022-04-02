import {useState,useEffect} from 'react'

 const useFetch = (url) => {
    const [data,setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [err, setErr] = useState(null);
    const getData = async (dataUrl) => {
        try{
            setLoading(true);
            const res = await fetch(dataUrl);
            const data = await res.json();
            setData(data);
        }catch(err){
            setErr(err.message);
        }finally{
            setLoading(false);
        }
    }
    useEffect(() => {
        getData(url);
    },[]);

    return [data, setData, loading, err];
}

export default useFetch;
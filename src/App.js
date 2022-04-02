import './App.css';
import Home from './components/Home/Home';
import Nav from './components/Nav/Nav';
import { Route, Routes } from 'react-router-dom';
import Blog from './components/Blog/Blog';
import NotFound from './components/NotFound/NotFound';
import BlogDetails from './components/BlogDetails/BlogDetails';
import Login from './components/Login/Login';

function App() {
  return (
    <>
        <Nav/>
         <Routes> 
            <Route path='/' element={<Home/>}/>
            <Route path='/blog' element={<Blog/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/blog/:blogId' element={<BlogDetails/>} />
            <Route path='blog/*' element={<NotFound/>}/>
            <Route path='*'  element={<NotFound/>}></Route>
       </Routes> 
    </>
  );
}

export default App;

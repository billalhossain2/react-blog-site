// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import './Blogpage.css'
import Blog from '../Blog/Blog';
import BookMark from '../BookMark/BookMark';


const BlogPage = () => {
    const [blogs, setBlogs] = useState([]);
    const [bookedBlogs, setBookedBlogs] = useState([]);
    console.log('Running.............')
    useEffect ( () => {
        fetch('../../../fakeData/blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])
    // console.log(blogs)

    // const readTimeHadler = () => {

    // }
   
    return (
        <div className='blog-page'>
            <div className="blogs-container">
                {
                    blogs.map(blog => <Blog
                    key={blog.id}
                    blog={blog}
                    bookedBlogs={bookedBlogs}
                    setBookedBlogs={setBookedBlogs}
                    ></Blog>  )
                }
            </div>
            
            <BookMark bookedBlogs={bookedBlogs} setBookedBlogs={setBookedBlogs}></BookMark>
        </div>
    );
};

export default BlogPage;
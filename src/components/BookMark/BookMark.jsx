// eslint-disable-next-line no-unused-vars
import React from 'react';
import './BookMark.css'
import BookedBlogItem from '../BookedBlogItem/BookedBlogItem';

const BookMark = ({bookedBlogs}) => {
    const totalReadTime = bookedBlogs.reduce((total, curr)=>total + curr.readTime, 0)
    return (
        <div className='side-container'>
            <div className="spent-time">
                <h3>Spent time on read : {totalReadTime} min</h3>
            </div>
            <div className="bookMark-container">
                <h3>Bookmarked Blogs : {bookedBlogs.length}</h3>
                {
                    bookedBlogs.map(bookedItem => <BookedBlogItem key={bookedItem.id} bookedItem={bookedItem}></BookedBlogItem>)
                }
            </div>
        </div>
    );
};

export default BookMark;
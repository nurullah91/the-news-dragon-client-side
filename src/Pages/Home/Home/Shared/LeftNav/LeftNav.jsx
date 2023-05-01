import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import SideCard from './SideCard';

const LeftNav = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://the-news-dragon-server-nurllah91.vercel.app/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.log(error))
    })


    return (
        <div>
            <h4>All Categories</h4>
            <div className='ps-4'>
                {
                    categories.map(category =>
                        <p key={category.id}><Link to={`/category/${category.id}`} className='text-secondary text-decoration-none'>{category.name}</Link></p>
                    )

                }
            </div>
            <SideCard></SideCard>
        </div>
    );
};

export default LeftNav;
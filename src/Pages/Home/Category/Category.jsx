import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';
import useTitle from '../../../useTitle';

const Category = () => {

    useTitle('Category')
    const {id} = useParams();
    const categoryNews = useLoaderData()
    return (
        <div>
          { id && <h2>This Category News: {categoryNews.length}</h2>}
            {
                categoryNews.map(news =><NewsCard key={news._id} 
                news ={news}
                ></NewsCard>)
            }
        </div>
    );
};

export default Category;
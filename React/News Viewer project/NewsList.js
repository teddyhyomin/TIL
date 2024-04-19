import { useState, useEffect } from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios';

const NewsListBlock = styled.div`
    box-sizing: border-box;
    padding-bottom: 3rem;
    width: 768px;
    margin: 0 auto;
    margin-top: 2rem;
    @media screen and (max-width: 768px) {
        width: 100%;
        padding-left: 1rem;
        padding-right: 1rem;
    }
`;

/*
const sampleArticle = {
    title: 'TITLE',
    description: 'ARTICLE',
    url: 'https://google.com',
    urlToImage: 'https://via.placeholder.com/160',
};
*/

const NewsList = ({ category }) => {
    /*
    return (
        <NewsListBlock>
            <NewsItem article={sampleArticle} />
            <NewsItem article={sampleArticle} />
            <NewsItem article={sampleArticle} />
            <NewsItem article={sampleArticle} />
            <NewsItem article={sampleArticle} />
            <NewsItem article={sampleArticle} />
        </NewsListBlock>
    );
    */
   const [articles, setArticles] = useState(null);
   const [loading, setLoading] = useState(false);

   useEffect(() => {
    const fetchData = async () => {
        setLoading(true);
        try {
            const query = category === 'all' ? '' : `&category=${category}`;
            const response = await axios.get(
                'https://newsapi.org/v2/top-headlines?country=ca${query}&apiKey=',
            );
            setArticles(response.data.articles);
        } catch (e) {
            console.log(e);
        }
        setLoading(false);
        };
        fetchData();
    }, []);

    if(loading) {
        return <NewsListBlock> WAITING.... </NewsListBlock>;
    }

    if (!articles) {
        return null;
    }

    return(
        <NewsListBlock>
            {articles.map(article => (
                <NewsItem key={article.url} article={article} />
            ))}
        </NewsListBlock>
    );
};

export default NewsList;
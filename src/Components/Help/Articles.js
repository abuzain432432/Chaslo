/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { Typography } from 'antd'
import { Input } from 'antd';
import { CiSearch } from 'react-icons/ci'
import styles from './Articles.module.scss'
import ArticleList from './ArticlesList';
const { Title } = Typography;
const highLightsText = (articleData, highLightedText) => {
    const realOutput = articleData.map(article => {
        const output = { title: '', des: '' }
        for (const i of Object.entries(article)) {
            if (i[0] === 'title') {
                output.title = i[1].replaceAll(highLightedText, `<span>${highLightedText}</span>`)
            }
            if (i[0] === 'des') {
                output.des = i[1].replaceAll(highLightedText, `<span>${highLightedText}</span>`)
            }
        }
        return output;
    })
    return realOutput;
}
const filterArticles = (articles, text) => {
    if (text.trim() !== '') {
        const data = articles.filter((article) => {
            return Object.values(article).some(values => values.includes(text))
        })
        const response = highLightsText(data, text)
        return response;
    }
    return articles
}
export default function Article(props) {
    const { articles } = props;
    const [searchedArticle, setSearchedArticle] = useState('');
    const [art, setArt] = useState(articles);
    useEffect(() => {
        setArt(filterArticles(articles, searchedArticle))
    }, [searchedArticle])
    return (
        <div className={styles['articles']}>
            <Title level={2}>How Can We Help?</Title>
            <Input onChange={(e) => setSearchedArticle(e.target.value)} prefix={<CiSearch />} placeholder="Search help articles..." />
            <div className='mt-3'>
                <Title level={3}>Popular articles</Title>
                <ArticleList articles={art} />
            </div>
        </div>
    )
}

import React from 'react'
import styles from './ArticleItem.module.scss'
export default function ArticleItem(props) {
    const { title, des } = props;
    return (
        <div className={`${styles['article-item']} mb-4`}>
            <div className={`${styles['title']} mb-2`} dangerouslySetInnerHTML={{ __html: title }}></div>
            <div dangerouslySetInnerHTML={{ __html: des }}></div>
        </div>
    )
}

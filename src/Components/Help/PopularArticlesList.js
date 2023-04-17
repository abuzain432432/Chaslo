import React from 'react'
import { Typography } from 'antd'
import { List } from 'antd';
import styles from './PopularArticleList.module.scss'
const { Title } = Typography;

export default function PopularArticlesList(props) {
    return (
        <div className={`${styles['popular-list']} align-self-center p-5 position-absolute top-50 end-0 translate-middle-y`}>
            <Title level={3} className='mb-3'> Popular articles</Title>
            <List renderItem={(data) =>
                (<div className={`${styles['list-item']} mt-1`} >{data}</div>)
            } dataSource={props.articles} />
        </div>
    )
}

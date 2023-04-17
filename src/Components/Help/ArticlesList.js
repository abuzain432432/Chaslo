import { List } from "antd";
import React from 'react'
import ArticleItem from "./ArticleItem";
export default function ArticleList(props) {
    const articles = props.articles;
    return (
        <List className="mt-4 " dataSource={articles} renderItem={(data) => <ArticleItem title={data.title} des={data.des} />} />
    )
}

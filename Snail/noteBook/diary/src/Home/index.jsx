import React from 'react';
import './style.css'
import { Card } from 'antd-mobile';
import {Link} from 'react-router-dom'
const list = [1, 2, 3, 4, 5, 6]

const Home = () => {
  return (
    <div className="diary-list">
      {
        list.map(item => <Link to={{pathname:'detail',search:`?id=${item}`}}>
            <Card className="diary-item" key={item}>
          <Card.Header
            title="明天跟小米一起吃饭"
            thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
            extra={<span>晴天</span>}
          />
          <Card.Body>
            <div>{item}</div>
          </Card.Body>
          <Card.Footer content="2021-01-09"/>
        </Card>
        </Link>)
      }
    </div>
  )
}

export default Home

import React from 'react';
import { NavBar, Icon, List } from 'antd-mobile';
import {getQueryString} from '../utils'
import {useHistory} from 'react-router-dom'
const Detail = () => {
    const id=getQueryString('id')
    const history =useHistory()
    return (
    <div className="diary-detail">
      <NavBar
        mode="light"
        icon={<Icon type="left" />}
        onLeftClick={() => history.goBack()}
      >
        明天跟小米一起吃饭{id}
      </NavBar>
      <List renderHeader={() => '2021-01-09'} className="my-list">
        <List.Item wrap>
          单个连续模块垂直排列，显示当前的内容、状态和可进行的操作。
          eg：联系人列表。当你需要一个 infinite scroll 列表时，请使用 ListView。
          一般由主要信息、主要操作、次要信息、次要操作组成。
          主要信息和主要操作放在列表的左边，次要信息和次要操作放在列表的右边
        </List.Item>
      </List>
    </div>
  )
}
export default Detail

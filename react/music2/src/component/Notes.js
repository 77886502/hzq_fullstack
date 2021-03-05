import { relativeTimeThreshold } from 'moment';
import React from 'react';
import { loadCollection, db } from '../database';
import Note from './Note';

export default class Notes extends React.Component {

  constructor(props) {
    super(props)

  }
  
  state = { // es6 class properties 新特性 
    entities: []
  }

  componentDidMount() {
    this.getInitialData();  // 去取数据吧 
  }

  getInitialData () {
    loadCollection('notes')   // 选择notes库中的notes 表 
      .then(collection => { // notes
        // collection.insert([
        //   { body: 'hello ~' },
        //   { body: 'hola ~'}
        // ]) // add   添加一些初始化数据
        // db.saveDatabase() 
        // 查询
        const entities = collection.chain() // API 不用去管 
          .find()  // 查找
          .simplesort('$loki', 'isdesc')
          .data()
        // console.log(entities);

        this.setState({
          entities
        })
      })
  }
  destroyEntity = (entity) => { //? 箭头函数 this
    const _entites = this.state.entities.filter((_entity) => {
      return _entity.$loki !== entity.$loki
    })
    this.setState({
      entities:_entites
    })
    loadCollection('notes')
      .then(collection => {
        collection.remove(entity)
        db.saveDatabase()
      }
      )
    
  }
  
  render() {
    const entities = this.state.entities // 
    // JS 区域
    const noteItems = entities.map(entity => <Note 
      key={entities.$loki}
      entity={entity}
      destroyEntity = {this.destroyEntity}
    />)
    return (
      <div className="ui container notes">
        <h4 className="ui horizontal divider header">
          <i className="paw icon"></i>
          YanJie Notes App _ React.js
        </h4>
        <button className="ui right floated basic violet button">
          添加笔记
        </button>
        <div className="ui divided items">
          { // 2  代码的可读性呢？ 
          // 我是一个维护者， 不是作者
          noteItems }
        </div>
      </div>
    )
  }
}
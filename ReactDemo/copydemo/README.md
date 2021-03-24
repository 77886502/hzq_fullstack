## 描写一个简单的页面
1. create-react-app copydemo 创建React项目 React项目不能大写，也不能和npm包重名
2. npm i redux 引入 redux
3. npm i --save antd

4. 在某个组件中引入antd组件，antd组件样式
```js
// 组件如 Input List Button
import {Input,List,Button} from 'antd';
import 'antd/dist/antd.csss';
```

5. 注意 `List` 中的 `renderItem`
```js
    <List
        borderd
        dataSource = {data}
        // 注意这里和箭头函数有区别，用的是 ()
        renderItem={item => (<Lisr.Item>{item}</List>)}
    />
```

## 借助Redux 创建一个仓库 store，每个组件都需要在中央仓库 store 进行数据交换
1. 在 `src` 文件下创建 `store`文件夹
2. 在`store`文件夹创建仓库index.js
```js
// 仓库
import {createStore} from 'redux';
import reducer from './reducer';
const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store 
```

3. 创建仓库管理员reducer.js
```js
// 初始仓库状态
const defaultState = {
    inputValue:'写点什么吧',
    list:['8:00 起床','8:30 吃饭','9:00 上班']
};
export default (state = defaultState,action) => {
    return state;
}
```

3. 每个组件进行数据修改都向 `store`提交需要`dispatch`方法,提交的数据状态叫 `action`
```js
setInputValue(e){
    const action = {
        type:'setInputValue',
        value: e.target.value
    }
    store.dispatch(action);
}
```

3. 任何功能函数都要通过`bind()`绑定`this`
```js
this.storeChange = this.storeChange.bind(this);
```
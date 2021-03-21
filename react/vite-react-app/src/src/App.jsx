import React, { useState } from 'react'
import { Provider } from 'react-redux';
import store from './store';
import Recommend from './pages/Recommend';
function App() {
  const [count, setCount] = useState(0)


  return (
    <Provider store={store}>
      <Recommend />
    </Provider>
  )
}

export default App




// useEffect(() => {
  //   // console.log('------------')
  //   getBannerRequest()
  //     .then(data => {
  //       // console.log(data)  然后收到中央数据管理  Store
  //       // 1. action -> dispatch(reducer) -> Store(state)
  //       // 2. 从Store取出来 -> components  用了  读的 写的
  //       // 3. connect({
  //       //    dispactch,
  //       //    state get
  //       //})(Component)
  //     })
  // }, [])  // componentDidMount  componentSouldUpdate
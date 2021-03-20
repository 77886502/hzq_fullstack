import React, { useState } from 'react'
import { Provider } from 'react-redux';
import store from './store';
import  Recommend from './pages/Recommend';

function App() {
  const [count, setCount] = useState(0)


  return (
    <Provider store={store}>
      <Recommend/>    
    </Provider>
  )
}

export default App

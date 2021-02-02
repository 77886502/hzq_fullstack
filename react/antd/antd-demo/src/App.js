import logo from './logo.svg';
import './App.css';
// 引入antd
import { Button } from 'antd';
import Login from './Login';
import Post from './Post'; //新的页面
function App() {
  return (
    <Post/>
    // <Login/>
    // <div className="button">
    //   <Button type="primary">Button</Button>
    // </div>
    
  );
}

export default App;
// import logo from './logo.svg';
// import './App.css';
import { connect } from 'react-redux';
import { setForm,setTo } from './store/actions'
import Header from './components/header/Header'
import Journey from './components/journey/Journey'
import { useCallback } from 'react';
const App=(props)=>{
  console.log(props);
  
  const { to,from,setTo,setForm } = props
  // useCallback不会更新
  const onBack = useCallback(()=>{//不加useCallback header 组件也会被刷新 因为传了onBack点击事件 是为了性能优化
    window.history.back()
    // console.log('hello');
  },[])
  return (
   <div>
     <div className="header_wrapper">
       {/* header tilte ，每个名字都不一样 增加通用性 */}
       <Header title="火车票" onBack={onBack}/>
       </div>     
       <form className="form">
          <Journey from={from} to = {to}/>
        </form>   
       </div>
  );
}

const mapStateToProps = (state)=>{
  return{
    from:state.from,
    to:state.to
  }
}

const mapDispatchToProps =(dispatch)=>{
  return{
    //对调 城市选择
    setForm(from){
      dispatch(setForm(from))
    },
    setTo(to){
      dispatch(setForm(to))
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);

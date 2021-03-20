import React,{useEffect} from 'react';
import { connect } from 'react-redux';
import { useEffect } from 'react';
function Recommend(props) {
    console.log(props,'--------')
  return (
    <div>Recommend</div>
  )
}
const mapStateToProps = (state)=> {
  return {
    bannerList: state.recommed.bannerList
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getBannerDataDispatch(){
        dispatch(actionTypes.getBannerList());
    }
  }
}
// 读取store 状态 dispatch action
export default connect(mapStateToProps, mapDispatchToProps)(Recommend);

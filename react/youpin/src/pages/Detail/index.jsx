import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import {getProductDetail} from '../../store/reducers/product/actions';
const Detail = (props) => {
  const { detail, getProductDetailDispatch } = props;
  console.log(detail, '-------------');
  useEffect(() => {
    getProductDetailDispatch(1);
  }, [])
  return (
    <>
    Detail
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    detail: state.product.detail
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getProductDetailDispatch(id) {
      dispatch(getProductDetail(id));
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Detail);
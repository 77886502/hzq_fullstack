import * as React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { addToCart,getGoods } from './redux/action';


const App = (props) => {
  const { goods,getGoodsDispatch,handleAddCartClick } = props;
  useEffect(() => {
    getGoodsDispatch()
  },[])
  return (
    
    <div>
      <h1>Shopping Card Example </h1>
      <hr />
      <div className="goods">
        <h2>goods</h2>
        <ul>
          {
            goods.map(good => (
              <li key={good.id}>
                <p>{good.name}-{good.price}</p>
                <button disabled={goods.inventore<=0} onClick={() =>handleAddCartClick(good)}>add to cart</button>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}
const mapStateToProps = (state) => ({
    goods: state.goods,
    shopCart:state.shopCart
})
const mapDispatchToProps = (dispatch) => ({
  handleAddCartClick(good){
    dispatch(addToCart(good))
  },
  getGoodsDispatch(){
    dispatch(getGoods);
  }
})
export default connect(mapStateToProps,mapDispatchToProps)(App);

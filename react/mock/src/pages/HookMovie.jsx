import React, { useEffect, useState } from 'react';
import Movies from '../data.js';
// react hooks 所有的组件都用函数 
// useState 代替类里设置状态
const HookMovie = () => {
  //movies  class this.state  setMovies this.setState 
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  // movies 在哪里？ 
  useEffect(() => {
    // 请求 
    setTimeout(()=>setMovies(Movies),3000)
  }, [])
  return (
    <div>
      HookMovie
      {loading? <div>Loading</div>:<div>{movies.length}</div>}
    </div>
  )
}

export default HookMovie;
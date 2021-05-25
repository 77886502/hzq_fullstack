    // 滚动条滚动到底， 没有这个事件 就让button可勾选
    const terms = document.querySelector('.terms-and-conditions');
    const watch = document.querySelector('.watch');
    const button = document.querySelector('.accept');
    // button.removeAttribute('disabled');
    //  给我们监听视窗的能力 某个元素是否在视窗中 Observer
    // 实例化了一个oberver 
    function obCallback(payload) {
      console.log(payload);
      // 进入了视窗
      console.log(payload[0].intersectionRatio)
      if (payload[0].intersectionRatio > 0) {
       console.log('---------')
        button.disabled = false; // 启动元素
        // button.removeAttribute('disabled');
        ob.unobserve(terms.lastElementChild)
      }
      // button.removeAttribute('disabled');
    }
    const ob = new IntersectionObserver(obCallback, {
      root: terms,
      // 什么时候触发回调函数  0 从视窗消失  1 进入视窗
      threshold: 0.5
    });
    ob.observe(terms.lastElementChild);
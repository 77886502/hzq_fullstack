# 百度面试题
- React 性能优化
    class组件 三种旧方式
    1. shouldCompentUpdate 
    2. React.PureComponet
    3. React.memo

    
    Hooks 16.8以后出现带来了新的方式
    function组件
    3. useEffect
    4. useMemo
    5. useCallback
    6. React.lazy

- 父子组件
    父组件 setState
    子组件，无辜地被更新

    区别 更新 渲染(render执行)

- React组件收到 state/props的影响，默认行为是state每次发生变化组件都 会重新渲染
render -> createElement -> vdom -
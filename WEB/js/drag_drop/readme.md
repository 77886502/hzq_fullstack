# 字节h5面试题之Drag and Drop
良好的用户体验，
1. 基础好，细节，能力增长梯度
2. 比较复杂的特效

## github 拖拽上传功能
1. 给要拖拽的元素，加个draggable, cursor:move;
2. 拖拽元素在上空的感觉
3. drag 有三个事件，
    JS在前端是基于事件的语言,Event机制 495
    on+495 DOM Event level
    - dragstart
    - drag
    - dragend

    drop 异步
    - dragenter 进入border
    - over border dashed
    - leave 离开

    drap + drop 良好用户真体验模拟的API 比较复杂
    draggable = true 属性
    dragstart drag dragend
    dragenter dragover dragleave + drop
    阻止默认行为,   event.preventDefault()
    oForm submit

    作业 拖回去 
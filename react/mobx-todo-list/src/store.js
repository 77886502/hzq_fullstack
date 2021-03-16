// Store.js
import { makeAutoObservable } from 'mobx';

class Apptore {
    constructor() {
        makeAutoObservable(this)
    }
    // state
    todos = [
        {id: 0, title: "todo标题", done: false},
        {id: 1, title: "已经完成todo的标题", done:false}
    ]
    changeFinished(id) {
        console.log(id)
        const list = this.todos.filter((item,index) => item.id == id)
        list[0].done = !list[0].done
    }
}

export default new Apptore()

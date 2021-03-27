// 栈
class Stack<T> {
    private arr:T [] = [];
    public push(item:T){
        this.arr.push(item)
    }
    public pop(){
        this.arr.pop()
    }
}
const stack = new Stack<string>();
stack.push('a');
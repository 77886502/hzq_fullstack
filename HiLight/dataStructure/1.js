function LinkList(){
    this.head = null;
    this.length = 0;
    // 生成一个结点
    Node = (data) =>
    {
        this.data = data;
        this.next = null;
    }
    // 1.向链表尾部添加元素
    this.append = (data) => {
        // 生成一个结点
        let node = new Node(data);

        // 判断是否添加的结点是否为第一个
        if(this.head == null)
            this.head = node;
        else{
            let traversal = this.head;
            // 到尾结点为止
            while(traversal.next){
                traversal = traversal.next;
            }
            traversal.next = node;
        }
        this.length++;
    }
    // 2.遍历链表元素
    this.print = () => {
        let traversal = this.head;
        // 到 null 为止
        while(traversal){
            console.log(traversal.data);
            traversal = traversal.next;
        }
    }
    // 3.判断链表是否为空
    this.isEmpty = () => {
        this.length == 0 ? true:false; 
    }   
    // 4.向链表任意位置插入一个元素
    this.insert = (data,index) => {

    }
    // 5.查询某个位置的链表元素
    this.findElement = (index) => {
        let traversal = this.head;
        // 从头结点出发到第 index 结点，需要移动 index-1 次
        index = index - 1;
        while(index)
        {
            traversal = traversal.next;
            index--;
        }
        return traversal.data;
    }
    // 6.链表长度
    this.getLength = () => {
        return this.length;
    }
    // 7.查询某个元素在链表中的位置
    this.search = (data) => {
        let traversal = this.head;
        let index = 1;
        while(traversal){
            if(traversal.data == data)
                return index;
            else
                index++;
                traversal = traversal.next;
        }
        // 找不到返回 -1
        return -1;
    }
    // 9.删除链表中某个位置的元素
    this.remove = (index) => {
        let traversal = this.head;
        // 要在删除元素前一个位置停住
        index = index - 2;
        while(index){
            traversal = traversal.next;
        }
        traversal.next = traversal.next.next;
    }   
    // 销毁链表 
    this.destroy = () => {
        let node = this.head;
        let to = node;
        while(node)
        {
            node = node.next;
            to = null;
            to = node;
        }
    }
}
let list = new LinkedList();
list.append(1);
list.append(2);
list.pri
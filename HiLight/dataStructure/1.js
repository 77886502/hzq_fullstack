function LinkList(){
    this.head = null;
    this.length = 0;
}
LinkList.prototype = {
    append:function (element){
        let rehead = this.head;
        let node = {element:element,head:this.head};
        if(this.head==null)
        {
            rehead = node;
        }
        else
        {
            while(rehead.next)
            {
                rehead = rehead.next;
            }
            rehead.next = node;
        }
        this.length++;
    }
}

let list = new LinkList();
list.append(1);
list.append(2);

class DoublyLinkedList {
    constructor(){
        this.head=null
        this.tail=null
    }

    //add a node at the end
    append(data){
        let node = new Node(data)
        if (!this.head) {
            this.head = node
            return this.head
        }
        let temp = this.head
        while(temp.next !== null){
            temp=temp.next
        }
        temp.next = node
        node.prev = temp
        this.tail = node
    }

    //add a node at the beginning
    prepend(data){
        let node = new Node(data)
        if (!this.head) {
            this.head = node
            return this.head
        }
        this.head.prev = node
        node.next = this.head
        this.head = node
    }
}


class Node{
    constructor(data){
        this.data=data
        this.next=null
        this.prev=null
    }
}


const list = new DoublyLinkedList()

list.append(3)
list.append(4)
list.prepend(2)

console.log(list.head);



class Node{
    constructor(data){
        this.data=data
        this.next=null
    }
}

class LinkedList{
    constructor(){
        this.head=null
    }
}


LinkedList.prototype.appendNode = function (data){
    let node = new Node(data)
    if (!this.head) {
        this.head=node
        return this.head
    }
    let temp = this.head
    while (temp.next !== null) {
        temp = temp.next
    }
    temp.next=node
}


LinkedList.prototype.convertArray = function(array){
    for (let i = 0; i < array.length; i++) {
        this.appendNode(array[i])
    }
}

LinkedList.prototype.deleteNodeByValue = function(value){
    let temp = this.head
    if (this.head.data == value) {
        this.head = null
    }
    while (temp !== null) {
        if (temp.next?.data === value) {
            temp.next = temp.next.next
        }
        temp = temp.next
    }
}

let list = new LinkedList()

let array = [1,2,3,4]

list.convertArray(array)

console.log(list.head)
list.deleteNodeByValue(3)
console.log(list.head)



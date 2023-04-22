
let  head = null

class Linkedlist{
    constructor(data){
        this.data=data
        this.next=null
    }
}

function addNode(data) {
    let new_node = new Linkedlist(data)
    if (head) {
        let temp = head
        while (temp.next !== null) {
            temp=temp.next
        }
        temp.next=new_node
    }else{
        head = new_node
    }
}

addNode(5)
addNode(6)
addNode(7)
addNode(8)
addNode(9)

function addFirst(data) {
    const new_node = new Linkedlist(data)
    if (head !== null) {
        new_node.next = head
        head = new_node
    } else {
        head = new_node
    }
}

addFirst(10)


temp = head
while (temp !== null) {
    console.log(temp.data)
    temp = temp.next
}


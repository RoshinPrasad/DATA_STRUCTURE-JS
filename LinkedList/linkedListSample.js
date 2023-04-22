var head; // head of the linked list.

/* Linked list node */
class Node {
    constructor(val) {
        this.data = val;
        this.next = null;
    }
}

/* Function to add a new node*/
function pushNode(new_data) {
    var new_node = new Node(new_data);
    new_node.next = head;
    head = new_node;
}



/*
 * This function prints contents of linked
 list starting from the given node
 */
function printNode() {
    var tnode = head;
    while (tnode != null) {
        console.log(tnode.data + "->");
        tnode = tnode.next;
    }
    console.log("NULL<br/>");
}

/*Finding the length of the list.*/
function getLen() {
    let length = 0;
    var temp = head;
    while (temp != null) {
        length += 1;
        temp = temp.next;
    }
    return length;
}

/*Printing the middle element of the list.*/
function printMiddle() {
    if (head != null) {
        let length = getLen();
        var temp = head;
        let middleLength = length / 2;
        while (parseInt(middleLength) != 0) {
            temp = temp.next;
            middleLength--;
        }
        console.log("The middle element is [" + temp.data + "]<br/><br/>");
    }
}


/*Printing the middle element in One Traversal */
function printMiddleEfficient() {
    if (head !== null) {
        fast_tail = head
        slow_tail = head
        while (fast_tail?.next != null) {
            mid = slow_tail
            slow_tail = slow_tail.next
            fast_tail = fast_tail.next.next
        }
        return slow_tail.data
    }
}



for (let i = 1; i < 5; i++) {
    console.log(i)
    pushNode(i);
}
console.log(head)

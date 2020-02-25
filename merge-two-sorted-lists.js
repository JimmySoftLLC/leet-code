// Merge Two Sorted Lists

// Merge two sorted linked lists and return it as a new list. The new list 
// should be made by splicing together the nodes of the first two lists.

// Example:

// Input: 1->2->4, 1->3->4
// Output: 1->1->2->3->4->4

//  Definition for singly-linked list.
//  function ListNode(val) {
//       this.val = val;
//       this.next = null;
//  
//  @param {ListNode} l1
//  @param {ListNode} l2
//  @return {ListNode}

// Below are the classes I used to build the list as defined above

class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        var newNode = new ListNode(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
}

let l1 = new SinglyLinkedList();

l1.push(1);
l1.push(2);
l1.push(4);

let l2 = new SinglyLinkedList();

l2.push(1);
l2.push(3);
l2.push(4);

// my solutions trying to get my head around this problem on 18% faster than others
// Time complexity O(n)
// Space complexity O(n)
var mergeTwoLists = function (l1, l2) {
    var list = new SinglyLinkedList()
    myL1Node = l1;
    myL2Node = l2;
    myValues = [];

    while (myL1Node) {
        myValues.push(myL1Node.val)
        myL1Node = myL1Node.next;
    }

    while (myL2Node) {
        myValues.push(myL2Node.val)
        myL2Node = myL2Node.next;
    }

    myValues.sort(function (a, b) { return a - b })

    for (let i = 0; i < myValues.length; i++) {
        list.push(myValues[i])
    }

    return list.head;
};

// this is another solution, not mine, it uses recursion, and spread operator, 50% faster than others
var mergeTwoLists2 = function (l1, l2) {
    if (!l1 && !l2)
        return null;
    if (!l1)
        return l2;
    if (!l2)
        return l1;
    return (!l2 || l1.val < l2.val) ?
        { ...l1, next: mergeTwoLists(l1.next, l2) } : { ...l2, next: mergeTwoLists(l1, l2.next) };
};

console.log(mergeTwoLists(l1.head, l2.head))
console.log(mergeTwoLists2(l1.head, l2.head))

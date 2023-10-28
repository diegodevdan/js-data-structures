 function LinkedList(head, tail){
    //Null because at the begging there are no nodes
    this.head = null;
    this.tail = null;
 }

 function Node(value, next, prev){
    this.value = value;
    this.next = next;
    this.prev = prev
 }

 // var LL = new LinkedList();
 // var userList = new LinkedList();
 // var todoList = new LinkedList();
 //
 // console.log(LL)

 // var node1 = new Node(100, 'node2', null)
 // console.log(node1)

 //Add to head
 LinkedList.prototype.addToHead = function (value){
    var newHead = new Node(value, this.head, null);
    if(this.head)
        this.head.prev = newHead;

    if(!this.head)
        this.tail = newHead

     this.head = newHead
 }

// var LL = new LinkedList();
// LL.addToHead(100)
// LL.addToHead(200)
// LL.addToHead(300)
// console.log(LL)

 //Add to tail
 LinkedList.prototype.addToTail = function (value){
    var newTail = new Node(value, null, this.tail);
    if(this.tail)
        this.tail.next = newTail;

    if(!this.tail)
        this.head = newTail;

    this.tail = newTail
 }

// var LL = new LinkedList();
// LL.addToTail(10)
// LL.addToTail(20)
// LL.addToTail(30)
//
//  LL.addToHead(100)
//  console.log(LL)

 //Remove  head
 LinkedList.prototype.removeHead = function (){
    if(!this.head) return null;
    this.head = this.head.next; //Could be possible that next be null
    var value = this.head.value;

    if(this.head) //update the next value
        this.head.prev = null
    else //to control when we will delete the last node
        this.tail = null

     return `new head: ${value}`
 }

//  var LL = new LinkedList();
// LL.addToHead(100)
// LL.addToHead(200)
//  LL.addToTail(300)
//  console.log(LL.removeHead())
//  console.log(LL)
//  console.log(LL)
//  LL.removeHead()
//  console.log(LL)

 // Removew Tail
 LinkedList.prototype.removeTail = function (){
    if(!this.tail) return null;
     this.tail = this.tail.prev;
     var value = this.tail.value;

     if(this.tail) //update the next value
         this.tail.next = null
     else //to control when we will delete the last node
         this.head = null

     return `new tail: ${value}`
 }

//  var LL = new LinkedList();
// LL.addToTail(100)
// LL.addToTail(200)
// LL.addToTail(400)
// LL.addToHead(300)
//  console.log(LL)
// console.log(LL.removeTail())
// console.log(LL.removeTail())
// console.log(LL.removeTail())
//  console.log(LL)

 //Search Method

 LinkedList.prototype.searchNode = function (value) {
    var currentNode = this.head;
    while(currentNode) {
        if(currentNode.value === value)
            return `Node founded: ${value}`
        currentNode = currentNode.next;
    }

    return 'There is not this value on the list'
 }

//  var LL = new LinkedList();
// LL.addToHead(300)
// LL.addToHead(200)
// LL.addToHead(100)
// console.log(LL.searchNode(100))

 LinkedList.prototype.indexOf = function (valueToFindIndex) {
    if(!this.head) return null;

    var currentNode = this.head;
    var arr = [];
    var index = 0;

    while (currentNode){
        console.log(currentNode.value)
        if(currentNode.value === valueToFindIndex){
            arr.push(index)
        }

        currentNode = currentNode.next;
        index +=1;
    }

    return `There is the indexes of ${valueToFindIndex}: ${arr}`
 }

 var LL = new LinkedList();
LL.addToHead(8)
LL.addToHead(3)
LL.addToHead(5)
LL.addToHead(3)
console.log(LL.indexOf(3))

 // Big O Notations

 // Insertion - O(1): Constant Time
 // // addToHead
 // // addToTail
 // // removeHead
 // // removeTail

 // Search - O(n): Linear Time
 // // searchNode
 // // indexOf

 // Benefits of Linked Lists
    // // Fast Insertion
    // // Fast Deletion
    // // Ordered
    // // Flexible Size
    // // Fast Access (with a cache)

// Drawbacks of Linked Lists
    // // Slow Lookup
    // // More Memory
    // // Not Cache Friendly

// When to use Linked Lists
    // // When you need fast insertion/deletion
    // // When you don't know how many items will be in the list
    // // When you don't need fast random access to elements
    // // When you want to be able to insert items in the middle of the list (array items must be contiguous)

// When NOT to use Linked Lists
    // // When you need fast random access to elements
    // // When you know how many items will be in the list
    // // When memory is tight (every node needs an additional pointer)

// Linked Lists in the Standard Library
    // // Java
    // // C++
    // // C#
    // // JavaScript
    // // Python
    // // Ruby
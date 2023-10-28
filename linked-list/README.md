# Linked List Documentation

A guide to the Linked List implementation in JavaScript.

## Table of Contents

- [Constructors](#constructors)
    - [LinkedList](#linkedlist)
    - [Node](#node)
- [Methods](#methods)
    - [addToHead](#addtohead)
    - [addToTail](#addtotail)
    - [removeHead](#removehead)
    - [removeTail](#removetail)
    - [searchNode](#searchnode)
    - [indexOf](#indexof)
- [Performance](#performance)
    - [Big O Notations](#big-o-notations)
- [Benefits](#benefits)
- [Drawbacks](#drawbacks)
- [Usage Recommendations](#usage-recommendations)

---

## Constructors

### `LinkedList`

Initializes a new Linked List.

```javascript
function LinkedList() {
    this.head = null;
    this.tail = null;
}
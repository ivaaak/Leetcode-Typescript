import { ListNode, createLinkedList, linkedListToArray } from "./data-structures-shared/ListNode";

function swapPairs(head: ListNode | null): ListNode | null {
    if (!head || !head.next) return head;

    const dummy = new ListNode(0);
    dummy.next = head;
    let prev = dummy;
    let current: ListNode | null = head;

    while (current && current.next) {
        let first = current;
        let second = current.next;

        prev.next = second;
        first.next = second.next;
        second.next = first;

        prev = first;
        current = first.next;
    }

    return dummy.next;
}

// Test examples
console.log(linkedListToArray(swapPairs(createLinkedList([1, 2, 3, 4])))); // [2,1,4,3]
console.log(linkedListToArray(swapPairs(createLinkedList([])))); // []
console.log(linkedListToArray(swapPairs(createLinkedList([1])))); // [1]
console.log(linkedListToArray(swapPairs(createLinkedList([1, 2, 3])))); // [2,1,3]
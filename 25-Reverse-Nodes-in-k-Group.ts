import { ListNode, createLinkedList, linkedListToArray } from "./data-structures-shared/ListNode";

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
    if (!head || k === 1) return head;

    const dummy = new ListNode(0);
    dummy.next = head;
    let prev = dummy;

    let length = 0;
    let curr: ListNode | null = head;
    while (curr) {
        length++;
        curr = curr.next;
    }

    curr = head;
    while (length >= k) {
        let first = curr;
        let tail = curr;

        let next: ListNode | null = null;
        for (let i = 0; i < k && curr; i++) {
            const temp = curr.next;
            curr.next = next;
            next = curr;
            curr = temp;
        }

        prev.next = next;
        tail!.next = curr;

        prev = tail!;
        length -= k;
    }

    return dummy.next;
}

// Test examples
console.log(linkedListToArray(reverseKGroup(createLinkedList([1, 2, 3, 4, 5]), 2))); // [2,1,4,3,5]
console.log(linkedListToArray(reverseKGroup(createLinkedList([1, 2, 3, 4, 5]), 3))); // [3,2,1,4,5]
console.log(linkedListToArray(reverseKGroup(createLinkedList([1]), 1))); // [1]
console.log(linkedListToArray(reverseKGroup(createLinkedList([]), 1))); // []
// singly-linked list
class ListNode {
    value: number
    next: ListNode | null

    constructor(value?: number, next?: ListNode | null) {
        this.value = (value === undefined ? 0 : value)
        this.next = (next === undefined ? null : next)
    }
}

function addTwoNumbers(node1: ListNode | null, node2: ListNode | null): ListNode | null {
    let dummyHead = new ListNode(0);
    let current = dummyHead;
    let carry = 0;

    while (node1 !== null || node2 !== null) {
        const firstValue = node1 ? node1.value : 0;
        const secondValue = node2 ? node2.value : 0;
        const sum = carry + firstValue + secondValue;
        carry = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10);
        current = current.next;

        if (node1) node1 = node1.next;
        if (node2) node2 = node2.next;
    }

    if (carry > 0) {
        current.next = new ListNode(carry);
    }

    return dummyHead.next;
}

// create linked list from array
function createLinkedList(arr: number[]): ListNode | null {
    if (arr.length === 0) return null;
    let head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}

// convert linked list to array
function linkedListToArray(head: ListNode | null): number[] {
    let result: number[] = [];
    let current = head;
    while (current !== null) {
        result.push(current.value);
        current = current.next;
    }
    return result;
}

// Test
console.log(linkedListToArray(addTwoNumbers(createLinkedList([2, 4, 3]), createLinkedList([5, 6, 4]))));
// Expected: [7,0,8]

console.log(linkedListToArray(addTwoNumbers(createLinkedList([0]), createLinkedList([0]))));
// Expected: [0]

console.log(linkedListToArray(addTwoNumbers(createLinkedList([9, 9, 9, 9, 9, 9, 9]), createLinkedList([9, 9, 9, 9]))));
// Expected: [8,9,9,9,0,0,0,1]
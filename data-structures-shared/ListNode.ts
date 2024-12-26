// singly-linked list
export class ListNode {
    value: number
    next: ListNode | null

    constructor(value?: number, next?: ListNode | null) {
        this.value = (value === undefined ? 0 : value)
        this.next = (next === undefined ? null : next)
    }
}

// helper functions:

// create linked list from array
export function createLinkedList(arr: number[]): ListNode | null {
    if (arr.length === 0) return null;
    let head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}

export function linkedListToArray(head: ListNode | null): number[] { // linked list to array (for testing)
    const result: number[] = [];
    let current = head;
    
    while (current !== null) {
        result.push(current.value);
        current = current.next;
    }
    
    return result;
}


export function arrayToList(arr: number[]): ListNode | null {
    if (!arr.length) return null;
    const dummy = new ListNode(0);
    let current = dummy;
    for (const val of arr) {
        current.next = new ListNode(val);
        current = current.next;
    }
    return dummy.next;
}
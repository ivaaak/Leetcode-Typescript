import { ListNode } from "./data-structures-shared/ListNode";

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    if (!list1) return list2; // edge cases
    if (!list2) return list1;
    
    const dummy = new ListNode(0); // result list
    let current = dummy;
    
    while (list1 && list2) { // compare and merge (while lists have nodes)
        if (list1.value <= list2.value) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }

    current.next = list1 || list2; // append remaining nodes // hint / took a while to figure out
    
    return dummy.next;
}

function createList(arr: number[]): ListNode | null {
    const dummy = new ListNode(0);
    let current = dummy;
    for (const val of arr) {
        current.next = new ListNode(val);
        current = current.next;
    }
    return dummy.next;
}

// Test
console.log(mergeTwoLists(createList([1,2,4]), createList([1,3,4])));
console.log(mergeTwoLists(createList([]), createList([])));
console.log(mergeTwoLists(createList([]), createList([0])));
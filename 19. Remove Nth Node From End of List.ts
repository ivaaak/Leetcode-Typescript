// 2 pointer solution influenced by hint
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    const dummy = new ListNode(0); // dummy node for edge cases (empty list)
    dummy.next = head;
    
    let fast: ListNode | null = dummy;
    let slow: ListNode | null = dummy;
    
    for (let i = 0; i <= n; i++) { // move fast pointer
        if (!fast) return head; // invalid n
        fast = fast.next;
    }
    
    while (fast !== null) { // move both until fast reaches end
        fast = fast.next;
        if (slow !== null) {
            slow = slow.next;
        }
    }
    
    if (slow !== null && slow.next !== null) { // remove nth node from end
        slow.next = slow.next.next;
    }
    
    return dummy.next;
}


// Test
function runTest(arr: number[], n: number) {
    const head = createLinkedList(arr);
    const result = removeNthFromEnd(head, n);
    console.log(linkedListToArray(result));
}

// Test cases
console.log(runTest([1,2,3,4,5], 2)); // Expected: [1,2,3,5]
console.log(runTest([1], 1)); // Expected: []
console.log(runTest([1,2], 1)); // Expected: [1]
console.log(runTest([1,2,3], 3)); // Expected: [2,3]
console.log(runTest([1,2,3,4,5], 1)); // Expected: [1,2,3,4]
console.log(runTest([1,2,3,4,5], 5)); // Expected: [2,3,4,5]
console.log(runTest([1,2], 2)); // Expected: [2]
console.log(runTest([1,2,3], 2)); // Expected: [1,3]
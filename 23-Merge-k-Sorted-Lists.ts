import { ListNode, arrayToList } from "./data-structures-shared/ListNode";

class MinHeap { // from hint
    private heap: [number, ListNode][] = [];

    push(val: number, node: ListNode): void {
        this.heap.push([val, node]);
        this.bubbleUp(this.heap.length - 1);
    }

    pop(): [number, ListNode] | undefined {
        if (this.heap.length === 0) return undefined;
        const result = this.heap[0];
        const last = this.heap.pop()!;
        if (this.heap.length > 0) {
            this.heap[0] = last;
            this.bubbleDown(0);
        }
        return result;
    }

    private bubbleUp(index: number): void {
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[parentIndex][0] <= this.heap[index][0]) break;
            [this.heap[parentIndex], this.heap[index]] =
                [this.heap[index], this.heap[parentIndex]];
            index = parentIndex;
        }
    }

    private bubbleDown(index: number): void {
        while (true) {
            let smallest = index;
            const leftChild = 2 * index + 1;
            const rightChild = 2 * index + 2;

            if (leftChild < this.heap.length &&
                this.heap[leftChild][0] < this.heap[smallest][0]) {
                smallest = leftChild;
            }
            if (rightChild < this.heap.length &&
                this.heap[rightChild][0] < this.heap[smallest][0]) {
                smallest = rightChild;
            }

            if (smallest === index) break;

            [this.heap[index], this.heap[smallest]] =
                [this.heap[smallest], this.heap[index]];
            index = smallest;
        }
    }

    isEmpty(): boolean {
        return this.heap.length === 0;
    }
}

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    if (!lists.length) return null;

    const minHeap = new MinHeap();

    // add first node from each list to heap
    for (const list of lists) {
        if (list) {
            minHeap.push(list.value, list);
        }
    }

    const dummy = new ListNode(0);
    let current = dummy;

    // go over nodes from the heap
    while (!minHeap.isEmpty()) {
        const [val, node] = minHeap.pop()!;
        current.next = new ListNode(val);
        current = current.next;

        if (node.next) {
            minHeap.push(node.next.value, node.next);
        }
    }

    return dummy.next;
}

// Test
const test1 = [
    arrayToList([1, 4, 5]),
    arrayToList([1, 3, 4]),
    arrayToList([2, 6])
];
console.log(mergeKLists(test1));
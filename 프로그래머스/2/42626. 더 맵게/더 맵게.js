class MinHeap {
    constructor() {
        this.heap = [];
    }

    getParentIndex(i) { return Math.floor((i - 1) / 2); }
    getLeftChildIndex(i) { return 2 * i + 1; }
    getRightChildIndex(i) { return 2 * i + 2; }

    swap(i1, i2) {
        [this.heap[i1], this.heap[i2]] = [this.heap[i2], this.heap[i1]];
    }

    push(value) {
        this.heap.push(value);
        this.heapifyUp();
    }

    heapifyUp() {
        let index = this.heap.length - 1;
        while (this.getParentIndex(index) >= 0 && this.heap[this.getParentIndex(index)] > this.heap[index]) {
            this.swap(this.getParentIndex(index), index);
            index = this.getParentIndex(index);
        }
    }

    pop() {
        if (this.heap.length === 1) return this.heap.pop();
        const root = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return root;
    }

    heapifyDown() {
        let index = 0;
        while (this.getLeftChildIndex(index) < this.heap.length) {
            let smallerChildIndex = this.getLeftChildIndex(index);
            if (this.getRightChildIndex(index) < this.heap.length && this.heap[this.getRightChildIndex(index)] < this.heap[smallerChildIndex]) {
                smallerChildIndex = this.getRightChildIndex(index);
            }
            if (this.heap[index] < this.heap[smallerChildIndex]) break;
            this.swap(index, smallerChildIndex);
            index = smallerChildIndex;
        }
    }
}

function solution(scoville, K) {
    const heap = new MinHeap();
    scoville.forEach((num) => heap.push(num)); // 스코빌 배열을 최소 힙으로 변환
    let count = 0;

    while (heap.heap[0] < K) {  // 가장 작은 값이 K보다 작은 동안 반복
        if (heap.heap.length < 2) {
            return -1;  // 섞을 수 없을 때
        }
        const first = heap.pop(); // 가장 맵지 않은 음식
        const second = heap.pop(); // 두 번째로 맵지 않은 음식

        const newScoville = first + (second * 2); // 새로운 음식의 스코빌 지수 계산
        heap.push(newScoville); // 힙에 새로운 음식 추가
        count++;
    }

    return count;
}
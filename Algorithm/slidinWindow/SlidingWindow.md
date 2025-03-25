> **⭐ 고정된 구간**에는 **슬라이딩 윈도우**를 사용하고 구간의 **길이가 변동**될 경우 **투 포인터** 사용!

## 슬라이딩 윈도우

**시간복잡도: O(n)** </br>
배열이나 리스트의 일정 범위를 유지하며 이동하면서 문제를 해결하는 방법 </br>
주로 연속된 부분 배열이나 부분 리스트에서 특정 조건을 만족하는 경우를 찾을 때 사용

### 기본 원리

- 초기 윈도우 설정
- 윈도우를 한 칸씩 이동하면서 상태를 업데이트
- 윈도우의 이동 과정에서 조건을 만족하는지 확인

### 문제 예시

연속하는 num의 합 중 가장 큰 수 구하기

```jsx
// 이중 for문은 O(n²) -> 비효율적
function maxSubarraySum(arr, num) {
  if (num > arr.length) {
    return null;
  }
  var max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i++) {
    temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}
```

```jsx
// slidin window(슬라이딩 윈도우) 사용
// 다음 연속하는 수의 합으로 넘어갈 때, 합의 배열 앞(원래 합의 첫번째)를 빼고 다음으로 올 수를 더함

function maxSubarraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;

  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(tempSum, maxSum);
  }

  return maxSum;
}

maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3);
```

---

[연습 문제]

- 슬라이딩 윈도우 </br>
  [BaekJoon - 21921. 블로그](https://www.acmicpc.net/problem/21921) </br>
  [javascript 코딩테스트 - 슬라이딩 윈도우](https://selfdevelopcampus.tistory.com/entry/javascript-%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8-%EC%8A%AC%EB%9D%BC%EC%9D%B4%EB%94%A9-%EC%9C%88%EB%8F%84%EC%9A%B0)
- 투 포인터 </br>
  [BaekJoon - 2003. 수들의 합 2](https://www.acmicpc.net/problem/2003)

package Deque;


import java.util.ArrayDeque;
import java.util.Deque;

class Solution862 {
    public int shortestSubarray(int[] A, int k) {

        int n = A.length, res = n + 1;
        long[] B = new long[n + 1];
        for (int i = 0; i < n; i++) B[i + 1] = B[i] + A[i];
        Deque<Integer> dq = new ArrayDeque<>();

        for (int i =   0; i < n + 1; i++) {

            while (!dq.isEmpty() && B[i] - B[dq.peekFirst()] >=  k)
                res = Math.min(res, i - dq.pollFirst());

            while (!dq.isEmpty() && B[dq.peekLast()] >= B[i])
                dq.pollLast();

            dq.offerLast(i);
        }
        return res <= n ? res : -1;

    }
}
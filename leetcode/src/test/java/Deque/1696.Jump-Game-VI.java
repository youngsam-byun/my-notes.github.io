
package Deque;

import java.util.ArrayDeque;
import java.util.Deque;

class Solution1696 {
    public int maxResult(int[] nums, int k) {


        int n = nums.length;
        int[] memo = new int[n];
        Deque<Integer> dq = new ArrayDeque<>();
        for (int i = 0; i < n; i++) {

            while (!dq.isEmpty() && dq.peekFirst() < i - k)
                dq.pollFirst();

            memo[i] = dq.isEmpty() ? nums[i] : memo[dq.peek()] + nums[i];

            while (!dq.isEmpty() && memo[dq.peekLast()] < memo[i])
                dq.pollLast();

            dq.offerLast(i);
        }

        return memo[n - 1];
    }
}

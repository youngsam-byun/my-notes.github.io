package Deque;

import java.util.ArrayDeque;
import java.util.Deque;

class Solution1425 {
    public int constrainedSubsetSum(int[] nums, int k) {

        int n=nums.length;

        Deque<Integer> dq = new ArrayDeque<>();

        int[] sum =  new int[n];
        int res = nums[0];

        for(int i = 0; i < n; i++) {

            sum[i] = nums[i];
            if(!dq.isEmpty()) {
                sum[i] += sum[dq.peekFirst()];
            }
            res = Math.max(res, sum[i]);

            while(!dq.isEmpty() && dq.peekFirst() < (i - k + 1)){
                dq.pollFirst();
            }

            while(!dq.isEmpty() && sum[dq.peekLast()] <= sum[i]) {
                dq.pollLast();
            }

            if(sum[i] > 0) {
                dq.offerLast(i);
            }
        }
        return res;
    }
}
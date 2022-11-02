---
layout: page 
grand_parent: Leetcode 
parent: dp 
nav_order: 2 
title: 213 House Robber II
---

[https://leetcode.com/problems/house-robber-ii/](https://leetcode.com/problems/house-robber-ii/)

###recursive

```java
class Solution {

    public int rob(int[] nums) {

        int n = nums.length;
        int res = Integer.MIN_VALUE;
        for (int i = 0; i < n; i++) {
            res = Math.max(res, nums[i]);
            res = Math.max(res, dp(nums, i, 0, new Integer[n]));
        }
        return res;

    }

    private int dp(int[] nums, int i, int j, Integer[] memo) {
        int n = nums.length;
        if (j >= n - 1) {
            return 0;
        }

        if (memo[j] != null) {
            return memo[j];
        }

        int profit = dp(nums, i, j + 1, memo);
        profit = Math.max(profit, dp(nums, i, j + 2, memo) + nums[(i + j) % n]);
        return memo[j] = profit;

    }
}
```

###iterative
```java
    class Solution {

    public int rob(int[] nums) {

        int n=nums.length;
        int res=Integer.MIN_VALUE;

        for(int i=0;i<n;i++){
            int[] memo=new int[n+1];
            res=Math.max(res,nums[i]);
            for(int j=0;i+j<i+n-1;j++){
                memo[j+1]=Math.max(memo[j],(j==0?0:memo[j-1])+nums[(i+j)%n]);
                res=Math.max(res,memo[j+1]);
            }
        }

        return res;
    }

}
```

{% include disqus.html %}

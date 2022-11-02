---
layout: page 
grand_parent: Leetcode 
parent: dp 
nav_order: 2 
title: 198 House Robber
---

[https://leetcode.com/problems/house-robber/](https://leetcode.com/problems/house-robber/)

###recursive

```java
class Solution {
    public int rob(int[] nums) {
        int n=nums.length;
        Integer[] memo=new Integer[n];
        return dp(nums,0,memo);
    }

    private int dp(int[] nums,int i,Integer[] memo){
        int n=nums.length;
        if(i>=n){
            return 0;
        }

        if(memo[i]!=null){
            return memo[i];
        }

        int res=dp(nums,i+1,memo);
        res=Math.max(res,dp(nums,i+2,memo)+nums[i]);

        return memo[i]=res;
    }
}
```

###iterative

```java
    public int rob(int[] nums) {
        int n=nums.length;
        int[] memo=new int[n+1];
        memo[1]=nums[0];

        int max=memo[1];
        for(int i=1;i<n;i++){
        int a=nums[i];
        memo[i+1]=Math.max(memo[i],memo[i-1]+a);
        max=Math.max(max,memo[i+1]);
        }

        return max;
}
```

{% include disqus.html %}

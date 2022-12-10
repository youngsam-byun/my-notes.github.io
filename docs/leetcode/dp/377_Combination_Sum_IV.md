---
layout: page 
grand_parent: Leetcode 
parent: dp 
nav_order: 2 
title: 377 Combination Sum IV
---

[https://leetcode.com/problems/combination-sum-iv/](https://leetcode.com/problems/combination-sum-iv/)

###recursive

```java
public int combinationSum4(int[] nums, int target) {
    return dp(nums,target,new Integer[target+1]);
}

private int dp(int[] nums,int target,Integer[] memo){

        if(target==0)
            return 1;

        if(memo[target]!=null)
            return memo[target];

        int res=0,n=nums.length;
        for(int j=0;j<n;j++){
            if(nums[j]<=target){
            res += dp(nums,target-nums[j],memo);
            }
        }
        return memo[target]=res;
}
```

###iterative

```java
public int combinationSum4(int[] nums, int target) {
        int n=nums.length;
        int[] memo=new int[target+1];
        memo[0]=1;

        for(int t=1;t<=target;t++){
        for(int i=0;i<n;i++){
        if(nums[i]<=t){
        memo[t]+=memo[t-nums[i]];
        }
        }
        }

        return memo[target];

        }
```

{% include disqus.html %}

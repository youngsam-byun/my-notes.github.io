---
layout: page 
grand_parent: Leetcode 
parent: dp 
nav_order: 2 
title: 152. Maximum Product Subarray
---

[https://leetcode.com/problems/maximum-product-subarray/](https://leetcode.com/problems/maximum-product-subarray/)

```java
class Solution {
    public int maxProduct(int[] nums) {

        int n=nums.length;
        //0th min
        //1th max
        int[][] memo=new int[n+1][2];
        memo[0][0]=1;
        memo[0][1]=1;
        int max=Integer.MIN_VALUE;

        for(int i=0;i<n;i++){
            int a=nums[i];
            if(a>0){
                memo[i+1][0]=Math.min(memo[i][0]*a,a);
                memo[i+1][1]=Math.max(memo[i][1]*a,a);
            }else{
                int t=memo[i][0];
                memo[i+1][0]=Math.min(memo[i][1]*a,a);
                memo[i+1][1]=Math.max(t*a,a);
            }
            max=Math.max(max,memo[i+1][1]);
        }

        return max;

    }
}
```

{% include disqus.html %}

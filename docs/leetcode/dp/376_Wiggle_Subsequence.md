---
layout: page 
grand_parent: Leetcode 
parent: dp 
nav_order: 2 
title: 376 Wiggle subsequence
---

[https://leetcode.com/problems/wiggle-subsequence/](https://leetcode.com/problems/wiggle-subsequence/)


```java
class Solution {
    public int wiggleMaxLength(int[] A) {

        int n=A.length;
        //0 incre
        //1 decre
        int[][] memo=new int[n][2];
        memo[0][0]=1;
        memo[0][1]=1;
        int max=0;

        for(int i=1;i<n;i++){
            if(A[i-1]<A[i]){
                memo[i][0]=memo[i-1][1]+1;
                memo[i][1]=memo[i-1][1];
            }else if(A[i-1]>A[i]){
                memo[i][1]=memo[i-1][0]+1;
                memo[i][0]=memo[i-1][0];
            }else{
                memo[i][0]=memo[i-1][0];
                memo[i][1]=memo[i-1][1];
            }

        }

        return Math.max(memo[n-1][0],memo[n-1][1]);
    }
}
```

{% include disqus.html %}

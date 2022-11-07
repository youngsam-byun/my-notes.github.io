---
layout: page 
grand_parent: Leetcode 
parent: dp 
nav_order: 2 
title: 276 Paint Fence
---

[https://leetcode.com/problems/paint-fence/](https://leetcode.com/problems/paint-fence/)

###recursive

```java
class Solution {
    public int numWays(int n, int k) {
        if(n==0)
            return 0;
        if(n==1)
            return k;

        int[] memo=new int[n+1];
        memo[1]=k;
        memo[2]=k*k;

        for(int i=3;i<=n;i++){
            memo[i]= (memo[i-1]+ memo[i-2])*(k-1);
        }

        return memo[n];
    }
}
```

{% include disqus.html %}

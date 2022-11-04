---
layout: page 
grand_parent: Leetcode 
parent: dp 
nav_order: 2 
title: 264. Ugly Number II
---

[https://leetcode.com/problems/ugly-number-ii/](https://leetcode.com/problems/ugly-number-ii/)


###iterative

```java
class Solution {
    public int nthUglyNumber(int n) {

        if(n<=5)
            return n;

        int[] res=new int[n];
        res[0]=1;

        int f2=0,f3=0,f5=0;
        for(int i=1;i<n;i++){
            int min=Math.min(res[f2]*2,Math.min(res[f3]*3,res[f5]*5));
            res[i]=min;

            if(res[f2]*2==min) f2++;
            if(res[f3]*3==min) f3++;
            if(res[f5]*5==min) f5++;
        }

        return res[n-1];
    }
}
```

{% include disqus.html %}

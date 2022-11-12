---
layout: page 
grand_parent: Leetcode 
parent: dp 
nav_order: 2 
title: 313 Super Ugly Number
---

[https://leetcode.com/problems/super-ugly-number/](https://leetcode.com/problems/super-ugly-number/)

```java
class Solution {
    public int nthSuperUglyNumber(int n, int[] primes) {

        long[] res = new long[n];
        res[0]=1;

        int[] memo=new int[primes.length];

        for(int i=1;i<n;i++){
            long min=Long.MAX_VALUE;

            for(int j=0;j<primes.length;j++){
                int p=primes[j];
                int k=memo[j];
                min=Math.min(min,p*res[k]);
            }

            res[i]=min;

            for(int j=0;j<primes.length;j++){
                int p=primes[j];
                int k=memo[j];
                if(min==p*res[k]){
                    memo[j]++;
                }
            }

        }
        return (int)res[n-1];

    }
}
```

{% include disqus.html %}

---
layout: page
nav_order: 2
grand_parent: Leetcode
parent: Greedy
title: 835 Image Overlap
---

[https://leetcode.com/problems/earliest-possible-day-of-full-bloom/](https://leetcode.com/problems/earliest-possible-day-of-full-bloom/)

###
```java
class Solution {
    public int earliestFullBloom(int[] plantTime, int[] growTime) {
        
        int n=plantTime.length;
        int[][] A=new int[n][2];
        for(int i=0;i<n;i++){
            A[i][0]=growTime[i];
            A[i][1]=plantTime[i];
        }
        
        Arrays.sort(A,(a,b)-> Integer.compare(b[0],a[0]));
        
        int max=0,time=0;
        for(int i=0;i<n;i++){
            time+=A[i][1];
            max=Math.max(max,time+A[i][0]);
        }
        
        return max;
    }
}
```



{% include disqus.html %}

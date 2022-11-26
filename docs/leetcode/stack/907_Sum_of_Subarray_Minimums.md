---
layout: page
nav_order: 2
grand_parent: Leetcode
parent: Stack
title: 907_Sum_of_Subarray_Minimums
---

[https://leetcode.com/problems/sum-of-subarray-minimums/](https://leetcode.com/problems/sum-of-subarray-minimums/)


```java
class Solution {
    public int sumSubarrayMins(int[] A) {

        int n=A.length;
        int[] left=new int[n],right=new int[n];
        Stack<Integer> s = new Stack<>();
        for(int i=0;i<n;i++){

            while(!s.isEmpty()&&A[s.peek()]>=A[i])
                s.pop();

            left[i]=s.isEmpty()?-1:s.peek();
            s.push(i);
        }

        s.clear();
        for(int i=n-1;i>=0;i--){

            while(!s.isEmpty()&&A[s.peek()]>A[i])
                s.pop();

            right[i]=s.isEmpty()?n:s.peek();
            s.push(i);
        }

        long res=0L,M=(long)(1e9)+7;
        for(int i=0;i<n;i++){
            int a=A[i];
            long l=(i-left[i]);
            long r=(right[i]-i);

            res += (l*r*a);
            res %=M;
        }

        return (int)res;

    }

}
```




{% include disqus.html %}

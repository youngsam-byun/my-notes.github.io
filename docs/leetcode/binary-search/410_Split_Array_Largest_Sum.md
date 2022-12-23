---
layout: page 
grand_parent: Leetcode 
parent: binary search 
nav_order: 2 
title: 410. Split Array Largest Sum
---

[https://leetcode.com/problems/split-array-largest-sum/](https://leetcode.com/problems/split-array-largest-sum/)

```java
class Solution {
    
    public int splitArray(int[] nums, int k) {                
                
        int max=0,sum=0;
        for(int n:nums){
            max=Math.max(max,n);
            sum+=n;
        }

        int l=max,r=sum;
        while(l<r){
            int m=l+(r-l)/2;
            int count=find(nums,m);
            if(count<=k)
                r=m;
            else
                l=m+1;
        }
        
        return l;
    }
    
    private int find(int[] A,int t){
        int count=1,curr=0;
        for(int i=0;i<A.length;i++){
            curr+=A[i];
            if(curr>t){
                curr=A[i];
                count++;
            }
        }
        return count;
    }
}

 ```
{% include disqus.html %}

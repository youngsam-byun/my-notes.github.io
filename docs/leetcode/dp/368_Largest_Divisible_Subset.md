---
layout: page 
grand_parent: Leetcode 
parent: dp 
nav_order: 2 
title: 368 Largest Divisible Subset
---

[https://leetcode.com/problems/largest-divisible-subset/](https://leetcode.com/problems/largest-divisible-subset/)

```java
class Solution {
    
    public List<Integer> largestDivisibleSubset(int[] nums) {
        
        Arrays.sort(nums);        
        
        int n=nums.length, memo[] = new int[n],prev[]=new int[n],p=-1,max=0;                
        
        for(int i=0;i<n;i++){
            memo[i]=1;
            prev[i]=-1;
            
            int b=nums[i];            
            for(int j=0;j<i;j++){
                int a=nums[j];
                
                if(b%a!=0) continue;
                                
                if(memo[i]<memo[j]+1){
                    memo[i]=memo[j]+1;
                    prev[i]=j;
                }                                
            }
            
            if(memo[i]>max){
                max=memo[i];
                p=i;
            }
        }        
        
        
        List<Integer> res = new LinkedList<>();                
        while(p!=-1){
            res.add(0,nums[p]);
            p=prev[p];
        }
        
        return res;
    }
}
```

{% include disqus.html %}

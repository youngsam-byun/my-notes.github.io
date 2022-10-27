---
layout: page
nav_order: 2
grand_parent: Leetcode
parent: Prefix Sum
title: 523 Continuous Subarray Sum
---

[https://leetcode.com/problems/continuous-subarray-sum/](https://leetcode.com/problems/continuous-subarray-sum/)

```java
public boolean checkSubarraySum(int[] nums, int k) {

        Map<Integer,Integer> map = new HashMap<>();
        map.put(0,-1);
        int sum=0;
        for(int i=0;i<nums.length;i++){
        int a=nums[i];
        sum=(sum+a)%k;

        if(map.containsKey(sum) && i-map.get(sum)>1){
        return true;
        }

        if(!map.containsKey(sum)){
        map.put(sum,i);
        }
        }
        return false;

}
```


{% include disqus.html %}

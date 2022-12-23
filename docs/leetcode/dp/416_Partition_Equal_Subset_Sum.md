---
layout: page 
grand_parent: Leetcode 
parent: dp 
nav_order: 2 
title: 416 Partition Equal Subset Sum
---

[https://leetcode.com/problems/partition-equal-subset-sum/](https://leetcode.com/problems/partition-equal-subset-sum/)

###recursive

```java
    public boolean canPartition(int[] nums) {

        int sum=Arrays.stream(nums).sum();
        if(sum%2==1)
        return false;


        return dfs(nums,sum/2,0,new Boolean[nums.length][sum+1]);
        }

private boolean dfs(int[] A,int sum,int i,Boolean[][] memo){
        int n=A.length;
        if(sum==0)
        return true;

        if(sum<0||i==n)
        return false;

        if(memo[i][sum]!=null)
        return memo[i][sum];


        return memo[i][sum] = dfs(A,sum,i+1,memo)||dfs(A,sum-A[i],i+1,memo);
        }
```


###iterative
```java
public boolean canPartition(int[] nums) {

        int sum=Arrays.stream(nums).sum();
        if(sum%2==1){
            return false;
        }
        
        sum/=2;
        Arrays.sort(nums);
        boolean[] memo=new boolean[sum+1];    
        memo[0]=true;
                        
        for(int n:nums){
            for(int s=sum;s>=0;s--){
                if(s>=n)
                    memo[s]=memo[s]|memo[s-n];
            }            
            
        }
        
        return memo[sum];
    }
```

{% include disqus.html %}

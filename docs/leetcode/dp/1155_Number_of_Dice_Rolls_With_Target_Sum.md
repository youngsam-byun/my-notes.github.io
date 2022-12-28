---
layout: page 
grand_parent: Leetcode 
parent: dp 
nav_order: 2 
title: 1155 Number of Dice Rolls With Target Sum
---

[https://leetcode.com/problems/number-of-dice-rolls-with-target-sum/](https://leetcode.com/problems/number-of-dice-rolls-with-target-sum/)

###recursive

```java
long M=(long)(1e9)+7;
public int numRollsToTarget(int n, int K, int target) {
    return (int)dp(n,K,target,0,0,new Long[n][target+1]);        
}

private long dp(int n,int K,int target,int i,int j,Long[][] memo){
        if(i==n){
        if(j==target)
        return 1;

        return 0;
        }

        if(j>target)
        return 0;

        if(memo[i][j]!=null)
        return memo[i][j];

        long res=0;
        for(int k=1;k<=K;k++){
        res = (res+dp(n,K,target,i+1,j+k,memo))%M;
        }

        return memo[i][j]=res;
        }
```

###iterative
```java
long M=(long)(1e9)+7;
    public int numRollsToTarget(int n, int K, int target) {
        
        long[][] memo=new long[n][target+1];
        for(int k=1;k<=Math.min(K,target);k++){
            memo[0][k]=1;
        }
        
        for(int i=1;i<n;i++){
            for(int t=1;t<=target;t++){                
                for(int k=1;k<=K;k++){
                    if(k<=t){
                        memo[i][t]+=memo[i-1][t-k];                        
                    }
                    memo[i][t]%=M;
                }
            }
        }
        return (int)memo[n-1][target];
        
    }
```

{% include disqus.html %}

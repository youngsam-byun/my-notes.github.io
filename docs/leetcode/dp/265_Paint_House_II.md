---
layout: page 
grand_parent: Leetcode 
parent: dp 
nav_order: 2 
title: 265 Paint House II
---

[https://leetcode.com/problems/paint-house-ii/](https://leetcode.com/problems/paint-house-ii/)

###recursive

```java
class Solution {
    
    public int minCostII(int[][] costs) {

        int n=costs.length, k=costs[0].length;
        Integer[][] memo=new Integer[n][k];

        for(int j=0;j<k;j++){
            dp(costs,0,j,memo);

        }
        int min=20*n+1;
        for(int j=0;j<k;j++){
            min=Math.min(min,memo[0][j]);
        }
        return min;

    }

    private int dp(int[][] costs,int i,int j,Integer[][] memo){
        int n=costs.length,k=costs[0].length;
        if(i==n){
            return 0;
        }

        if(memo[i][j]!=null){
            return memo[i][j];
        }

        int res=Integer.MAX_VALUE;
        for(int x=0;x<k;x++){
            if(x==j) continue;
            res=Math.min(res,dp(costs,i+1,x,memo)+costs[i][j]);
        }

        return  memo[i][j]=res;
    }
}
```

###iterative

```java
class Solution {

    public int minCostII(int[][] costs) {

        int n = costs.length, k = costs[0].length;
        int[][] memo = new int[n + 1][k + 1];
        for (int i = 1; i <= n; i++)
            Arrays.fill(memo[i], n * 20 + 1);

        for (int i = 0; i < n; i++) {
            for (int j = 0; j < k; j++) {
                for (int x = 0; x < k; x++) {
                    if (j == x) continue;
                    memo[i + 1][j + 1] = Math.min(memo[i + 1][j + 1], memo[i][x + 1] + costs[i][j]);
                }
            }
        }

        int min = 20 * n + 1;
        for (int j = 0; j <= k; j++) {
            min = Math.min(min, memo[n][j]);
        }
        return min;1
    }
```

{% include disqus.html %}

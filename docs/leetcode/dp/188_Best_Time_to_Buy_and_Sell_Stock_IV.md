---
layout: page 
grand_parent: Leetcode 
parent: dp 
nav_order: 2 
title: 188 Best Time to Buy and Sell Stock IV
---

[https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/)

###recursive

```java
class Solution {
    public int maxProfit(int k, int[] prices) {

        int n=prices.length;
        Integer[][][] memo=new Integer[k+1][n][2];
        return dp(prices,k,0,0,memo);
    }


    private int dp(int[] prices,int k,int j,int buy,Integer[][][] memo){
        int n=prices.length;
        if(k==0 || j==n){
            return 0;
        }

        if(memo[k][j][buy]!=null){
            return memo[k][j][buy];
        }

        //buy
        int profit=profit=dp(prices,k,j+1,buy,memo);;
        if(buy==0){
            profit=Math.max(profit,dp(prices,k,j+1,(buy+1)%2,memo)-prices[j]);
        }else{
            profit=Math.max(profit,dp(prices,k-1,j+1,(buy+1)%2,memo)+prices[j]);
        }

        return memo[k][j][buy]=profit;


    }
}
```

###iterative

```java
class Solution {
    public int maxProfit(int k, int[] prices) {

        int n=prices.length;
        int[][] memo=new int[k+1][n+1];

        for(int i=0;i<k;i++){
            int maxProfit=Integer.MIN_VALUE;
            for(int j=1;j<n;j++){
                maxProfit=Math.max(maxProfit,memo[i][j]-prices[j-1]);
                memo[i+1][j+1]=Math.max(memo[i+1][j],maxProfit+prices[j]);
            }
        }

        return memo[k][n];
    }
}
```

{% include disqus.html %}

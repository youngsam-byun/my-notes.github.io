---
layout: page 
grand_parent: Leetcode 
parent: dp 
nav_order: 2 
title: 123_Best_Time_to_Buy_and_Sell_Stock_III
---

[https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/)

###iterative
```java
    public int maxProfit(int[] prices) {

        int k=2,n=prices.length;
        int[][] memo=new int[K+1][n];
        for(int i=1;i<=k;i++){
            int maxProfit=Integer.MIN_VALUE;
            for(int j=1;j<n;j++){
                maxProfit=Math.max(maxProfit,memo[i-1][j-1]-prices[j-1]);
                memo[i][j]=Math.max(memo[i][j-1],maxProfit+prices[j]);
            }
        }

        return memo[k][n-1];
    }

```

###recursive
```java
    public int maxProfit(int[] prices) {
        int k=2,n=prices.length;
        int[][] memo=new int[k+1][n];
        dp(1,1,prices,Integer.MIN_VALUE,memo);
        return memo[k][n-1];
        }

    private void dp(int i,int j,int[] prices,int maxProfit,int[][] memo){
        int k=memo.length, n=memo[0].length;
        if(i==k){
            return;
        }

        if(j==n){
            dp(i+1,1,prices,maxProfit,memo);
        }
        else{
            if(j==1){
                maxProfit=Integer.MIN_VALUE;
            }

            maxProfit=Math.max(maxProfit,memo[i-1][j-1]-prices[j-1]);
            memo[i][j]=Math.max(memo[i][j-1],maxProfit+prices[j]);

            dp(i,j+1,prices,maxProfit,memo);
        }
}
```
{% include disqus.html %}

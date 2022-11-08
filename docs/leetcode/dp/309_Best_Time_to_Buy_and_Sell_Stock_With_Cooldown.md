---
layout: page 
grand_parent: Leetcode 
parent: dp 
nav_order: 2 
title: 309 Best Time to Buy and Sell Stock With Cooldown
---

[https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/)

```java
class Solution {
    public int maxProfit(int[] prices) {

        if(prices.length==0)
            return 0;

        int n=prices.length;
        int[] buy=new int[n];
        int[] sell=new int[n];
        int[] cool=new int[n];

        buy[0]=-prices[0];
        sell[0]=0;
        cool[0]=0;

        for(int i=1;i<n;i++){
            int p=prices[i];
            buy[i]=Math.max(buy[i-1],cool[i-1]-p);
            sell[i]=Math.max(sell[i-1],buy[i-1]+p);
            cool[i]=Math.max(cool[i-1],sell[i-1]);
        }

        return Math.max(buy[n-1],Math.max(sell[n-1],cool[n-1]));
    }
}
```

{% include disqus.html %}

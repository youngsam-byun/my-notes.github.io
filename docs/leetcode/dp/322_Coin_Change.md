---
layout: page 
grand_parent: Leetcode 
parent: dp 
nav_order: 2 
title: 313 Super Ugly Number
---

[https://leetcode.com/problems/super-ugly-number/](https://leetcode.com/problems/super-ugly-number/)

###recursive
```java
class Solution {

    public int coinChange(int[] coins, int amount) {

        int res=dp(coins,amount,new Integer[amount+1]);
        return res==Integer.MAX_VALUE?-1:res;

    }


    private int dp(int[] coins,int amount,Integer[] memo){

        if(amount==0){
            return 0;
        }
        if(memo[amount]!=null){
            return memo[amount];
        }

        int res=Integer.MAX_VALUE;
        for(int c:coins){
            if(amount>=c){
                int r=dp(coins,amount-c,memo);
                if(r==Integer.MAX_VALUE) continue;
                res=Math.min(res,r+1);
            }
        }

        return memo[amount]=res;
    }
}
```


###iterative
```java
class Solution {
    public int coinChange(int[] coins, int amount) {

        int n=coins.length;
        int[] memo=new int[amount+1];
        Arrays.fill(memo,(int)(1e4)+1);
        memo[0]=0;

        for(int a=1;a<=amount;a++){
            for(int c:coins){
                if(a>=c){
                    memo[a]=Math.min(memo[a],memo[a-c]+1);
                }

            }
        }
        return memo[amount]==(int)(1e4)+1 ?-1:memo[amount];
    }
}
```
{% include disqus.html %}

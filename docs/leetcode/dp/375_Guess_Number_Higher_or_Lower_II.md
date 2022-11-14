---
layout: page 
grand_parent: Leetcode 
parent: dp 
nav_order: 2 
title: 375 Guess Number Higher or Lower II
---

[https://leetcode.com/problems/guess-number-higher-or-lower-ii/](https://leetcode.com/problems/guess-number-higher-or-lower-ii/)

###recursive
```java
class Solution {
    public int getMoneyAmount(int n) {
        if(n<=1)
            return 0;
        Integer[][] memo = new Integer[n+1][n+1];
        return dp(1,n,memo);
    }

    private int dp(int i,int j,Integer[][] memo){
        if(i>=j)
            return 0;

        if(j-i==1)
            return i;

        if(memo[i][j]!=null)
            return memo[i][j];

        int res=Integer.MAX_VALUE;
        for(int k=i+1;k<j;k++){
            int r= k+ Math.max(dp(i,k-1,memo),dp(k+1,j,memo));
            res=Math.min(res,r);
        }

        return memo[i][j]=res;


    }
}
```

###iterative
```java
class Solution {


    public int getMoneyAmount(int n) {
        if (n <= 1)
            return 0;

        int[][] memo = new int[n + 1][n + 1];

        for (int i = 2; i <= n; i++) {
            for (int j = i - 1; j > 0; j--) {
                int min = Integer.MAX_VALUE;
                for (int k = j + 1; k < i; k++) {
                    int r = k + Math.max(memo[j][k - 1], memo[k + 1][i]);
                    min = Math.min(min, r);
                }
                memo[j][i] = j + 1 == i ? j : min;
            }
        }

        return memo[1][n];
    }
}
```

{% include disqus.html %}

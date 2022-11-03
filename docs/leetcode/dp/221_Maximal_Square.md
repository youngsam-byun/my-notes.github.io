---
layout: page 
grand_parent: Leetcode 
parent: dp 
nav_order: 2 
title: 221 Maximal Square
---

[https://leetcode.com/problems/maximal-square/](https://leetcode.com/problems/maximal-square/)

###recursive

```java
class Solution {
    int max=0;
    public int maximalSquare(char[][] matrix) {
        int m=matrix.length,n=matrix[0].length;
        dp(matrix,0,0,new Integer[m][n]);
        return max*max;
    }

    private int dp(char[][] matrix,int i,int j,Integer[][] memo){
        int m=matrix.length,n=matrix[0].length;
        if(i<0||i>=m||j<0||j>=n){
            return 0;
        }

        if(memo[i][j]!=null){
            return memo[i][j];
        }

        int res=m*n+1;
        res=Math.min(res,dp(matrix,i+1,j,memo));
        res=Math.min(res,dp(matrix,i,j+1,memo));
        res=Math.min(res,dp(matrix,i+1,j+1,memo));

        if(matrix[i][j]=='1'){
            memo[i][j]=res+1;
        }
        else{
            memo[i][j]=0;
        }

        max=Math.max(max,memo[i][j]);
        return memo[i][j];

    }
}
```

###iterative
```java
class Solution {

    public int maximalSquare(char[][] matrix) {

        int m = matrix.length, n = matrix[0].length, max = 0;
        int[][] memo = new int[m + 1][n + 1];
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                if (matrix[i - 1][j - 1] == '1') {
                    memo[i][j] = Math.min(memo[i - 1][j], Math.min(memo[i][j - 1], memo[i - 1][j - 1])) + 1;
                }
                max = Math.max(max, memo[i][j]);
            }
        }

        return max * max;

    }
}
```

{% include disqus.html %}

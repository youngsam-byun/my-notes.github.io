---
layout: page 
grand_parent: Leetcode 
parent: dp 
nav_order: 2 
title: 97 Interleaving String
---

[https://leetcode.com/problems/interleaving-string/](https://leetcode.com/problems/interleaving-string/)

###recursive

```java
public int minimumTotal(List<List<Integer>>triangle){
        int m=triangle.size();
        Integer[][]memo=new Integer[m][];
        for(int i=0;i<m;i++){
        int n=triangle.get(i).size();
        memo[i]=new Integer[n];
        }

        return dp(0,0,triangle,memo);
        }

private int dp(int i,int j,List<List<Integer>>triangle,Integer[][]memo){
        int size=triangle.size();
        if(i==size)
        return 0;

        int size2=triangle.get(i).size();
        if(j==size2)
        return Integer.MAX_VALUE;

        if(memo[i][j]!=null)
        return memo[i][j];

        long min=Math.min(dp(i+1,j,triangle,memo),dp(i+1,j+1,triangle,memo))+triangle.get(i).get(j);

        return memo[i][j]=(int)min;
        }
}
```

###iterative

```java
class Solution {

    public boolean isInterleave(String s1, String s2, String s3) {

        int m = s1.length(), n = s2.length(), o = s3.length();

        Boolean[][] memo = new Boolean[m + 1][n + 1];
        return dfs(s1, 0, s2, 0, s3, 0, memo);

    }


    private boolean dfs(String s1, int i, String s2, int j, String s3, int k, Boolean[][] memo) {
        int m = s1.length(), n = s2.length();
        if (i == m && j == n) {
            return true;
        }

        if (memo[i][j] != null)
            return memo[i][j];


        if (i < m && s1.charAt(i) == s3.charAt(k) && dfs(s1, i + 1, s2, j, s3, k + 1, memo))
            return memo[i][j] = true;

        if (j < n && s2.charAt(j) == s3.charAt(k) && dfs(s1, i, s2, j + 1, s3, k + 1, memo))
            return memo[i][j] = true;

        return memo[i][j] = false;

    }
}
```

{% include disqus.html %}

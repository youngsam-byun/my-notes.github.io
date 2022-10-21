---
layout: page
parent: DP
title: Interleaving String
nav_order: 4
---


Question
97. Interleaving String

```
Given strings s1, s2, and s3, find whether s3 is formed by an interleaving of s1 and s2.

An interleaving of two strings s and t is a configuration where s and t are divided into n and m non-empty substrings respectively, such that:

s = s1 + s2 + ... + sn
t = t1 + t2 + ... + tm
|n - m| <= 1
The interleaving is s1 + t1 + s2 + t2 + s3 + t3 + ... or t1 + s1 + t2 + s2 + t3 + s3 + ...
Note: a + b is the concatenation of strings a and b.

```

Example
```
Input: s1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac"
Output: true
Explanation: One way to obtain s3 is:
Split s1 into s1 = "aa" + "bc" + "c", and s2 into s2 = "dbbc" + "a".
Interleaving the two splits, we get "aa" + "dbbc" + "bc" + "a" + "c" = "aadbbcbcac".
Since s3 can be obtained by interleaving s1 and s2, we return true.
```

Solution DP recursive
```java
class Solution {
    public boolean isInterleave(String s1, String s2, String s3) {

        int m = s1.length(), n = s2.length(), o = s3.length();
        if (m + n != o)
            return false;

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

Solution DP iterative
```java
class Solution {

    public boolean isInterleave(String s1, String s2, String s3) {

        int m = s1.length(), n = s2.length(), o = s3.length();
        if (m + n != o)
            return false;

        boolean[][] memo = new boolean[m + 1][n + 1];
        memo[0][0] = true;

        for (int i = 0; i < m; i++) {
            memo[i + 1][0] = memo[i][0] && s1.charAt(i) == s3.charAt(i);
        }

        for (int j = 0; j < n; j++) {
            memo[0][j + 1] = memo[0][j] && s2.charAt(j) == s3.charAt(j);
        }

        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                boolean b1 = (s1.charAt(i) == s3.charAt(i + 1 + j) && memo[i][j + 1]);
                boolean b2 = (s2.charAt(j) == s3.charAt(i + 1 + j) && memo[i + 1][j]);
                memo[i + 1][j + 1] = b1 || b2;
            }
        }


        return memo[m][n];

    }
}
```

{% include disqus.html %}


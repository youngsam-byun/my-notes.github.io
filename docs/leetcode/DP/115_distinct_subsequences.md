---
layout: page
parent: DP
title: Distinct Subsequences
nav_order: 5
---


Question
115. Distinct Subsequences

```
Given two strings s and t, return the number of distinct subsequences of s which equals t.
A string's subsequence is a new string formed from the original string by deleting some (can be none) of the characters without disturbing the remaining characters' relative positions. (i.e., "ACE" is a subsequence of "ABCDE" while "AEC" is not).
The test cases are generated so that the answer fits on a 32-bit signed integer.

```

Example
```
Input: s = "rabbbit", t = "rabbit"
Output: 3
Explanation:
As shown below, there are 3 ways you can generate "rabbit" from s.
rabbbit
rabbbit
rabbbit
```

Approach
```
An example:
S: [acdabefbc] and T: [ab]
at T[0],"a"

           *  *
         S[acdabefbc]
a         [0111222222]
then we check with ab:

at T[1], "b"
               *  * 
      S = [acdabefbc]
memo[1]   [0111222222]
memo[2]b= [0000022244]

And the result is 4, as the distinct subsequences are:

      S = [a   b    ]
      S = [a      b ]
      S = [   ab    ]
      S = [   a   b ]
```


Solution DP iterative
```java
class Solution {
    public int numDistinct(String s, String t) {
        int m=s.length(),n=t.length();
        int[][] memo=new int[n+1][m+1];
        Arrays.fill(memo[0],1);
        
        for(int i=0;i<n;i++){
            for(int j=0;j<m;j++){
                if(t.charAt(i)==s.charAt(j)){
                    memo[i+1][j+1]=memo[i][j]+memo[i+1][j];
                }else{
                    memo[i+1][j+1]=memo[i+1][j];
                }
            }
        }
        
       return memo[n][m]; 
       
    }
}
```
{% include disqus.html %}


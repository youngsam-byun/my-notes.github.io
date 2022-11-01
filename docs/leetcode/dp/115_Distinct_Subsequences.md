---
layout: page 
grand_parent: Leetcode 
parent: dp 
nav_order: 2 
title: 120 Triangle
---

[https://leetcode.com/problems/distinct-subsequences/](https://leetcode.com/problems/distinct-subsequences/)

###recursive

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

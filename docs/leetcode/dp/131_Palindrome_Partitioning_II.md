---
layout: page 
grand_parent: Leetcode 
parent: dp 
nav_order: 2 
title: 131 Palindrome Partitioning II
---

[https://leetcode.com/problems/palindrome-partitioning/](https://leetcode.com/problems/palindrome-partitioning//)

###recursive
```java
class Solution {
    public int minCut(String s) {

        //cache palindrome
        int n=s.length();
        boolean[][] palindrome=new boolean[n][n];
        for(int i=0;i<n;i++){
            for(int j=i;j>=0;j--){
                if(j==i){
                    palindrome[j][i]=true;
                }else if(i-j==1 && s.charAt(j)==s.charAt(i)){
                    palindrome[j][i]=true;
                }else if(i-j>1 && palindrome[j+1][i-1] && s.charAt(j)==s.charAt(i)){
                    palindrome[j][i]=true;
                }
            }
        }

        //dp with memoization
        Integer[][] memo=new Integer[n][n];
        return dp(s,0,n-1,palindrome,memo);
    }

    private int dp(String s,int left,int right,boolean[][] palindrome,Integer[][] memo){
        int n=s.length();
        if(left==n||right==n||left==right){
            return 0;
        }

        if(memo[left][right]!=null){
            return memo[left][right];
        }

        int min=2000;
        for(int i=left;i<=right;i++){
            if(palindrome[left][i]){
                min=Math.min(min,dp(s,i+1,right,palindrome,memo)+(i==n-1?0:1));
            }
        }

        return memo[left][right]=min;
    }
}
```

###iterative
```java
class Solution {
    public int minCut(String s) {

        //cache palindrome
        int n=s.length();
        boolean[][] palindrome=new boolean[n][n];
        for(int i=0;i<n;i++){
            for(int j=i;j>=0;j--){
                if(j==i){
                    palindrome[j][i]=true;
                }else if(i-j==1 && s.charAt(j)==s.charAt(i)){
                    palindrome[j][i]=true;
                }else if(i-j>1 && palindrome[j+1][i-1] && s.charAt(j)==s.charAt(i)){
                    palindrome[j][i]=true;
                }
            }
        }

        //dp with memoization
        int[] memo=new int[n];

        for(int i=0;i<n;i++){
            int min=i;
            for(int j=0;j<=i;j++){
                if(palindrome[j][i]){
                    min=Math.min(min,j==0?0:memo[j-1]+1);
                }
            }
            memo[i]=min;
        }

        return memo[n-1];
    }

}
```

{% include disqus.html %}

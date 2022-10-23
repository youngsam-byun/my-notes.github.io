---
layout: page 
grand_parent: leetcode 
parent: dp 
nav_order: 2 
title: 131_Palindrome_Partitioning
---

[https://leetcode.com/problems/palindrome-partitioning/](https://leetcode.com/problems/palindrome-partitioning//)

###recursive
```java
class Solution {
    public List<List<String>> partition(String s) {

        int n=s.length();
        boolean[][] memo =new boolean[n][n];
        for(int i=0;i<n;i++){
            for(int j=i;j>=0;j--){
                if(i==j){
                    memo[j][i]=true;
                }else if(i-j==1 && s.charAt(j)==s.charAt(i)){
                    memo[j][i]=true;
                }else if(i-j>1 && s.charAt(j)==s.charAt(i) && memo[j+1][i-1]){
                    memo[j][i]=true;
                }
            }
        }

        List<List<String>> res = new ArrayList<>();
        dfs(0,s,new ArrayList<>(),memo,res);

        return res;
    }

    private void dfs(int idx,String s,List<String> list,boolean[][] memo,List<List<String>> res){
        int n=s.length();
        if(idx==n){
            res.add(new ArrayList<>(list));
            return;
        }

        for(int i=idx;i<n;i++){
            if(memo[idx][i]){
                list.add(s.substring(idx,i+1));
                dfs(i+1,s,list,memo,res);
                list.remove(list.size()-1);
            }
        }
    }
}
```
{% include disqus.html %}

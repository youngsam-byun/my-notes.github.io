---
layout: page 
grand_parent: Leetcode 
parent: dp 
nav_order: 2 
title: 131 Palindrome Partitioning
---

[https://leetcode.com/problems/palindrome-partitioning/](https://leetcode.com/problems/palindrome-partitioning/)

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

###iterative
```java
class Solution {
    public List<List<String>> partition(String s) {
                
        //prepare palindrome cache
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
        
        
        List<List<String>> t  = new ArrayList<>();
        t.add(new ArrayList<>());
        
        List<List<List<String>>> table=new ArrayList<>();        
        table.add(t);
        
        for(int i=1;i<=n;i++){
            table.add(null);
        }            
                
        
        for(int i=0;i<n;i++){
            for(int j=i;j<n;j++){                
                if(memo[i][j]){
                                        
                    List<List<String>> list=table.get(i);                                        
                    if(list==null) continue;                    
                    String c=s.substring(i,j+1);
                    
                    List<List<String>> list2=new ArrayList<>();
                    
                    for(List<String> l:list){
                        List<String> l2=new ArrayList<>(l);
                        l2.add(c);
                        list2.add(l2);
                    }
                    
                    if(table.get(j+1)==null){
                        table.set(j+1,list2);
                    }else{
                        table.get(j+1).addAll(list2);
                    }
                                        
                }                                
            }            
        }
        
        List<List<String>> res = table.get(n);
        return res==null?new ArrayList<>():res;
    }
}
```

{% include disqus.html %}

---
layout: page
nav_order: 2
grand_parent: Leetcode
parent: Trie
title: 212 Word Search II
---

[https://leetcode.com/problems/word-search-ii/](https://leetcode.com/problems/word-search-ii/)

###
```java
class Solution {

    class TrieNode{
        char c;
        TrieNode[] childs;
        boolean isWord;
        public TrieNode(char c){
            this.c=c;
            this.childs=new TrieNode[26];
        }
    }

    private void addWord(String w,TrieNode curr){
        for(char c:w.toCharArray()){
            if(curr.childs[c-'a']==null){
                curr.childs[c-'a']=new TrieNode(c);
            }
            curr=curr.childs[c-'a'];
        }
        curr.isWord=true;
    }

    public List<String> findWords(char[][] board, String[] words) {

        TrieNode root=new TrieNode(' ');
        for(String w:words){
            addWord(w,root);
        }

        Set<String> res = new HashSet<>();
        int m=board.length,n=board[0].length;
        boolean[][] visit=new boolean[m][n];
        for(int i=0;i<m;i++){
            for(int j=0;j<n;j++){
                dfs(board,i,j,"",root,res,visit);
            }
        }

        return new ArrayList<>(res);
    }

    private void dfs(char[][] board,int i,int j,String t,TrieNode curr,Set<String> res,boolean[][] visit){
        int m=board.length,n=board[0].length;
        if(i<0||i>=m||j<0||j>=n||visit[i][j])
            return;

        char c=board[i][j];
        if(curr.childs[c-'a']==null)
            return;

        t+=c;
        curr=curr.childs[c-'a'];
        visit[i][j]=true;

        if(curr.isWord){
            res.add(t);
        }

        dfs(board,i-1,j,t,curr,res,visit);
        dfs(board,i,j+1,t,curr,res,visit);
        dfs(board,i+1,j,t,curr,res,visit);
        dfs(board,i,j-1,t,curr,res,visit);

        visit[i][j]=false;

    }

}
```



{% include disqus.html %}

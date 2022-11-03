---
layout: page
nav_order: 2
grand_parent: Leetcode
parent: Graph
title: 529 Minesweeper
---

[https://leetcode.com/problems/minesweeper/](https://leetcode.com/problems/minesweeper/)

DFS
```java 
class Solution {
    public char[][] updateBoard(char[][] board, int[] click) {        
        return dfs(board,click[0],click[1]);        
    }
    
    private char[][] dfs(char[][] board,int r, int c){
        
        int m=board.length,n=board[0].length;
        
        char b=board[r][c];
        if(b=='M'){
            board[r][c]='X';
            return board;
        }
        
        
        if(b=='E'){
            
            int count=count(board,r,c);
            
            if(count>0){
                board[r][c]=(char)(count+'0');
                return board;
            }
            
            board[r][c]='B';
            
            for(int i=-1;i<=1;i++){
                for(int j=-1;j<=1;j++){
                    if(i==0 && j==0) continue;
                    int x=r+i,y=c+j;
                    if(x<0||x>=m||y<0||y>=n) continue;

                    if(board[x][y]=='E')
                        dfs(board,x,y);
                        
                }
            }                            
        }
        
        return board;
    }
    
    
    private int count(char[][] board,int r,int c){

        int m=board.length,n=board[0].length,count=0;
        for(int i=-1;i<=1;i++){
            for(int j=-1;j<=1;j++){
                if(i==0 && j==0) continue;
                int x=r+i,y=c+j;
                if(x<0||x>=m||y<0||y>=n) continue;
                
                if(board[x][y]=='M'||board[x][y]=='X')
                    count++;                
            }
        }
        
        return count;
    }
}
```

BFS
```java
class Solution {

    public char[][] updateBoard(char[][] board, int[] click) {

        int m=board.length,n=board[0].length;
        int r=click[0],c=click[1];

        if(board[r][c]=='M'){
            board[r][c]='X';
            return board;
        }

        Queue<int[]> q = new LinkedList<>();

        if(board[r][c]=='E'){

            int count=countMine(board,r,c);
            if(count>0){
                board[r][c]=(char)(count+'0');
                return board;
            }

            board[r][c]='B';

            for(int i=-1;i<=1;i++){
                for(int j=-1;j<=1;j++){
                    if(i==0&&j==0) continue;
                    int x=r+i,y=c+j;

                    if(x<0||y<0||x>=m||y>=n)
                        continue;

                    if(board[x][y]=='E'){
                        updateBoard(board,new int[]{x,y});
                    }
                }
            }

        }

        return board;
    }

    private int countMine(char[][] board,int r,int c){
        int m=board.length,n=board[0].length;
        int count=0;
        for(int i=-1;i<=1;i++){
            for(int j=-1;j<=1;j++){
                if(i==0&&j==0) continue;

                int x=r+i,y=c+j;
                if(x<0||y<0||x>=m||y>=n)
                    continue;

                if(board[x][y]=='M'||board[x][y]=='X')
                    count++;
            }
        }
        return count;
    }
}
```

{% include disqus.html %}

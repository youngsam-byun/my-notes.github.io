---
layout: page
nav_order: 2
grand_parent: Leetcode
parent: Matrix
title: 361 Bomb Enemy
---

[https://leetcode.com/problems/bomb-enemy/](https://leetcode.com/problems/bomb-enemy/)

###O(mn^2)
```java
class Solution {
    public int maxKilledEnemies(char[][] grid) {

        int m=grid.length,n=grid[0].length;
        int res=0;
        for(int i=0;i<m;i++){
            for(int j=0;j<n;j++){
                if(grid[i][j]=='0'){
                    res=Math.max(res,test(grid,i,j));
                }
            }
        }
        return res;
    }

    private int test(char[][] G,int r,int c){

        int m=G.length,n=G[0].length;
        int res=0;

        //right
        int j=c;
        while(j<n && G[r][j]!='W'){
            if(G[r][j++]=='E')
                res++;
        }

        //left
        j=c-1;
        while(j>=0 && G[r][j]!='W'){
            if(G[r][j--]=='E')
                res++;
        }

        //bottom
        int i=r+1;
        while(i<m && G[i][c]!='W'){
            if(G[i++][c]=='E')
                res++;
        }

        //top
        i=r-1;
        while(i>=0 && G[i][c]!='W'){
            if(G[i--][c]=='E')
                res++;
        }

        return res;

    }
}
```

###O(mn)
```java
class Solution {

    public int maxKilledEnemies(char[][] grid) {

        int m=grid.length,n=grid[0].length;
        int row=0,max=0;
        int[] col=new int[n];

        for(int i=0;i<m;i++){
            for(int j=0;j<n;j++){

                if(j==0||grid[i][j-1]=='W'){
                    row=0;
                    for(int k=j;k<n && grid[i][k]!='W';k++){
                        row+=grid[i][k]=='E'?1:0;
                    }
                }

                if(i==0 || grid[i-1][j]=='W'){
                    col[j]=0;
                    for(int k=i;k<m && grid[k][j]!='W';k++){
                        col[j] += (grid[k][j]=='E'?1:0);
                    }
                }


                if(grid[i][j]=='0'){
                    max=Math.max(max,row+col[j]);
                }

            }
        }

        return max;
    }

}
```



{% include disqus.html %}

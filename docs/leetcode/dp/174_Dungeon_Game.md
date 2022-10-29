---
layout: page 
grand_parent: Leetcode 
parent: dp 
nav_order: 2 
title: 174 Dungeon Game
---

[https://leetcode.com/problems/dungeon-game/](https://leetcode.com/problems/dungeon-game/)

###recursive

```java
class Solution {
    public int calculateMinimumHP(int[][] dungeon) {

        int m=dungeon.length,n=dungeon[0].length;
        Integer[][] memo=new Integer[m][n];
        return dfs(dungeon,0,0,memo);
    }

    private int dfs(int[][] dungeon,int i,int j,Integer[][] memo){

        int m=dungeon.length,n=dungeon[0].length;
        if(i>=m || j>=n)
            return (int)(1e9);

        if(memo[i][j]!=null){
            return memo[i][j];
        }

        if(i==m-1 && j==n-1){
            return dungeon[i][j]>=0?1:-dungeon[i][j]+1;
        }

        int min1=dfs(dungeon,i+1,j,memo);
        int min2=dfs(dungeon,i,j+1,memo);
        int min= Math.min(min1,min2)-dungeon[i][j];

        return memo[i][j]=min<=0?1:min;

    }
}
```

###iterative

```java
public int calculateMinimumHP(int[][] dungeon) {

        int m=dungeon.length,n=dungeon[0].length;

        int[][] memo=new int[m][n];

        for(int i=m-1;i>=0;i--){
        for(int j=n-1;j>=0;j--){
        int res=0;
        if(i==m-1 && j==n-1){
        res=-dungeon[i][j]+1;
        }else if(i==m-1){
        res=-dungeon[i][j]+memo[i][j+1];
        }else if(j==n-1){
        res=-dungeon[i][j]+memo[i+1][j];
        }else{
        res=-dungeon[i][j]+Math.min(memo[i][j+1],memo[i+1][j]);
        }

        memo[i][j]=res<1?1:res;
        }
        }

        for(int i=0;i<m;i++){
        System.out.println(Arrays.toString(memo[i]));
        }

        return memo[0][0];

        }
```

{% include disqus.html %}

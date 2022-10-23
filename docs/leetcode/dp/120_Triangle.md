---
layout: page 
grand_parent: Leetcode 
parent: dp 
nav_order: 2 
title: 120 Triangle
---

[https://leetcode.com/problems/triangle/](https://leetcode.com/problems/triangle/)

###recursive

```java
public int minimumTotal(List<List<Integer>>triangle){
        int m=triangle.size();
        Integer[][]memo=new Integer[m][];
        for(int i=0;i<m;i++){
        int n=triangle.get(i).size();
        memo[i]=new Integer[n];
        }

        return dp(0,0,triangle,memo);
        }

private int dp(int i,int j,List<List<Integer>>triangle,Integer[][]memo){
        int size=triangle.size();
        if(i==size)
        return 0;

        int size2=triangle.get(i).size();
        if(j==size2)
        return Integer.MAX_VALUE;

        if(memo[i][j]!=null)
        return memo[i][j];

        long min=Math.min(dp(i+1,j,triangle,memo),dp(i+1,j+1,triangle,memo))+triangle.get(i).get(j);

        return memo[i][j]=(int)min;
        }
```

###iterative

```java
public int minimumTotal(List<List<Integer>>triangle){
        int m=triangle.size();
        int[][]memo=new int[m][];
        for(int i=0;i<m;i++){
        int n=triangle.get(i).size();
        memo[i]=new int[n];
        }

        memo[0][0]=triangle.get(0).get(0);

        for(int i=1;i<triangle.size();i++){
        int n=triangle.get(i).size();
            for(int j=0;j<n;j++){
            int a=triangle.get(i).get(j);
            if(j==0){
            memo[i][j]=memo[i-1][j]+a;
            }else if(j==n-1){
            memo[i][j]=memo[i-1][j-1]+a;
            }else{
            memo[i][j]=Math.min(memo[i-1][j-1],memo[i-1][j])+a;
            }
            }
        }

        return Arrays.stream(memo[m-1]).min().getAsInt();
}
```

{% include disqus.html %}

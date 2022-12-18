---
layout: page 
grand_parent: Leetcode 
parent: dp 
nav_order: 2 
title: 1105 Filling Bookcase Shelves
---

[https://leetcode.com/problems/filling-bookcase-shelves/](https://leetcode.com/problems/filling-bookcase-shelves/)

###recursive

```java
public int minHeightShelves(int[][] books, int shelfWidth) {     
         return dfs(books,shelfWidth,0,0,0,new Integer[n][shelfWidth+1]);
        }

private int dfs(int[][] B,int maxWidth,int i,int w,int h,Integer[][] memo){

        int n=B.length;
        if(i==n){
        return h;
        }

        if(memo[i][w]!=null)
        return memo[i][w];

        int res=dfs(B,maxWidth,i+1,B[i][0],B[i][1],memo)+h;
        if(w+B[i][0]<=maxWidth){
        res=Math.min(res,dfs(B,maxWidth,i+1,w+B[i][0],Math.max(h,B[i][1]),memo));
        }

        return memo[i][w]=res;

        }
```


###iterative```
public int minHeightShelves(int[][] books, int shelfWidth) {
int n=books.length;
int[] memo=new int[n];
Arrays.fill(memo,(int)(1e6)+1);
memo[0]=books[0][1];

        for(int i=1;i<n;i++){
            int w=0,h=0;
            for(int j=i;j>=0 && books[j][0]+w<=shelfWidth;j--){
                w+=books[j][0];
                h=Math.max(h,books[j][1]);
                memo[i]=Math.min(memo[i],(j-1<0?0:memo[j-1])+h);
            }
        }
        
        return memo[n-1]; 
    }
``

{% include disqus.html %}

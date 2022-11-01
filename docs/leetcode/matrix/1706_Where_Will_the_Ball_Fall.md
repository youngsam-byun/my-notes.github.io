---
layout: page
nav_order: 2
grand_parent: Leetcode
parent: Matrix
title: 1706 Where Will the Ball Fall
---

[https://leetcode.com/problems/where-will-the-ball-fall/](https://leetcode.com/problems/where-will-the-ball-fall/)

###O(MN)
```java
class Solution {
    public int[] findBall(int[][] grid) {
        
        int m=grid.length,n=grid[0].length;
        
        Queue<Integer>  q = new LinkedList<>();
        for(int j=0;j<n;j++){
            q.offer(j);
        }
        
        for(int i=0;i<m;i++){                        
            int size=q.size();
                        
            for(int j=0;j<n;j++){                
                int c=q.poll();
                
                if(c==-1){
                    q.offer(c);
                    continue;
                }
                                                                                
                int g=grid[i][c];
                if(g==1){
                    if(c+1<n && grid[i][c+1]==1){
                        q.offer(c+1);
                    }else{
                        q.offer(-1);
                    }
                }else{
                    if(c-1>=0 && grid[i][c-1]==1){
                        q.offer(-1);
                    }else{
                        q.offer(c-1);
                    }                    
                }                                                                
            }       
            
            
        }
        
        int[] res =  new int[n];
        for(int i=0;i<n;i++)
            res[i]=q.poll();
        
        
        return res;
    }
}
```


{% include disqus.html %}

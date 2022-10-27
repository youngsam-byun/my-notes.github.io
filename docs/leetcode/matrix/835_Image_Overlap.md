---
layout: page
nav_order: 2
grand_parent: Leetcode
parent: Matrix
title: 835 Image Overlap
---

[https://leetcode.com/problems/image-overlap/](https://leetcode.com/problems/image-overlap/)

###O(n^4)
```java
public int largestOverlap(int[][] img1, int[][] img2) {

        int n=img1.length,max=0;
        for(int i=-n;i<n;i++){
        for(int j=-n;j<n;j++){
        max=Math.max(max,overlap(img1,img2,i,j));
        }
        }

        return max;

        }

private int overlap(int[][] A,int[][] B,int rowShift,int colShift){

        int n=A.length;
        int res=0;
        for(int i=0;i<n;i++){
        for(int j=0;j<n;j++){
        if(i+rowShift<0||i+rowShift>=n||j+colShift<0||j+colShift>=n) continue;

        if( (A[i+rowShift][j+colShift]&B[i][j]) ==1)
        res++;
        }
        }

        return res;
        }

```

###O(n^2)
```java
class Solution {

    public int largestOverlap(int[][] img1, int[][] img2) {

        int n=img1.length,max=0;
        List<Integer> A=new LinkedList<>(),B=new LinkedList<>();
        for(int i=0;i<n*n;i++){
            if(img1[i/n][i%n]==1){
                A.add(i/n*100 +(i%n));
            }
        }

        for(int i=0;i<n*n;i++){
            if(img2[i/n][i%n]==1){
                B.add(i/n*100 +(i%n));
            }
        }

        Map<Integer,Integer> map = new HashMap<>();
        for(int a:A){
            for(int b:B){
                map.put(a-b,map.getOrDefault(a-b,0)+1);
            }
        }

        for(int v:map.values()){
            max=Math.max(max,v);
        }

        return max;

    }
}
```



{% include disqus.html %}

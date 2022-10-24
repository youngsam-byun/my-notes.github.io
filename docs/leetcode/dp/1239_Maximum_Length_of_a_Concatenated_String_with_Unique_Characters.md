---
layout: page 
grand_parent: Leetcode 
parent: dp 
nav_order: 2 
title: 1239 Maximum Length of a Concatenated String with Unique Characters
---
[https://leetcode.com/problems/maximum-length-of-a-concatenated-string-with-unique-characters/](https://leetcode.com/problems/maximum-length-of-a-concatenated-string-with-unique-characters/)

###recursive
running time complexity: o(2^n)
```java
class Solution {
    public int maxLength(List<String> arr) {
        int n=arr.size();
        int[] mask=new int[n];
        Set<Integer> notUnique = new HashSet<>();
        for(int i=0;i<n;i++){
            String a=arr.get(i);
            int m=0;
            for(char c:a.toCharArray()){
                if((m&(1<<(c-'a')))!=0){
                    notUnique.add(i);
                }
                m|=(1<<(c-'a'));
            }
            mask[i]=m;
        }

        return dfs(0,0,arr,mask,notUnique);
    }

    private int dfs(int idx,int currMask,List<String> arr,int[] mask,Set<Integer> notUnique){
        int n=arr.size();
        if(idx==n){
            return 0;
        }
        
        int max=dfs(idx+1,currMask,arr,mask,notUnique);

        if(!notUnique.contains(idx) && (currMask & mask[idx])==0){
            int len=arr.get(idx).length();
            max=Math.max(max,dfs(idx+1,currMask|mask[idx],arr,mask,notUnique)+len);
        }

        return max;
    }

}
```

###iterative
```java

```

{% include disqus.html %}

---
layout: page
nav_order: 2
grand_parent: Leetcode
parent: Graph
title: 465. Optimal Account Balancing
---

[https://leetcode.com/problems/optimal-account-balancing/](https://leetcode.com/problems/optimal-account-balancing/)

```java
//DFS
class Solution {
    int count=0;
    public int minTransfers(int[][] transactions) {

        Map<Integer,Integer> debts=new HashMap<>();
        for(int[] t:transactions){
            int u=t[0];
            int v=t[1];
            int w=t[2];

            debts.put(u,debts.getOrDefault(u,0)-w);
            debts.put(v,debts.getOrDefault(v,0)+w);
        }

        List<Integer> debtList = debts.values().stream().filter(v->v!=0).collect(Collectors.toList());

        return settle(0,debtList);
    }

    private int settle(int start,List<Integer> debtList){
        // while(start<debtList.size() && debtList.get(start)==0)
        //     start++;

        if(start==debtList.size())
            return 0;

        int min=Integer.MAX_VALUE;
        for(int i=start+1;i<debtList.size();i++){
            if(debtList.get(i)*debtList.get(start)<0){
                debtList.set(i,debtList.get(i)+debtList.get(start));
                min=Math.min(min,1+settle(start+1,debtList));
                debtList.set(i,debtList.get(i)-debtList.get(start));
            }
        }
        return min==Integer.MAX_VALUE?0:min;
    }
}
```


{% include disqus.html %}

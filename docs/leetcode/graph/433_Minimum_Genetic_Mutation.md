---
layout: page
nav_order: 2
grand_parent: Leetcode
parent: Graph
title: 433 Minimum Genetic Mutation
---

[https://leetcode.com/problems/minimum-genetic-mutation/](https://leetcode.com/problems/minimum-genetic-mutation/)

```java
O(N^2)
finding difference between strings == distance == sort distance ASC
BFS 
class Solution {
    public int minMutation(String start, String end, String[] bank) {

        if(start.equals(end))
            return 0;
        if(bank==null || bank.length==0)
            return -1;

        Map<String,List<String>> graph=new HashMap<>();
        int n=bank.length;

        //init start 
        for(String b:bank){
            int diff=testDiff(start,b);
            if(diff==1){
                graph.putIfAbsent(start,new ArrayList<>());
                graph.putIfAbsent(b,new ArrayList<>());
                graph.get(start).add(b);
                graph.get(b).add(start);
            }
        }

        //build graph
        for(int i=0;i<n;i++){
            String u=bank[i];
            for(int j=i+1;j<n;j++){
                String v=bank[j];
                int diff=testDiff(u,v);
                if(diff==1){
                    graph.putIfAbsent(u,new ArrayList<>());
                    graph.putIfAbsent(v,new ArrayList<>());
                    graph.get(u).add(v);
                    graph.get(v).add(u);
                }
            }
        }


        Queue<String> q = new LinkedList<>();
        q.offer(start);

        Set<String> visit=new HashSet<>();
        visit.add(start);
        int step=0;

        while(!q.isEmpty()){
            int size=q.size();
            for(int i=0;i<size;i++){
                String u=q.poll();
                if(u.equals(end))
                    return step;

                for(String v:graph.get(u)){
                    if(!visit.add(v)) continue;

                    q.offer(v);
                }

            }

            step++;
        }

        return -1;
    }

    private int testDiff(String a,String b){
        int diff=0;
        for(int i=0;i<a.length();i++){
            if(a.charAt(i)!=b.charAt(i))
                diff++;
        }

        return diff;
    }
}
```

```java
DFS
class Solution {

    private int min=9;

    public int minMutation(String start, String end, String[] bank) {

        if(start.equals(end))
            return 0;
        if(bank==null || bank.length==0)
            return -1;

        Map<String,List<String>> graph=new HashMap<>();
        int n=bank.length;

        //init start 
        for(String b:bank){
            int diff=testDiff(start,b);
            if(diff==1){
                graph.putIfAbsent(start,new ArrayList<>());
                graph.putIfAbsent(b,new ArrayList<>());
                graph.get(start).add(b);
                graph.get(b).add(start);
            }
        }

        //build graph
        for(int i=0;i<n;i++){
            String u=bank[i];
            for(int j=i+1;j<n;j++){
                String v=bank[j];
                int diff=testDiff(u,v);
                if(diff==1){
                    graph.putIfAbsent(u,new ArrayList<>());
                    graph.putIfAbsent(v,new ArrayList<>());
                    graph.get(u).add(v);
                    graph.get(v).add(u);
                }
            }
        }

        Set<String> visit=new HashSet<>();
        int res=dfs(start,end,graph,visit);
        return res==9?-1:res;
    }

    private int testDiff(String a,String b){
        int diff=0;
        for(int i=0;i<a.length();i++){
            if(a.charAt(i)!=b.charAt(i))
                diff++;
        }

        return diff;
    }

    private int dfs(String u,String e,Map<String,List<String>> graph,Set<String> visit){
        if(u.equals(e))
            return 0;

        visit.add(u);

        int min=9;
        for(String v:graph.get(u)){
            if(visit.contains(v)) continue;

            min=Math.min(min,dfs(v,e,graph,visit)+1);
        }

        visit.remove(u);

        return min;


    }
}
```


{% include disqus.html %}

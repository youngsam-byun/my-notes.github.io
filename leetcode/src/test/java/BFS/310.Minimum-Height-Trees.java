package BFS;

import java.util.*;

class Solution310 {

    public List<Integer> findMinHeightTrees(int n, int[][] edges) {

        if(n==1){
            List<Integer> res = new ArrayList<>(){
                {
                    add(0);
                }
            };
            return res;
        }

        int[] inDegree=new int[n];
        Map<Integer,List<Integer>> graph=new HashMap<>();
        for(int i=0;i<n;i++){
            graph.put(i,new ArrayList<>());
        }
        for(int[] ed:edges){
            int u=ed[0],v=ed[1];
            graph.get(u).add(v);
            graph.get(v).add(u);
            inDegree[u]++;
            inDegree[v]++;
        }

        Queue<Integer> q = new LinkedList<>();
        for(int i=0;i<inDegree.length;i++){
            if(inDegree[i]==1)
                q.offer(i);
        }

        int count=n;
        while(count>2){

            int size=q.size();
            count-=size;
            for(int i=0;i<size;i++){
                int u=q.poll();
                for(int v:graph.get(u)){
                    if(--inDegree[v]==1)
                        q.offer(v);
                }
            }

        }

        return new ArrayList<>(q);
    }
}
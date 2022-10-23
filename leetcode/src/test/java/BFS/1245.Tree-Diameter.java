package BFS;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

class Solution1245 {

    int max=0;
    public int treeDiameter(int[][] edges) {

        Map<Integer, List<Integer>> graph  = new HashMap<>();
        int n=edges.length;

        for(int i=0;i<n+1;i++){
            graph.put(i,new ArrayList<>());
        }

        for(int[] ed:edges){
            int u=ed[0],v=ed[1];
            graph.get(u).add(v);
        }

        dfs(0,graph);
        return max;
    }

    private int dfs(int u,Map<Integer,List<Integer>> graph){

        int max1=0,max2=0;

        for(int v:graph.get(u)){
            int r=dfs(v,graph);
            if(max1<r){
                max2=max1;
                max1=r;
            }else if(max2<r){
                max2=r;
            }
        }

        max=Math.max(max,max1+max2);
        return max1+1;

    }
}
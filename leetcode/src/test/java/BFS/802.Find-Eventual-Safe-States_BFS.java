package BFS;

import java.util.ArrayList;
import java.util.List;

class Solution802 {

    public List<Integer> eventualSafeNodes(int[][] graph) {

        int n=graph.length;
        int[] visit=new int[n];

        List<Integer> res = new ArrayList<>();
        for(int i=0;i<n;i++){
            if(dfs(i,graph,visit)==1)
                res.add(i);
        }

        return res;
    }

    private int dfs(int u,int[][] graph,int[] visit){

        if(visit[u]!=0)
            return visit[u];

        visit[u]=-1;

        for(int v:graph[u]){
            if(visit[v]==-1||dfs(v,graph,visit)==-1)
                return -1;

        }

        return visit[u]=1;
    }

//     public List<Integer> eventualSafeNodes(int[][] graph) {

//         int n=graph.length;
//         Map<Integer,List<Integer>> reverseGraph=new HashMap<>();
//         for(int i=0;i<n;i++){
//             reverseGraph.put(i,new ArrayList<>());
//         }

//         int[] outDegree=new int[n];
//         for(int u=0;u<n;u++){
//             for(int v:graph[u]){
//                 outDegree[u]++;
//                 reverseGraph.get(v).add(u);
//             }
//         }

//         Queue<Integer> q = new LinkedList<>();
//         for(int i=0;i<n;i++){
//             if(outDegree[i]==0)
//                 q.offer(i);
//         }

//         while(!q.isEmpty()){
//             int v=q.poll();
//             for(int u:reverseGraph.get(v)){
//                 if(--outDegree[u]==0)
//                     q.offer(u);
//             }
//         }

//         List<Integer> res = new ArrayList<>();
//         for(int i=0;i<n;i++){
//             if(outDegree[i]==0)
//                 res.add(i);
//         }

//         return res;


//     }
}
package BFS;

import java.util.*;

class Solution207 {

    //bfs
    public boolean canFinish(int numCourses, int[][] prerequisites) {

        //init graph
        int[] inDegree=new int[numCourses];
        Map<Integer, List<Integer>> graph = new HashMap<>();
        for(int i=0;i<numCourses;i++){
            graph.put(i,new ArrayList<>());
        }

        //construct graph
        for(int[] p:prerequisites){
            int u=p[0],v=p[1];
            graph.get(u).add(v);
            inDegree[v]++;
        }

        Queue<Integer> q=new LinkedList<>();
        for(int i=0;i<inDegree.length;i++){
            if(inDegree[i]==0)
                q.offer(i);
        }

        while(!q.isEmpty()){
            int u=q.poll();

            for(int v:graph.get(u)){
                if(--inDegree[v]==0)
                    q.offer(v);
            }

        }

        for(int i=0;i<inDegree.length;i++){
            if(inDegree[i]!=0)
                return false;
        }

        return true;
    }



    //dfs
//     public boolean canFinish(int numCourses, int[][] prerequisites) {

//         //init graph
//         Map<Integer,Integer> visit=new HashMap<>();
//         Map<Integer,List<Integer>> graph = new HashMap<>();
//         for(int i=0;i<numCourses;i++){
//             visit.put(i,0);
//             graph.put(i,new ArrayList<>());
//         }

//         //construct graph
//         for(int[] p:prerequisites){
//             int u=p[0],v=p[1];
//             graph.get(u).add(v);
//         }


//         for(int i=0;i<numCourses;i++){
//             if(!dfs(i,graph,visit))
//                 return false;
//         }

//         for(Map.Entry<Integer,Integer> et:visit.entrySet()){
//             if(et.getValue()!=2)
//                 return false;
//         }

//         return true;
//     }

//     private boolean dfs(int u,Map<Integer,List<Integer>> graph,Map<Integer,Integer> visit){

//         visit.put(u,1);

//         for(int v:graph.get(u)){
//             if(visit.get(v)==2) continue;
//             if(visit.get(v)==1)
//                 return false;

//             if(!dfs(v,graph,visit))
//                 return false;

//         }

//         visit.put(u,2);
//         return true;

//     }
}
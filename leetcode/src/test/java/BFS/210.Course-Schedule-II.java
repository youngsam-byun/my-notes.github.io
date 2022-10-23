package BFS;

import java.util.*;

class Solution210 {
    public int[] findOrder(int numCourses, int[][] prerequisites) {

        Map<Integer, List<Integer>> graph = new HashMap<>();
        Map<Integer,Integer> visit = new HashMap<>();
        for(int i=0;i<numCourses;i++){
            graph.put(i,new ArrayList<>());
            visit.put(i,0);
        }

        int[] inDegree=new int[numCourses];
        for(int[] p:prerequisites){
            int u=p[0],v=p[1];
            graph.get(v).add(u);
            inDegree[u]++;
        }

        Queue<Integer> q =new LinkedList<>();
        for(int i=0;i<inDegree.length;i++){
            if(inDegree[i]==0){
                q.offer(i);
            }
        }

        List<Integer> res = new ArrayList<>();
        while(!q.isEmpty()){
            int u=q.poll();
            if(!dfs(u,graph,visit,res)){
                return new int[]{};
            }

        }

        if(res.size()!=numCourses)
            return new int[]{};

        return res.stream().mapToInt(i->i).toArray();

    }


    private boolean dfs(int u,Map<Integer,List<Integer>> graph,Map<Integer,Integer> visit,List<Integer> res){


        visit.put(u,1);

        for(int v:graph.get(u)){
            if(visit.get(v)==2) continue;
            if(visit.get(v)==1)
                return false;

            if(!dfs(v,graph,visit,res))
                return false;
        }

        res.add(0,u);
        visit.put(u,2);

        return true;

    }


}
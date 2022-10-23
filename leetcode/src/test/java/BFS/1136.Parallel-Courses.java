package BFS;

import java.util.*;

class Solution1136 {
    public int minimumSemesters(int n, int[][] relations) {

        Map<Integer, List<Integer>> graph = new HashMap<>();
        for(int i=0;i<n;i++){
            graph.put(i,new ArrayList<>());
        }

        int[] inDegree=new int[n];
        for(int[] r:relations){
            int u=r[0]-1,v=r[1]-1;
            graph.get(u).add(v);
            inDegree[v]++;
        }


        Queue<Integer> q=new LinkedList<>();
        for(int i=0;i<n;i++){
            if(inDegree[i]==0){
                q.offer(i);
            }
        }

        Set<Integer> visit=new HashSet<>();
        int res=0;
        while(!q.isEmpty()){

            int size=q.size();
            res++;

            for(int i=0;i<size;i++){
                int u=q.poll();

                if(!visit.add(u))
                    return -1;

                if(visit.size()==n)
                    return res;


                for(int v:graph.get(u)){
                    if(--inDegree[v]==0){
                        q.offer(v);
                    }
                }


            }

        }


        return -1;
    }
}
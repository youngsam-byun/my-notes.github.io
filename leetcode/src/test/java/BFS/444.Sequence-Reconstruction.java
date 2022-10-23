package BFS;

import java.util.*;

//https://en.wikipedia.org/wiki/Topological_sorting#Uniqueness
class Solution444 {
    public boolean sequenceReconstruction(int[] nums, List<List<Integer>> sequences) {

        int n=nums.length;
        int[] inDegree = new int[n+1];
        Map<Integer,List<Integer>> graph = new HashMap<>();

        for(List<Integer> seq:sequences){

            for(int i=0;i<seq.size();i++){
                int v=seq.get(i);
                graph.putIfAbsent(v,new ArrayList<>());

                if(i==0) continue;

                int u=seq.get(i-1);
                graph.get(u).add(v);
                inDegree[v]++;
            }
        }

        Queue<Integer> q = new LinkedList<>();
        for(int i=1;i<=n;i++){
            if(inDegree[i]==0){
                q.offer(i);
            }
        }

        List<Integer> list = new ArrayList<>();
        while(!q.isEmpty()){

            if(q.size()>1)
                return false;

            int u=q.poll();
            list.add(u);

            for(int v:graph.get(u)){

                if(--inDegree[v]==0)
                    q.offer(v);
            }
        }

        int[] res = list.stream().mapToInt(l->l).toArray();
        return Arrays.equals(res,nums);

    }
}
package BFS;

import java.util.*;

class Solution1203 {

    public int[] sortItems(int n, int m, int[] group, List<List<Integer>> beforeItems) {

        for(int i=0;i<group.length;i++){
            if(group[i]==-1)
                group[i]=m++;
        }

        //init graph
        Map<Integer,List<Integer>> groupGraph=new HashMap<>(),itemGraph=new HashMap<>();
        for(int i=0;i<m;i++){
            groupGraph.put(i,new ArrayList<>());
        }
        for(int i=0;i<n;i++){
            itemGraph.put(i,new ArrayList<>());
        }

        //build graph
        int[] groupIndegree=new int[m],itemIndegree=new int[n];
        for(int v=0;v<group.length;v++){

            int vg=group[v];
            List<Integer> bi=beforeItems.get(v);

            for(int u:bi){

                itemGraph.get(u).add(v);
                itemIndegree[v]++;

                int ug=group[u];
                if(ug!=vg){
                    groupGraph.get(ug).add(vg);
                    groupIndegree[vg]++;
                }
            }
        }

        List<Integer> groupList = bfs(groupGraph,groupIndegree,m);
        List<Integer> itemList =   bfs(itemGraph,itemIndegree,n);

        Map<Integer,List<Integer>> map = new HashMap<>();
        for(int i:itemList){
            int g=group[i];
            map.putIfAbsent(g,new ArrayList<>());
            map.get(g).add(i);
        }

        if(groupList.isEmpty()||itemList.isEmpty()){
            return new int[]{};
        }

        List<Integer> res = new ArrayList<>();
        for(int g:groupList){
            res.addAll(map.getOrDefault(g,new ArrayList<>()));
        }

        return res.stream().mapToInt(i->i).toArray();
    }

    private List<Integer> bfs(Map<Integer,List<Integer>> graph,int[] inDegree,int n){
        Queue<Integer> q = new LinkedList<>();

        for(int k:graph.keySet()){
            if(inDegree[k]==0){
                q.offer(k);
            }
        }

        List<Integer> res = new ArrayList<>();
        while(!q.isEmpty()){
            int u=q.poll();
            res.add(u);
            n--;
            for(int v:graph.get(u)){
                if(--inDegree[v]==0){
                    q.offer(v);
                }
            }
        }

        return n==0?res:new ArrayList<>();
    }


}
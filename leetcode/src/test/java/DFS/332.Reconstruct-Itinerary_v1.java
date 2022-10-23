package DFS;

import java.util.*;

class Solution332 {
    public List<String> findItinerary(List<List<String>> tickets) {

        Map<String,List<String>> graph=new HashMap<>();
        for(List<String> t:tickets){
            String u=t.get(0),v=t.get(1);
            graph.putIfAbsent(u,new ArrayList<>());
            graph.get(u).add(v);
        }

        for(Map.Entry<String,List<String>> et:graph.entrySet()){
            List<String> list = et.getValue();
            Collections.sort(list);
        }

        List<String> res = new ArrayList<>();
        res.add("JFK");
        int size=tickets.size();
        dfs("JFK",size,graph,res);
        return res;

    }

    private boolean dfs(String u,int total,Map<String,List<String>> graph,List<String> res){

        if(total==0)
            return true;

        if(!graph.containsKey(u))
            return false;

        List<String> list=graph.get(u);
        int size=list.size();

        for(int i=0;i<size;i++){
            String v=list.get(i);

            res.add(v);
            list.remove(i);

            if(dfs(v,total-1,graph,res))
                return true;

            list.add(i,v);
            res.remove(res.size()-1);
        }

        return false;
    }
}
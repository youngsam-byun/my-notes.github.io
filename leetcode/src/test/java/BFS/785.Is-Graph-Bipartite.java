package BFS;

import java.util.LinkedList;
import java.util.Queue;

class Solution785 {
    public boolean isBipartite(int[][] graph) {

        int n=graph.length;
        int[] color=new int[n];
        Queue<Integer> q = new LinkedList<>();

        for(int i=0;i<n;i++){
            if(color[i]!=0) continue;

            color[i]=1;
            q.offer(i);

            while(!q.isEmpty()){

                int u=q.poll();
                int c=color[u];
                for(int v:graph[u]){
                    if(color[v]==c)
                        return false;
                    else if(color[v]==0){
                        color[v]=-c;
                        q.offer(v);
                    }

                }

            }
        }

        for(int i=0;i<n;i++){
            if(color[i]==0)
                return false;
        }

        return true;
    }
}
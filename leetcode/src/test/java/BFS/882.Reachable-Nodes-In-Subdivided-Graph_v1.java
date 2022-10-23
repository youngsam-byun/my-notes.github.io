package BFS;

import java.util.Arrays;
import java.util.PriorityQueue;

class Solution882 {
    public int reachableNodes(int[][] edges, int maxMoves, int n) {

        //init
        int[][] distance=new int[n][n];
        for(int i=0;i<n;i++){
            Arrays.fill(distance[i],-1);
        }


        for(int[] ed:edges){
            int u=ed[0],v=ed[1],c=ed[2];
            distance[u][v]=c;
            distance[v][u]=c;
        }

        PriorityQueue<int[]> q = new PriorityQueue<>((a, b)->Integer.compare(b[1],a[1]));
        q.offer(new int[]{0,maxMoves});

        boolean[] visit=new boolean[n];
        int res=0;

        while(!q.isEmpty()){

            int[] curr=q.poll();
            int u=curr[0],move=curr[1];
            if(visit[u]) continue;
            visit[u]=true;
            res++;

            for(int v=0;v<n;v++){
                if(distance[u][v]==-1) continue;

                if(distance[u][v]<move && !visit[v]){
                    q.offer(new int[]{v,move-distance[u][v]-1});
                }

                int min=Math.min(move,distance[u][v]);
                distance[v][u]-=min;
                res+=min;
            }
        }


        return res;
    }
}
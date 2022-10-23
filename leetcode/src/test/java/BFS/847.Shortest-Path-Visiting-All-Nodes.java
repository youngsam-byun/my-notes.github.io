package BFS;

import java.util.Arrays;
import java.util.LinkedList;
import java.util.Queue;

class Solution847 {
    public int shortestPathLength(int[][] graph) {

        //total length of vertex
        int n=graph.length;

        //total bit required to mark visited vertex
        int totalBitRequired=(int)Math.pow(2,n);

        //final status is e.g: 11111
        int fullyVisitedMask=totalBitRequired-1;


        //init
        int[][] cost=new int[n][totalBitRequired];
        for(int i=0;i<n;i++)
            Arrays.fill(cost[i],-1);

        Queue<int[]> q = new LinkedList<>();
        for(int i=0;i<n;i++){
            int mask=mask(0,i);
            q.offer(new int[]{i,mask});
            cost[i][mask]=0;
        }

        while(!q.isEmpty()){

            int[] curr=q.poll();
            int currVertex=curr[0],currMask=curr[1];

            if(currMask==fullyVisitedMask)
                return cost[currVertex][currMask];

            for(int v:graph[currVertex]){

                int nextVertex=v;
                int nextMask=mask(currMask,v);

                //already visited vertext check
                if(cost[nextVertex][nextMask]!=-1) continue;

                cost[nextVertex][nextMask]=cost[currVertex][currMask]+1;
                q.offer(new int[]{nextVertex,nextMask});
            }

        }

        return -1;

    }

    private int mask(int current,int shift){

        return current|(1<<shift);
    }
}
package BFS;

import java.util.HashSet;
import java.util.PriorityQueue;
import java.util.Set;

class Solution1066 {
    public int assignBikes(int[][] workers, int[][] bikes) {

        int n=workers.length,m=bikes.length;
        PriorityQueue<int[]> q = new PriorityQueue<>((a, b)->Integer.compare(a[2],b[2]));
        q.offer(new int[]{0,0,0});

        Set<String> visit=new HashSet<>();

        while(!q.isEmpty()){

            int[] curr=q.poll();
            int idx=curr[0],mask=curr[1],res=curr[2];
            String key=idx+","+mask;

            if(!visit.add(key))
                continue;

            if(idx==n)
                return res;

            for(int i=0;i<m;i++){
                if((mask&(1<<i))==0){
                    int dist=dist(idx,i,workers,bikes);
                    q.offer(new int[]{idx+1,mask|(1<<i),res+dist});
                }
            }
        }

        return -1;
    }

    private int dist(int i,int j,int[][] workers,int[][] bikes){
        return Math.abs(workers[i][0]-bikes[j][0])+Math.abs(workers[i][1]-bikes[j][1]);
    }
}
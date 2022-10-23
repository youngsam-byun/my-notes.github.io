package BFS;

import java.util.*;

class Solution743 {

    public int networkDelayTime(int[][] times, int n, int K) {

        K--;
        double[] cost=new double[n];
        Arrays.fill(cost,Double.POSITIVE_INFINITY);
        cost[K]=0d;

        Map<Integer, List<int[]>> map = new HashMap<>();
        for(int i=0;i<n;i++)
            map.put(i,new ArrayList<>());

        for(int[] t:times){
            int u=t[0]-1,v=t[1]-1,c=t[2];
            map.get(u).add(new int[]{v,c});
        }

        PriorityQueue<int[]> pq = new PriorityQueue<>((a,b)->Integer.compare(a[1],b[1]));
        pq.offer(new int[]{K,0});
        while(!pq.isEmpty()){
            int[] curr=pq.poll();
            int u=curr[0],c1=curr[1];

            for(int[] vs:map.get(u)){
                int v=vs[0],c2=vs[1];
                if(c1+c2<cost[v]){
                    cost[v]=c1+c2;
                    pq.offer(new int[]{v,c1+c2});
                }
            }

        }

        double res=Arrays.stream(cost).max().getAsDouble();

        return res==Double.POSITIVE_INFINITY?-1:(int)res;


    }

//     public int networkDelayTime(int[][] times, int n, int K) {

//         K--;
//         double[] cost=new double[n];
//         Arrays.fill(cost,Double.POSITIVE_INFINITY);
//         cost[K]=0d;


//         int N=n;
//         while(N-->1){
//             for(int[] t:times){
//                 int u=t[0]-1,v=t[1]-1,c=t[2];
//                 if(cost[u]+c<cost[v]){
//                     cost[v]=cost[u]+c;
//                 }
//             }
//         }

//         double res=Arrays.stream(cost).max().getAsDouble();

//         return res==Double.POSITIVE_INFINITY?-1:(int)res;


//     }

//     public int networkDelayTime(int[][] times, int n, int K) {

//         double[][] cost=new double[n][n];
//         for(int i=0;i<n;i++){
//             Arrays.fill(cost[i],Double.POSITIVE_INFINITY);
//             cost[i][i]=0d;
//         }

//         for(int[] t:times){
//             int u=t[0]-1,v=t[1]-1,c=t[2];
//             cost[u][v]=c;
//         }

//         for(int i=0;i<n;i++){
//             for(int j=0;j<n;j++){
//                 for(int k=0;k<n;k++){
//                     if(cost[j][i]+cost[i][k]<cost[j][k]){
//                         cost[j][k]=cost[j][i]+cost[i][k];
//                     }
//                 }
//             }
//         }

//         K--;
//         double res=Arrays.stream(cost[K]).max().getAsDouble();

//         return res==Double.POSITIVE_INFINITY?-1:(int)res;


//     }
}
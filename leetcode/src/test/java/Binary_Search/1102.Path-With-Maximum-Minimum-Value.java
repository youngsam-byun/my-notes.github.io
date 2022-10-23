package Binary_Search;

import java.util.PriorityQueue;

class Solution1102 {

    public int maximumMinimumPath(int[][] grid) {

        int m=grid.length,n=grid[0].length;

        PriorityQueue<int[]> pq = new PriorityQueue<>((a, b)->Integer.compare(b[2],a[2]));
        pq.offer(new int[]{0,0,grid[0][0]});

        boolean[][] visit = new boolean[m][n];
        visit[0][0]=true;

        int[][] moves=new int[][]{{-1,0},{0,1},{1,0},{0,-1}};

        while(!pq.isEmpty()){

            int[] curr=pq.poll();
            int x=curr[0],y=curr[1],cost=curr[2];

            if(x==m-1&&y==n-1)
                return cost;

            for(int[] mo:moves){

                int nx=x+mo[0],ny=y+mo[1];
                if(nx<0||nx>=m||ny<0||ny>=n||visit[nx][ny])
                    continue;

                pq.offer(new int[]{nx,ny,Math.min(cost,grid[nx][ny])});
                visit[nx][ny]=true;
            }


        }

        return -1;

    }
}
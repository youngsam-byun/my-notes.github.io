package BFS;

import java.util.PriorityQueue;

class Solution778 {
    public int swimInWater(int[][] grid) {

        int m=grid.length,n=grid[0].length;
        boolean[][] visit = new boolean[m][n];

        PriorityQueue<int[]> pq = new PriorityQueue<>((a, b)->Integer.compare(a[2],b[2]));
        pq.offer(new int[]{0,0,grid[0][0]});
        visit[0][0]=true;

        int[][] moves={{0,1},{1,0},{0,-1},{-1,0}};
        while(!pq.isEmpty()){

            int[] u=pq.poll();
            int x=u[0];
            int y=u[1];
            int elevation=u[2];


            if(x==m-1 && y==n-1)
                return elevation;

            for(int i=0;i<4;i++){
                int x2=x+moves[i][0];
                int y2=y+moves[i][1];

                if(x2<0||y2<0||x2>=m||y2>=n||visit[x2][y2])
                    continue;

                visit[x2][y2]=true;
                int max=Math.max(elevation,grid[x2][y2]);
                pq.offer(new int[]{x2,y2,max});
            }
        }

        return -1;
    }
}
package BFS;

import java.util.PriorityQueue;

class Solution505{

    public int shortestDistance(int[][] maze, int[] start, int[] destination) {

        int m=maze.length,n=maze[0].length;
        int[][] res = new int[m][n];
        int sx=start[0],sy=start[1],dx=destination[0],dy=destination[1];

        PriorityQueue<int[]> q = new PriorityQueue<>((a, b)->Integer.compare(a[2],b[2]));
        q.offer(new int[]{sx,sy,0});

        int[][] moves=new int[][]{{-1,0},{0,1},{1,0},{0,-1}};
        while(!q.isEmpty()){

            int[] u=q.poll();
            int x=u[0],y=u[1],c=u[2];

            if(x==dx&&y==dy)
                return c;

            for(int[] mo:moves){

                int x2=x,y2=y;
                int mx=mo[0],my=mo[1],step=res[x][y];
                while(x2+mx<m&&y2+my<n&&x2+mx>=0&&y2+my>=0&&maze[x2+mx][y2+my]==0 ){
                    x2+=mx;
                    y2+=my;
                    step++;
                }

                if((x==x2&&y==y2) ||(0<res[x2][y2] && res[x2][y2] < step))
                    continue;


                q.offer(new int[]{x2,y2,step});
                res[x2][y2]=step;
            }
        }

        return -1;
    }
}
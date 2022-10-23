package BFS;

import java.util.LinkedList;
import java.util.Queue;

class Solution {

    public boolean hasPath(int[][] maze, int[] start, int[] destination) {

        int m=maze.length,n=maze[0].length;
        boolean[][] visit=new boolean[m][n];
        int sx=start[0],sy=start[1],dx=destination[0],dy=destination[1];


        Queue<int[]> q = new LinkedList<>();
        q.offer(start);
        visit[sx][sy]=true;

        int[][] moves=new int[][]{{-1,0},{0,1},{1,0},{0,-1}};
        while(!q.isEmpty()){

            int[] u=q.poll();
            int x=u[0],y=u[1];

            if(x==dx&&y==dy)
                return true;

            for(int[] mo:moves){
                int x2=x,y2=y;
                int mx=mo[0],my=mo[1];

                while(x2+mx<m&&y2+my<n&&x2+mx>=0&&y2+my>=0&&maze[x2+mx][y2+my]==0 ){
                    x2+=mx;
                    y2+=my;
                }

                if(visit[x2][y2]) continue;
                q.offer(new int[]{x2,y2});
                visit[x2][y2]=true;

            }
        }

        return false;
    }

}
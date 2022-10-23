package BFS;

import java.util.PriorityQueue;

class Solution407 {
    public int trapRainWater(int[][] heightMap) {
        int m=heightMap.length;
        int n=heightMap[0].length;

        PriorityQueue<int[]> pq=new PriorityQueue<>((a, b)->a[2]-b[2]);

        for(int i=0;i<n;i++){
            pq.offer(new int[]{0,i,heightMap[0][i]});
            pq.offer(new int[]{m-1,i,heightMap[m-1][i]});
        }
        for(int i=1;i<m-1;i++){
            pq.offer(new int[]{i,0,heightMap[i][0]});
            pq.offer(new int[]{i,n-1,heightMap[i][n-1]});
        }


        int res=0;

        boolean[][] visited = new boolean[m][n];

        while(!pq.isEmpty()){
            int[] p = pq.poll();
            visited[p[0]][p[1]]=true;
            int h=p[2];
            int[][] dir=new int[][]{{-1,0},{0,1},{1,0},{0,-1}};


            for(int[] d:dir){

                int x=p[0]+d[0];
                int y=p[1]+d[1];

                if(x<0||y<0||x>=m||y>=n || visited[x][y])
                    continue;

                visited[x][y]=true;
                int h2=heightMap[x][y];
                res += Math.max(0,h-h2);
                pq.offer(new int[]{x,y,Math.max(h,h2)});
            }

        }

        return res;



    }
}
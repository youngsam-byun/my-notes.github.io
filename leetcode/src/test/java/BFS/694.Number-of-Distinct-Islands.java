package BFS;

import java.util.*;

class Solution694 {
    public int numDistinctIslands(int[][] grid) {


        int m=grid.length,n=grid[0].length;
        Queue<int[]> q = new LinkedList<>();
        boolean[][] visit=new boolean[m][n];
        Set<String> res = new HashSet<>();
        for(int i=0;i<m;i++){
            for(int j=0;j<n;j++){
                if(grid[i][j]==1 && !visit[i][j]){
                    res.add(bfs(i,j,grid,visit));
                }
            }
        }

        return res.size();
    }

    private String bfs(int r,int c,int[][] grid,boolean[][] visit){

        Queue<int[]> q = new LinkedList<>();
        q.offer(new int[]{r,c});
        visit[r][c]=true;
        List<int[]> res = new ArrayList<>();

        int[][] moves=new int[][]{{-1,0},{0,1},{1,0},{0,-1}};
        int m=grid.length,n=grid[0].length;

        while(!q.isEmpty()){

            int[] u =q.poll();
            int x=u[0],y=u[1];
            res.add(new int[]{x-r,y-c});

            for(int i=0;i<moves.length;i++){
                int x2=x+moves[i][0],y2=y+moves[i][1];
                if(x2<0||x2>=m||y2<0||y2>=n||grid[x2][y2]==0||visit[x2][y2]) continue;
                q.offer(new int[]{x2,y2});
                visit[x2][y2]=true;
            }

        }

        Collections.sort(res,(a, b)->{
            if(a[0]==b[0])
                return Integer.compare(a[1],b[1]);

            return Integer.compare(a[0],b[0]);
        });

        StringBuilder sb = new StringBuilder();
        for(int[] re:res)
            sb.append(Arrays.toString(re));

        // System.out.println(sb.toString());

        return sb.toString();
    }
}
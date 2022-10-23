package DFS;

import java.util.Collections;

class Solution200 {
    public int numIslands(char[][] grid) {
        int m=grid.length,n=grid[0].length;
        boolean[][] visit=new boolean[m][n];
        int res=0;
        for(int i=0;i<m;i++){
            for(int j=0;j<n;j++){
                if(!visit[i][j]&&grid[i][j]=='1'){
                    dfs(grid,i,j,visit);
                    res++;
                }
            }
        }
        return res;
    }

    private void dfs(char[][] A,int r,int c,boolean[][] b){
        int m=A.length,n=A[0].length;

        if(r<0||r>=m||c<0||c>=n||A[r][c]=='0'||b[r][c])
            return;

        b[r][c]=true;
        dfs(A,r-1,c,b);
        dfs(A,r+1,c,b);
        dfs(A,r,c-1,b);
        dfs(A,r,c+1,b);
    }
}

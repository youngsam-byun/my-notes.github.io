package DFS;

class Solution351 {
    public int numberOfPatterns(int m, int n) {

        int[][] move=new int[10][10];
        move[1][3]=move[3][1]=2;
        move[1][7]=move[7][1]=4;
        move[3][9]=move[9][3]=6;
        move[7][9]=move[9][7]=8;
        move[1][9]=move[9][1]=move[2][8]=move[8][2]=move[3][7]=move[7][3]=move[4][6]=move[6][4]=5;

        long res=0;
        for(int i=m;i<=n;i++){
            res += dfs(1,i,new boolean[10],move)*4;
            res += dfs(2,i,new boolean[10],move)*4;
            res += dfs(5,i,new boolean[10],move);
        }

        return (int)res;
    }


    private long dfs(int u,int t,boolean[] visit,int[][] move){

        if(t==1)
            return 1;

        visit[u]=true;

        long res=0;
        for(int v=1;v<=9;v++){
            if(visit[v])
                continue;

            if(!visit[v] && (move[u][v]==0 || visit[move[u][v]])){
                res += dfs(v,t-1,visit,move);
            }

        }

        visit[u]=false;

        return res;

    }

}
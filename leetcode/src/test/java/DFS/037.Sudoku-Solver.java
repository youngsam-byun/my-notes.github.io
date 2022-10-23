package DFS;

class Solution037 {
    public void solveSudoku(char[][] board) {
        dfs(board,0,0);
    }

    private boolean test(char[][] A,int r,int c,char k){
        int m=A.length,n=A[0].length;

        for(int j=0;j<n;j++){
            if(A[r][j]==k)
                return false;
        }

        for(int i=0;i<m;i++){
            if(A[i][c]==k)
                return false;
        }

        int row=(r/3)*3;
        int col=(c/3)*3;

        for(int i=row;i<row+3;i++){
            for(int j=col;j<col+3;j++){
                if(A[i][j]==k)
                    return false;
            }
        }


        return true;
    }

    private boolean dfs(char[][] A,int r,int c){
        int m=A.length,n=A[0].length;
        if(c==n){
            r++;
            c=0;
        }

        if(r==m)
            return true;

        if(A[r][c]=='.'){

            for(char k='1';k<='9';k++){
                if(test(A,r,c,k)){
                    A[r][c]=k;
                    if(dfs(A,r,c+1)){
                        return true;
                    }
                    else{
                        A[r][c]='.';
                    }
                }
            }


        }else if(dfs(A,r,c+1))
            return true;

        return false;

    }
}
package DFS;

class Solution329 {
    public int longestIncreasingPath(int[][] matrix) {

        int m=matrix.length,n=matrix[0].length,res=0;
        Integer[][] memo = new Integer[m][n];

        for(int i=0;i<m;i++){
            for(int j=0;j<n;j++){
                res=Math.max(res,dfs(matrix,i,j,memo));
            }
        }

        return res;
    }

    private int dfs(int[][] A,int r,int c,Integer[][] memo){

        int m=A.length,n=A[0].length,res=1;

        if(memo[r][c]!=null)
            return memo[r][c];

        if(r-1>=0 && A[r][c]<A[r-1][c])
            res=Math.max(res,dfs(A,r-1,c,memo)+1);
        if(r+1<m && A[r][c]<A[r+1][c])
            res=Math.max(res,dfs(A,r+1,c,memo)+1);

        if(c-1>=0 && A[r][c]<A[r][c-1])
            res=Math.max(res,dfs(A,r,c-1,memo)+1);

        if(c+1<n && A[r][c]<A[r][c+1])
            res=Math.max(res,dfs(A,r,c+1,memo)+1);

        return memo[r][c]=res;

    }
}
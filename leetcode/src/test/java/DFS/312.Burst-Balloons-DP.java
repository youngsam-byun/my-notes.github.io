package DFS;

class Solution312 {

    /**
     dp with memoization o(n^2)
     **/

    public int maxCoins(int[] nums) {
        int n=nums.length;
        Integer[][] memo=new Integer[n][n];
        return dfs(nums,0,n-1,memo);
    }

    private int dfs(int[] A,int i,int j,Integer[][] memo){

        if(i>j)
            return 0;

        if(memo[i][j]!=null)
            return memo[i][j];

        int max=0,n=A.length;
        for(int k=i;k<=j;k++){
            int left=i-1<0?1:A[i-1];
            int right=j+1>=n?1:A[j+1];
            int res=left*A[k]*right;
            max=Math.max(max,dfs(A,i,k-1,memo)+res+dfs(A,k+1,j,memo));
        }

        return memo[i][j]=max;
    }


    /**
     divide and conconquer o(n^n)
     TLE
     **/

//    public int maxCoins(int[] nums) {
//
//        int n=nums.length;
//        return dfs(nums,0,n-1);
//    }
//
//    private int dfs(int[] A,int i,int j){
//
//        if(i>j)
//            return 0;
//
//        int max=0,n=A.length;
//        for(int k=i;k<=j;k++){
//            int left=i-1<0?1:A[i-1];
//            int right=j+1>=n?1:A[j+1];
//            int res=left*A[k]*right;
//            max=Math.max(max,dfs(A,i,k-1)+res+dfs(A,k+1,j));
//        }
//
//        return max;
//    }

}
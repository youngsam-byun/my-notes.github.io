package Binary_Search;

class Solution1292 {
    public int maxSideLength(int[][] mat, int threshold) {

        int m=mat.length,n=mat[0].length,res=0,len=1;

        //o(m*n) , init and find prefix sum of matrix
        int[][] sum=new int[m+1][n+1];
        for(int i=1;i<=m;i++){
            for(int j=1;j<=n;j++){
                sum[i][j]=sum[i-1][j]+sum[i][j-1]-sum[i-1][j-1]+mat[i-1][j-1];

                if(i>=len && j>=len && sum[i][j]-sum[i-len][j]-sum[i][j-len]+sum[i-len][j-len]<=threshold){
                    res=len++;
                }
            }
        }


        return res;
    }

//     public int maxSideLength(int[][] mat, int threshold) {

//         int m=mat.length,n=mat[0].length,res=0;

//         //o(m*n) , init and find prefix sum of matrix
//         int[][] sum=new int[m+1][n+1];
//         for(int i=1;i<=m;i++){
//             for(int j=1;j<=n;j++){
//                 sum[i][j]=sum[i-1][j]+sum[i][j-1]-sum[i-1][j-1]+mat[i-1][j-1];
//             }
//         }


//         //mnlog(min(m,n)), binary search based on length k to test if condition satisfy
//         int l=0,r=Math.min(m,n);
//         while(l<r){
//             int mid=l+(r-l+1)/2;
//             if(test(sum,mid,threshold)){
//                 l=mid;
//             }else{
//                 r=mid-1;
//             }
//         }

//         return l;
//     }

    //o(mn), test area sum is smaller or equal that given threshold
    private boolean test(int[][] sum,int k,int threshold){
        int m=sum.length,n=sum[0].length;

        for(int i=k;i<m;i++){
            for(int j=k;j<n;j++){
                if(sum[i][j]-sum[i-k][j]-sum[i][j-k]+sum[i-k][j-k]<=threshold)
                    return true;
            }
        }

        return false;
    }
}
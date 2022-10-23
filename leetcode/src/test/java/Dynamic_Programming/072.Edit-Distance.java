package Dynamic_Programming;

class Solution072 {

    public int minDistance(String word1, String word2) {

        int m=word1.length(),n=word2.length();
        Integer[][] memo=new Integer[m][n];
        return dfs(word1,0,word2,0,memo);
    }


    private int dfs(String w1,int i,String w2,int j,Integer[][] memo){

        int m=w1.length(),n=w2.length();
        if(i==m)
            return n-j;
        if(j==n)
            return m-i;

        if(memo[i][j]!=null)
            return memo[i][j];


        if(w1.charAt(i)==w2.charAt(j))
            memo[i][j]=dfs(w1,i+1,w2,j+1,memo);
        else{

            //insert
            memo[i][j]=dfs(w1,i,w2,j+1,memo)+1;

            //remove
            memo[i][j]=Math.min(memo[i][j],dfs(w1,i+1,w2,j,memo)+1);

            //replace
            memo[i][j]=Math.min(memo[i][j],dfs(w1,i+1,w2,j+1,memo)+1);


        }

        return memo[i][j];
    }

//     public int minDistance(String word1, String word2) {

//         int k=lcs(word1,word2);
//         int m=word1.length(),n=word2.length();
//         //word1 - lcs --> remove
//         //word2 - lcs --> add

//         return (m-k);
//     }

//     private int lcs(String w1,String w2){

//         int m=w1.length(),n=w2.length();
//         int[][] memo=new int[m+1][n+1];
//         int max=0;
//         for(int i=0;i<m;i++){
//             for(int j=0;j<n;j++){
//                 if(w1.charAt(i)==w2.charAt(j)){
//                     memo[i+1][j+1]=memo[i][j]+1;
//                 }else{
//                     memo[i+1][j+1]=Math.max(memo[i+1][j],memo[i][j]);
//                 }
//                 max=Math.max(max,memo[i+1][j+1]);
//             }

//             System.out.println(Arrays.toString(memo[i+1]));

//         }

//         return max;
//     }
}
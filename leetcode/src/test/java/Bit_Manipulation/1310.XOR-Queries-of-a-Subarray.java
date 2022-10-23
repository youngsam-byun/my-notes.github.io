package Bit_Manipulation;

class Solution1310 {
    public int[] xorQueries(int[] arr, int[][] queries) {

        for(int i=1;i<arr.length;i++){
            arr[i]^=arr[i-1];
        }

        int[] res = new int[queries.length];
        for(int i=0;i<queries.length;i++){
            int[] q=queries[i];
            int l=q[0],r=q[1];
            res[i]=l==0?arr[r]:arr[l-1]^arr[r];
        }

        return res;
    }
}
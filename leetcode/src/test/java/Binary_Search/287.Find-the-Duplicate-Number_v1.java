package Binary_Search;

class Solution {
    public int findDuplicate(int[] A) {

        int n=A.length,l=1,r=n-1;

        while(l<r){
            int m=l+(r-l)/2;
            int count=countSmallerOrEqual(A,m);

            if(count<=m){
                l=m+1;
            }else
                r=m;
        }

        return l;
    }

    private int countSmallerOrEqual(int[] A,int k){
        int res=0;
        for(int a:A){
            if(a<=k)
                res++;
        }
        return res;
    }
}
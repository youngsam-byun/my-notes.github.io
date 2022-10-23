package Binary_Search;

class Solution33 {

    private int findRotateIndex(int[] A){
        for(int i=0;i<A.length-1;i++){
            if(A[i]>A[i+1])
                return i+1;
        }
        return 0;
    }

    public int search(int[] A, int target) {

        int idx=findRotateIndex(A);

        /**
         0  1 2 3 4 5 6 7 8
         [4,5,6,7,8,0,1,2,3]4,5,6,7,8
         **/

        int n=A.length,l=idx,r=n+idx;

        while(l<=r){

            int m=l+(r-l)/2;

            // System.out.println(l+", "+m+", "+r);

            if(m<n){
                if(A[m]==target)
                    return m;
                else if(A[m]<target)
                    l=m+1;
                else
                    r=m-1;
            }else{
                if(A[m%n]==target)
                    return m%n;
                else if(A[m%n]<target)
                    l=m+1;
                else
                    r=m-1;
            }
        }

        return -1;
    }
}
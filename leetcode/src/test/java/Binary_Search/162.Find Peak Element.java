package Binary_Search;

class Solution162 {
    public int findPeakElement(int[] A) {

        if(A==null || A.length<=1)
            return 0;

        int n=A.length;
        if(A[0]>A[1])
            return 0;
        else if(A[n-2]<A[n-1])
            return n-1;

        int l=1,r=n-2;
        while(l<=r){
            int m=l+(r-l)/2;
            if(A[m-1]<A[m]&&A[m]>A[m+1])
                return m;
            else if(A[m-1]>A[m])
                r=m;
            else if(A[m]<A[m+1])
                l=m+1;
        }

        return l;

    }
}
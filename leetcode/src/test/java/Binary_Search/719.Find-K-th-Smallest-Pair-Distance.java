package Binary_Search;

import java.util.Arrays;

class Solution719 {
    public int smallestDistancePair(int[] A, int k) {

        Arrays.sort(A);
        int n=A.length;
        int min=A[n-1];
        for(int i=1;i<n;i++)
            min=Math.min(min,A[i]-A[i-1]);

        int l=min,r=A[n-1]-A[0];

        while(l<r){

            int m=l+(r-l)/2;
            int count=count(A,m);
            if(count<k)
                l=m+1;
            else
                r=m;
        }

        return l;
    }

    private int count2(int[] A,int l,int r,int k){

        while(l<r){
            int m=l+(r-l)/2;
            if(A[m]<=k)
                l=m+1;
            else
                r=m;
        }
        return l;
    }

    private int count(int[] A,int m){
        int count=0;
        for(int i=0;i<A.length;i++){
            // int j=i;
            // while(j<A.length && A[j]-A[i]<=m)
            //     j++;
            int j=count2(A,i,A.length,A[i]+m);
            count+=(j-i-1);
        }

        return count;

    }

}
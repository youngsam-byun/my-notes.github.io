package Binary_Search;

import java.util.Arrays;

class Solution1011 {
    public int shipWithinDays(int[] W, int days) {

        int n=W.length,l= Arrays.stream(W).max().getAsInt(),r=Arrays.stream(W).sum();
        while(l<r){
            int m=l+(r-l)/2;
            int d=count(W,m);
            // System.out.println(m+ " with " + d);
            if(days<d)
                l=m+1;
            else
                r=m;
        }
        return l;
    }

    private int count(int[] W,int m){
        int day=1;
        int M=m;
        for(int i=0;i<W.length;i++){
            if(M-W[i]<0){
                M=m;
                day++;
            }
            M-=W[i];
        }
        return day;
    }
}
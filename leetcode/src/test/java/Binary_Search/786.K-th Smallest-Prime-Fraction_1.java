package Binary_Search;

class Solution786_1 {

    public int[] kthSmallestPrimeFraction(int[] arr, int k) {

        double l=0,r=1.0;
        while(l<r){
            double m=l+(r-l)/2;
            int[] res=count(arr,m);
            int count=res[0],i=res[1],j=res[2];
            if(count<k){
                l=m;
            }
            else if(count>k){
                r=m;
            }else{
                return new int[]{arr[i],arr[j]};
            }
        }

        return new int[]{};
    }

    private int[] count(int[] A,double m){
        int n=A.length,count=0,j=1;
        double max=0d;
        int first=0,second=0;

        for(int i=0;i<n-1;i++){
            while(j<n&&m*A[j]<A[i])
                j++;

            count+=(n-j);

            if(j==n)
                break;

            double f=A[i]/(double)A[j];
            if(max<f){
                max=f;
                first=i;
                second=j;
            }

        }

        return new int[]{count,first,second};
    }

}
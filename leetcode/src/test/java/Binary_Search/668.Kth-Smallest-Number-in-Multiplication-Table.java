package Binary_Search;

class Solution668 {
    public int findKthNumber(int m, int n, int k) {

        int l=1,r=m*n;

        while(l<r){
            int mid=l+(r-l)/2;
            int count=count(m,n,mid);
            if(count<k)
                l=mid+1;
            else
                r=mid;
        }
        return l;
    }
    private int count(int m,int n,int mid){
        int count=0;
        for(int i=1;i<=m;i++){
            int min=Math.min(mid/i,n);
            count+=min;
        }

        return count;
    }
}
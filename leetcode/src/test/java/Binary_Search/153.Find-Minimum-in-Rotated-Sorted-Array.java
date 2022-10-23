package Binary_Search;

class Solution153 {
    public int findMin(int[] nums) {
        int idx=findRotatedIndex(nums);
        return nums[idx];
    }

    private int findRotatedIndex(int[] A){
        int n=A.length,k=A[n-1];
        int l=0,r=n-1;

        while(l<r){
            int m=l+(r-l)/2;
            if(A[m]>k)
                l=m+1;
            else
                r=m;
        }
        return l;
    }
}
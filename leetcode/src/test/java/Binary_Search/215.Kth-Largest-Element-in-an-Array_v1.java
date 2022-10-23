package Binary_Search;

class Solution215 {
    public int findKthLargest(int[] nums, int k) {

        int n=nums.length,l=0,r=n-1,nk=n-k;

        while(l<=r){

            int idx=partition(nums,l,r);

            if(idx<nk)
                l=idx+1;
            else if(idx>nk)
                r=idx-1;
            else
                break;
        }

        return nums[nk];
    }

    private int partition(int[] A,int l,int r){
        int v=A[r];
        int j=l;
        for(int i=l;i<r;i++){
            if(A[i]<=v){
                swap(A,j++,i);
            }
        }
        swap(A,j,r);

        return j;
    }

    private void swap(int[] A,int i,int j){
        int t=A[i];
        A[i]=A[j];
        A[j]=t;
    }

}
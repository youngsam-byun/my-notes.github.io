package Binary_Search;

class Solution1060 {
    public int missingElement(int[] nums, int k) {

        int n=nums.length,l=0,r=n-1;

        int miss=nums[n-1]-nums[0]+1-(n-1+1);
        if(miss<k)
            return nums[r]+k-miss;

        while(l<r-1){

            int m=l+(r-l)/2;
            miss=nums[m]-nums[l]+1-(m-l+1);

            if(miss<k){
                k-=miss;
                l=m;
            }
            else{
                r=m;
            }

        }

        return nums[l]+k;
    }
}
package Binary_Search;

class Solution81 {
    public boolean search(int[] nums, int target) {

        int n=nums.length,l=0,r=n-1;
        while(l<=r){

            while(l<r && nums[l]==nums[l+1])
                l++;

            while(l<r && nums[r-1]==nums[r])
                r--;

            int m=l+(r-l)/2;

            if(nums[m]==target)
                return true;

            if(nums[l]<=nums[m]){
                if(nums[l]<=target && target<=nums[m])
                    r=m-1;
                else
                    l=m+1;
            }else{// if(nums[m]<nums[r]){
                if(nums[m]<=target && target<=nums[r])
                    l=m+1;
                else
                    r=m-1;
            }
        }

        return false;
    }
}
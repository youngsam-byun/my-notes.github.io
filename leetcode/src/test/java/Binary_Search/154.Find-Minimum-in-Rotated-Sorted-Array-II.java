package Binary_Search;

class Solution154 {

    public int findMin(int[] nums) {

        int n=nums.length,l=0,r=n-1;

        while(l<r){

            int m=l+(r-l)/2;

            if(nums[m]>nums[r]){
                l=m+1;
            }
            else if(nums[m]<nums[r]){
                r=m;
            }else{
                if(r>0&&nums[r-1]>nums[r]){
                    l=r;
                    break;
                }else{
                    r--;
                }
            }
        }

        return nums[l];

    }

}
package Binary_Search;

class Solution34 {
    public int[] searchRange(int[] nums, int target) {

        if(nums==null || nums.length==0)
            return new int[]{-1,-1};

        int n=nums.length,l=0,r=n-1;
        int left=-1,right=-1;

        while(l<r){
            int m=l+(r-l)/2;
            if(nums[m]<target)
                l=m+1;
            else
                r=m;
        }

        if(nums[l]!=target)
            return new int[]{-1,-1};

        left=l;
        r=n-1;

        while(l<r){
            int m=l+(r-l+1)/2;
            if(target<nums[m])
                r=m-1;
            else
                l=m;
        }

        right=l;
        return new int[]{left,right};
    }
}
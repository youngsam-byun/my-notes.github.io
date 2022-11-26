package Dynamic_Programming;

class Solution053 {

    public int maxSubArray(int[] nums) {
        

        int n=nums.length, memo[] = new int[n];
        memo[0]=nums[0];
        int globalMax=nums[0],localMax=nums[0];


        for(int i=1;i<n;i++){
            int a=nums[i];

            if(a<=localMax+a){
                localMax+=a;
            }else{
                localMax=a;
            }
            globalMax=Math.max(globalMax,localMax);
        }

        return globalMax;

    }

}
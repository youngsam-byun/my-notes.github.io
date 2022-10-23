package DFS;

import java.util.Arrays;

class Solution473 {
    public boolean canPartitionKSubsets(int[] nums, int k) {
        int sum= Arrays.stream(nums).sum();
        int n=nums.length;
        Boolean[] memo=new Boolean[1<<n];

        return dfs(0,0,sum/k,k,nums,memo);
    }

    private boolean dfs(int mask,int curr,int target,int k,int[] nums,Boolean[] memo){
        int n=nums.length;

        if(k==0){
            return mask==(1<<n)-1;
        }

        if(memo[mask]!=null){
            return memo[mask];
        }

        for(int i=0;i<nums.length;i++){

            if(curr+nums[i]>target) continue;

            int next=mask|(1<<i);
            if(mask==next) continue;

            if(curr+nums[i]==target){
                if(dfs(next,0,target,k-1,nums,memo))
                    return memo[mask]=true;
            }else{
                if(dfs(next,curr+nums[i],target,k,nums,memo))
                    return memo[mask]=true;
            }
        }

        return memo[mask]=false;
    }
}


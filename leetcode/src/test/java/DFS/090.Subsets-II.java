package DFS;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

class Solution090 {
    public List<List<Integer>> subsetsWithDup(int[] nums) {
        List<List<Integer>> res = new ArrayList<>();
        res.add(new ArrayList<>());
        Arrays.sort(nums);
        int n=nums.length;

        // Set<List<Integer>> set = new HashSet<>();
        int size=res.size();
        for(int i=0;i<n;i++){
            int start=i>0&&nums[i]==nums[i-1]?size:0;
            size=res.size();
            for(int j=start;j<size;j++){
                List<Integer> list=new ArrayList<>(res.get(j));
                list.add(nums[i]);
                // if(set.add(list)){
                res.add(list);
                // }
            }


        }

        return res;
    }
}
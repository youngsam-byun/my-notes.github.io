package DFS;

import java.util.*;

class Solution040 {
    public List<List<Integer>> combinationSum2(int[] candidates, int target) {
        Arrays.sort(candidates);
        Set<List<Integer>> res = new HashSet<>();
        dfs(candidates,target,0,new ArrayList<>(),res);
        return new ArrayList<>(res);
    }

    private void dfs(int[] A,int t,int idx,List<Integer> list,Set<List<Integer>> res){
        if(t==0){
            res.add(new ArrayList<>(list));
            return;
        }
        if(t<0){
            return;
        }

        int n=A.length;
        for(int i=idx;i<n;i++){
            if(i>idx && A[i]==A[i-1]) continue;

            list.add(A[i]);
            System.out.println(list.toString());

            dfs(A,t-A[i],i+1,list,res);
            list.remove(list.size()-1);
        }

    }
};

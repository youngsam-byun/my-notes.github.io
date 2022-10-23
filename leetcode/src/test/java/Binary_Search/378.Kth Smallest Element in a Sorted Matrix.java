package Binary_Search;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.PriorityQueue;

class Solution378 {
    public List<List<Integer>> kSmallestPairs(int[] nums1, int[] nums2, int k) {

        int m=nums1.length,n=nums2.length;
        PriorityQueue<List<Integer>> pq = new PriorityQueue<>((a, b)->{
            return Integer.compare(a.get(0)+a.get(1),b.get(0)+b.get(1));
        });

        for(int i=0;i<Math.min(m,k);i++){
            pq.offer(Arrays.asList(nums1[i],nums2[0],0));
        }

        List<List<Integer>> res= new ArrayList<>();
        while(k-->0 && !pq.isEmpty()){
            List<Integer> curr=pq.poll();
            int a=curr.get(0),b=curr.get(1),idx=curr.get(2);
            res.add(Arrays.asList(a,b));
            if(idx==n-1) continue;

            pq.offer(Arrays.asList(a,nums2[idx+1],idx+1));
        }

        return res;
    }
}
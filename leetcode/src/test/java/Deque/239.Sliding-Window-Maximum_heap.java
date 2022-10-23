package Deque;

import java.util.ArrayDeque;
import java.util.Deque;

class Solution239 {
    public int[] maxSlidingWindow(int[] A, int k) {

        int n = A.length;
        int[] res = new int[n - k + 1];

        Deque<Integer> dq = new ArrayDeque<>();

        for (int i = 0; i < n; i++) {

            while (!dq.isEmpty() && dq.peekFirst() < i - k + 1)
                dq.pollFirst();

            while (!dq.isEmpty() && A[dq.peekLast()] <= A[i])
                dq.pollLast();

            dq.offerLast(i);

            if (0 <= k - 1 && k - 1 <= i)
                res[i - k + 1] = A[dq.peekFirst()];

        }

        return res;

    }
}


// o(nlogn)
//     public int[] maxSlidingWindow(int[] nums, int k) {

//         TreeMap<Integer,Queue<Integer>> map =new TreeMap<>();
//         int i=0,count=0;
//         int[] res = new int[nums.length-k+1];

//         for(int j=0;j<nums.length;j++){
//             int n=nums[j];
//             map.putIfAbsent(n,new LinkedList<>());
//             map.get(n).offer(n);
//             count++;

//             if(count==k){
//                 int t=nums[i];
//                 map.get(t).poll();

//                 int lastKey=map.lastKey();
//                 res[i]=lastKey;

//                 if(map.get(t).isEmpty())
//                     map.remove(t);
//                 i++;
//                 count--;
//             }
//         }

//         return res;
//     }


//  n*(logn)^2
//     public int[] maxSlidingWindow(int[] nums, int k) {

//         List<Integer> list = new ArrayList<>();
//         int i=0;
//         int[] res= new int[nums.length-k+1];
//         for(int j=0;j<nums.length;j++){

//             int idx=binarySearch(list,nums[j]);
//             list.add(idx,nums[j]);

//             if(j-i+1>k){
//                 int a=nums[i];
//                 int idx2=binarySearch(list,a);
//                 list.remove(idx2);
//                 i++;
//             }

//             if(j-i+1==k)
//                 res[i]=list.get(list.size()-1);
//         }

//         return res;
//     }

//     private int binarySearch(List<Integer> A,int t){

//         int l=0,r=A.size();
//         while(l<r){
//             int m=l+(r-l)/2;
//             if(A.get(m)<t)
//                 l=m+1;
//             else
//                 r=m;
//         }
//         return l;
//     }
package Deque;

import java.util.ArrayDeque;
import java.util.Deque;

class Solution1438 {
    public int longestSubarray(int[] nums, int limit) {

        Deque<Integer> maxQ = new ArrayDeque<>(), minQ = new ArrayDeque<>();

        int res = 1, i = 0, j = 0;

        for (; i < nums.length; i++) {

            int a = nums[i];

            while (!maxQ.isEmpty() && maxQ.peekLast() < a)
                maxQ.pollLast();

            while (!minQ.isEmpty() && a < minQ.peekLast())
                minQ.pollLast();

            maxQ.offerLast(a);
            minQ.offerLast(a);

            while (!maxQ.isEmpty() && !minQ.isEmpty() && maxQ.peekFirst() - minQ.peekFirst() > limit) {
                int b = nums[j++];
                if (maxQ.peekFirst() == b)
                    maxQ.pollFirst();
                if (minQ.peekFirst() == b)
                    minQ.pollFirst();
            }


            res = Math.max(res, i - j + 1);

        }

        return res;
    }

    // public int longestSubarray(int[] A, int limit) {

//         int i=0,max=0,n=A.length;

//         TreeSet<Integer> set = new TreeSet<>((a,b)->{
//             if(A[a]==A[b])
//                 return Integer.compare(a,b);

//             return Integer.compare(A[a],A[b]);
//         });


//         for(int j=0;j<n;j++){
//             set.add(j);

//             while(A[set.last()]-A[set.first()]>limit){
//                 set.remove(i++);
//             }

//             max=Math.max(max,j-i+1);
//             // System.out.println(i +" , "+ j + " and "+ max + " with " + set.toString());
//         }

//         return max;
//     }
//     public int longestSubarray(int[] A, int limit) {

//         int n=A.length,i=0,max=1;
//         List<Integer> list=new ArrayList<>();
//         for(int j=0;j<n;j++){
//             int a=A[j];
//             int idx=Collections.binarySearch(list,a);
//             if(idx<0)
//                 idx=-idx-1;
//             list.add(idx,a);

//             while(list.get(list.size()-1) - list.get(0)>limit){
//                 int idx2=Collections.binarySearch(list,A[i]);
//                 list.remove(idx2);
//                 i++;
//             }
//             max=Math.max(max,list.size());
//         }
//         return max;
//     }

//     public int longestSubarray(int[] A, int limit) {

//         int i=0,max=0,n=A.length;

//         Deque<Integer> minQ=new ArrayDeque<>(),maxQ=new ArrayDeque<>();
//         for(int j=0;j<n;j++){

//             int a=A[j];

//             while(!maxQ.isEmpty() && maxQ.peekLast()<a)
//                 maxQ.pollLast();

//             while(!minQ.isEmpty() && a<minQ.peekLast())
//                 minQ.pollLast();

//             maxQ.offerLast(a);
//             minQ.offerLast(a);

//             if(maxQ.peekFirst()-minQ.peekFirst()>limit){
//                 if(maxQ.peekFirst()==A[i])
//                     maxQ.pollFirst();
//                 if(minQ.peekFirst()==A[i])
//                     minQ.pollFirst();

//                 i++;
//             }

//             max=Math.max(max,j-i+1);
//         }

//         return max;
//     }
}
package Deque;


import java.util.PriorityQueue;

class Solution1499 {

    public int findMaxValueOfEquation(int[][] points, int k) {

        //yi+yj+|xi-xj| = yi+yj+xj-xi = yi-xi + yj+xj

        PriorityQueue<int[]> pq = new PriorityQueue<>((a, b) -> {
            if (a[0] == b[0])
                return Integer.compare(a[1], b[1]);

            return Integer.compare(b[0], a[0]);
        });

        int n = points.length, res = Integer.MIN_VALUE;

        for (int i = 0; i < n; i++) {

            int[] p = points[i];
            int xj = p[0], yj = p[1];

            while (!pq.isEmpty() && Math.abs(pq.peek()[1] - xj) > k) {
                pq.poll();
            }

            if (!pq.isEmpty()) {
                res = Math.max(res, pq.peek()[0] + yj + xj);
            }

            pq.offer(new int[]{yj - xj, xj});

        }

        return res;
    }

//     public int findMaxValueOfEquation(int[][] points, int k) {

//         //yi+yj+|xi-xj| = yi+yj+xj-xi = yi-xi + yj+xj

//         Deque<int[]> dq = new ArrayDeque<>();
//         int n=points.length,res=Integer.MIN_VALUE;

//         for(int i=0;i<n;i++){

//             int[] p=points[i];
//             int xj=p[0],yj=p[1];

//             while(!dq.isEmpty()&& Math.abs(dq.peekFirst()[1]-xj)>k){
//                 dq.pollFirst();
//             }

//             if(!dq.isEmpty()){
//                 res=Math.max(res,dq.peekFirst()[0]+yj+xj);
//             }

//             while(!dq.isEmpty()&& dq.peekLast()[0]<=yj-xj){
//                 dq.pollLast();
//             }

//             dq.offerLast(new int[]{yj-xj,xj});

//         }

//         return res;
//     }

}
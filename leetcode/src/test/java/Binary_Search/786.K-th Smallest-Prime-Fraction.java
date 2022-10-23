package Binary_Search;

import java.util.PriorityQueue;

class Kth_Smallest_Prime_Fraction_Solution786_2 {
    public int[] kthSmallestPrimeFraction(int[] arr, int k) {

        //int[] 0 - nominator index
        //int[] 1 - denominator index
        //given a,b
        ///to sort ascending order compare
        // compare( a[0]/a[1] , b[0]/b[1])   ==  compare(a[0]*b[1],b[0]*a[1])
        // from queue
        // when denominator-1 index is still is greater than nominator index add it to queue
        // iterate above k-1 times
        // then kth element is in queue

        PriorityQueue<int[]> q = new PriorityQueue<>((a, b) -> Integer.compare(arr[a[0]] * arr[b[1]], arr[b[0]] * arr[a[1]]));

        int n = arr.length;
        // 0 is nominator index
        // 1 is denominotor index
        for (int i = 0; i < n; i++) {
            q.offer(new int[]{i, n - 1});
        }

        //k-1 times
        while (k-- > 1) {
            int[] curr = q.poll();
            int no = curr[0], deno = curr[1];
            if (no < deno - 1) {
                curr[1]--;
                q.offer(curr);
            }
        }

        //pop kth element is answer
        int[] res = q.poll();
        int no = res[0], deno = res[1];
        return new int[]{arr[no], arr[deno]};
    }
}
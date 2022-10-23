package Deque;

import java.util.Stack;

class Solution1776 {
    public double[] getCollisionTimes(int[][] cars) {

        int n = cars.length;
        double[] res = new double[n];
        Stack<Integer> stack = new Stack<>();

        for (int i = n - 1; i >= 0; i--) {

            res[i] = -1.0;
            int currP = cars[i][0], currS = cars[i][1];
            while (!stack.isEmpty()) {
                int j = stack.peek();
                int rightP = cars[j][0], rightS = cars[j][1];

                if (currS <= rightS ||
                        (0 <= res[j] && res[j] <= 1.0 * (rightP - currP) / (currS - rightS))
                )
                    stack.pop();
                else
                    break;
            }

            if (!stack.isEmpty()) {
                int j = stack.peek();
                int rightP = cars[j][0], rightS = cars[j][1];
                res[i] = 1.0 * (rightP - currP) / (currS - rightS);
            }

            stack.push(i);
        }

        return res;

    }
}
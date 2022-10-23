package DFS;

import java.util.*;

class Solution417 {
    public List<List<Integer>> pacificAtlantic(int[][] heights) {

        int m = heights.length, n = heights[0].length;

        //construct pacific
        Queue<int[]> q = new LinkedList<>();
        //init pacific
        for (int j = 0; j < n; j++) {
            q.offer(new int[]{0, j});
        }
        for (int i = 0; i < m; i++) {
            q.offer(new int[]{i, 0});
        }

        //update pacific
        int[][] moves = new int[][]{{-1, 0}, {0, 1}, {1, 0}, {0, -1}};

        boolean[][] pacific = new boolean[m][n];
        boolean[][] visit = new boolean[m][n];

        while (!q.isEmpty()) {

            int[] curr = q.poll();
            int r = curr[0], c = curr[1], h = heights[r][c];
            pacific[r][c] = true;
            visit[r][c] = true;

            for (int[] mo : moves) {
                int x = r + mo[0], y = c + mo[1];
                if (x < 0 || x >= m || y < 0 || y >= n || visit[x][y] || heights[x][y] < h) continue;

                q.offer(new int[]{x, y});
            }
        }

        //construct atlantic
        // q = new PriorityQueue<>((a,b)->Integer.compare(heights[a[0]][a[1]],heights[b[0]][b[1]]));
        //init atlantic
        for (int j = 0; j < n; j++) {
            q.offer(new int[]{m - 1, j});
        }
        for (int i = 0; i < m; i++) {
            q.offer(new int[]{i, n - 1});
        }

        //update atlantic
        boolean[][] atlantic = new boolean[m][n];
        visit = new boolean[m][n];

        while (!q.isEmpty()) {
            int[] curr = q.poll();
            int r = curr[0], c = curr[1], h = heights[r][c];
            atlantic[r][c] = true;
            visit[r][c] = true;

            for (int[] mo : moves) {
                int x = r + mo[0], y = c + mo[1];
                if (x < 0 || x >= m || y < 0 || y >= n || visit[x][y] || heights[x][y] < h) continue;
                q.offer(new int[]{x, y});
            }
        }

        List<List<Integer>> ans = new ArrayList<>();
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                // System.out.print("["+pacific[i][j]+","+atlantic[i][j]+"]");
                if (pacific[i][j] && atlantic[i][j])
                    ans.add(Arrays.asList(i, j));
            }
            // System.out.println();
        }

        return ans;
    }
}
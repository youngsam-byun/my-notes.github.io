package DFS;

import java.util.HashSet;
import java.util.Set;

/**
 * // This is the robot's control interface.
 * // You should not implement it, or speculate about its implementation
 * interface Robot {
 * // Returns true if the cell in front is open and robot moves into the cell.
 * // Returns false if the cell in front is blocked and robot stays in the current cell.
 * public boolean move();
 * <p>
 * // Robot will stay in the same cell after calling turnLeft/turnRight.
 * // Each turn will be 90 degrees.
 * public void turnLeft();
 * public void turnRight();
 * <p>
 * // Clean the current cell.
 * public void clean();
 * }
 */

interface Robot {
    public boolean move();

    public void turnLeft();

    public void turnRight();

    public void clean();
}

class Solution489 {
    int[][] moves = new int[][]{{-1, 0}, {0, 1}, {1, 0}, {0, -1}};

    public void cleanRoom(Robot robot) {

        Set<String> visit = new HashSet<>();
        dfs(robot, 0, 0, 0, visit);
    }

    private void dfs(Robot robot, int r, int c, int d, Set<String> visit) {

        robot.clean();
        visit.add(r + "," + c);

        for (int i = 0; i < 4; i++) {

            int x = r + moves[d][0], y = c + moves[d][1];
            String key = x + "," + y;

            if (!visit.contains(key) && robot.move()) {
                dfs(robot, x, y, d, visit);
            }

            robot.turnRight();
            d = (d + 1) % 4;
        }

        robot.turnLeft();
        robot.turnLeft();
        robot.move();
        robot.turnLeft();
        robot.turnLeft();

    }
}
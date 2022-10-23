package BFS;

import java.util.*;

class Solution815 {

    public int numBusesToDestination(int[][] routes, int source, int target) {

        int n = routes.length;
        HashMap<Integer, Set<Integer>> graph = new HashMap<>();
        for (int bus = 0; bus < routes.length; bus++) {
            for (int r : routes[bus]) {
                graph.putIfAbsent(r, new HashSet<Integer>());
                graph.get(r).add(bus);
            }
        }

        Queue<int[]> q = new ArrayDeque();
        q.offer(new int[] {source, 0});
        Set<Integer> visit = new HashSet<>();
        visit.add(source);

        boolean[] seen_routes = new boolean[n];

        while (!q.isEmpty()) {
            int[] curr=q.poll();
            int stop = curr[0],step=curr[1];

            if (stop == target)
                return step;

            for (int bus: graph.get(stop)) {

                if (seen_routes[bus]) continue;

                for (int nextStop : routes[bus]) {
                    if(!visit.add(nextStop)) continue;
                    q.offer(new int[] {nextStop, step + 1});
                }

                seen_routes[bus] = true;
            }
        }
        return -1;
    }

}
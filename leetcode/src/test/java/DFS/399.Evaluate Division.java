package DFS;

import java.util.*;

class Solution399 {
    public double[] calcEquation(List<List<String>> equations, double[] values, List<List<String>> queries) {

        Map<String, Map<String, Double>> map = new HashMap<>();
        int size = equations.size();
        for (int i = 0; i < size; i++) {
            List<String> eq = equations.get(i);
            String first = eq.get(0);
            String second = eq.get(1);
            double v = values[i];

            map.putIfAbsent(first, new HashMap<>());
            map.putIfAbsent(second, new HashMap<>());

            map.get(first).put(second, v);
            map.get(second).put(first, 1 / v);
        }

        int n = queries.size();
        double[] res = new double[n];
        for (int i = 0; i < n; i++) {
            List<String> q = queries.get(i);
            String first = q.get(0);
            String second = q.get(1);
            res[i] = dfs(first, second, map, new HashSet<String>());
        }

        return res;
    }

    private double dfs(String first, String second, Map<String, Map<String, Double>> map, Set<String> visit) {

        if (!map.containsKey(first) || !map.containsKey(second))
            return -1.0;

        if (first.equals(second))
            return 1.0;

        if (map.containsKey(first) && map.get(first).containsKey(second))
            return map.get(first).get(second);

        visit.add(first);

        for (Map.Entry<String, Double> et : map.get(first).entrySet()) {

            String k = et.getKey();

            if (visit.contains(k)) continue;

            double v1 = et.getValue();

            if (v1 == -1.0) continue;

            double v2 = dfs(k, second, map, visit);

            if (v2 == -1.0) continue;


            return v1 * v2;

        }

        return -1.0;

    }
}
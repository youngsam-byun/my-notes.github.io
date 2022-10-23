package DFS;

import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

class Solution403 {
    public boolean canCross(int[] stones) {

        Map<Integer, Set<Integer>> map = new HashMap<>();
        for (int s : stones) {
            map.put(s, new HashSet<>());
        }
        map.get(0).add(1);

        int n = stones.length, lastStep = stones[n - 1];
        for (int s : stones) {

            for (int t : map.get(s)) {

                int nt = s + t;
                if (nt == lastStep)
                    return true;
                Set<Integer> set = map.get(nt);
                if (set != null) {
                    if (t - 1 > 0)
                        set.add(t - 1);

                    set.add(t);

                    if (t + 1 <= lastStep)
                        set.add(t + 1);
                }

            }
        }

        return false;
    }
}
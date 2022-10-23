---
layout: page
title: 74_minimum_window_substring
nav_order: 2
grand_parent: Leetcode
parent: pointer
---

[https://leetcode.com/problems/minimum-window-substring/](https://leetcode.com/problems/minimum-window-substring/)

```java
class Solution {
    public String minWindow(String s, String t) {

        Map<Character, Integer> map = new HashMap<>();
        for (char c : t.toCharArray()) {
            map.put(c, map.getOrDefault(c, 0) + 1);
        }

        int i = 0, min = (int) (1e5);
        String res = "";
        int count = map.size();

        for (int j = 0; j < s.length(); j++) {
            char c = s.charAt(j);

            if (map.containsKey(c)) {
                map.put(c, map.getOrDefault(c, 0) - 1);

                if (map.get(c) == 0)
                    count--;

                while (count == 0) {
                    if (j - i + 1 < min) {
                        min = j - i + 1;
                        res = s.substring(i, j + 1);
                    }


                    char c2 = s.charAt(i);
                    if (map.containsKey(c2)) {
                        if (map.get(c2) == 0)
                            count++;

                        map.put(c2, map.getOrDefault(c2, 0) + 1);
                    }
                    i++;
                }
            }

        }

        return res;

    }
}
```




{% include disqus.html %}

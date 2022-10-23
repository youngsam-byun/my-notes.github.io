package Dynamic_Programming;

class Solution044 {

    public boolean isMatch(String s, String p) {
        int m = s.length(), n = p.length();
        boolean[][] memo = new boolean[m + 1][n + 1];
        memo[0][0] = true;

        for (
                int j = 0;
                j < n; j++) {
            if (p.charAt(j) == '*' && memo[0][j]) {
                memo[0][j + 1] = true;
            }
        }

        for (
                int i = 0;
                i < m; i++) {
            for (int j = 0; j < n; j++) {

                /**
                 s      abc                           abc
                 p      abc                           a.c
                 **/
                if (p.charAt(j) == s.charAt(i) || p.charAt(j) == '.') {
                    memo[i + 1][j + 1] = memo[i][j];
                }

                if (p.charAt(j) == '*') {
                    memo[i + 1][j + 1] = memo[i + 1][j] || memo[i][j + 1];
                }
            }
        }
        return memo[m][n];
    }

}

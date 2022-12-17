import java.util.Scanner;

public class Minimum_LCM_1765_M {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);
        int T = scanner.nextInt();
        while (T-- > 0) {
            int N = scanner.nextInt();
            int[] res = solve(N);
            System.out.println(res[0] + " " + res[1]);
        }
    }

    private static int[] solve(int N) {
        int min = Integer.MAX_VALUE;
        int a = -1, b = -1;
        if (N % 2 == 1) {
            for (int i = 1; i <= N / 2; i++) {
                int j = N - i;
                int lcm = lcm(i, j);
                if (lcm < min) {
                    min = lcm;
                    a = i;
                    b = j;
                }
            }
        }else{
            for (int i = 1; i < N ; i++){
                int j=N-i;
                if(j%i!=0)continue;
                int lcm = lcm(i, j);
                if (lcm < min) {
                    min = lcm;
                    a = i;
                    b = j;
                }
            }
        }

        return new int[]{a, b};
    }

    private static int lcm(int i, int j) {
        int gcd = gcd(i, j);
        return i * j / gcd;
    }

    private static int gcd(int i, int j) {
        if (j == 0)
            return i;

        return gcd(j, i % j);
    }
}

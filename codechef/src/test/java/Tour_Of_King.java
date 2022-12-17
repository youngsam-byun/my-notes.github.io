import java.util.Scanner;

public class Tour_Of_King {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);
        int T = scanner.nextInt();
        while (T-->0){
            int N=scanner.nextInt();
            int M=scanner.nextInt();
            System.out.println(solve(N,M));
        }
    }

    private static int solve(int N, int M) {
        return N*5+M*7;
    }
}

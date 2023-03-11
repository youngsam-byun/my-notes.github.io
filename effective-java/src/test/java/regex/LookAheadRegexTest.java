package regex;

import org.junit.jupiter.api.Test;

import java.util.Arrays;
import java.util.HashMap;

public class LookAheadRegexTest {

    @Test
    void test() {
        String str = "-1/2+1/2";
        String[] res1 = str.split("(?=[+-])");
        String[] res2 = str.split("[+-]");
        System.out.println(Arrays.toString(res1));
        System.out.println(Arrays.toString(res2));
        String test="/a/b/c";
        System.out.println(Arrays.toString(test.split("/")));
    }
}

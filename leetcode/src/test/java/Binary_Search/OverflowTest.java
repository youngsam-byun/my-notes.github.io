package Binary_Search;

import org.junit.jupiter.api.Test;

public class OverflowTest {

    @Test
    void test(){
        System.out.println(Integer.toBinaryString(Integer.MIN_VALUE));
        System.out.println(Integer.toBinaryString(-2));
        String result="01111111111111111111111111111110";
        System.out.println(Integer.valueOf(result,2));
        System.out.println(Integer.toBinaryString(2147483646));
    }
}

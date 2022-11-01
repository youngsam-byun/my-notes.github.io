package chapter3;

import org.junit.jupiter.api.Test;

public class EqualTest {

    @Test
    void givenObjectPrintTest(){
        Object o = new Object();
        System.out.println(o.equals(new Object()));
        System.out.println(o.equals(o));
        Thread thread = new Thread();
        System.out.println(thread.equals(new Thread()));
        System.out.println(thread.equals(thread));
    }
}

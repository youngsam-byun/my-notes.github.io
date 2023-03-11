import org.junit.jupiter.api.Test;

import java.util.LinkedHashSet;
import java.util.Set;

public class SomeTest {

    public class Pizza{
        int size;
        String a,b,c,d,e;

        private Pizza(int size, String a, String b, String c, String d, String e) {
            this.size = size;
            this.a = a;
            this.b = b;
            this.c = c;
            this.d = d;
            this.e = e;
        }

        public static class  Builder {

        }
    }
    @Test
    void linkedHashSetTest(){
        Set<Integer> set = new LinkedHashSet();
        set.add(1);
        set.add(2);
        set.add(3);
        System.out.println(set.iterator().next());
        set.add(1);
        System.out.println(set.iterator().next());
    }

    @Test
    void forLoopTest(){
        int j=0,i=0;
        for(;j<5;++i,++j){
            System.out.println(i+", "+j);
        }
        System.out.println(i+", "+j);
    }
}

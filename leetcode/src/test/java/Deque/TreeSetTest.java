package Deque;

import org.junit.jupiter.api.Test;

import java.util.TreeSet;

public class TreeSetTest {

    @Test
    void treeSetOrderTest(){
        TreeSet<Integer> set = new TreeSet<>();
        set.add(3);
        set.add(8);
        set.add(1);

        for(int s:set){
            System.out.println(s);
        }


    }
}

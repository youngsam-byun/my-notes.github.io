package com.example.spring;

import org.junit.jupiter.api.Test;

public class MathFunctionTest {


    @Test
    void ceilingTest(){
        int height= (int)Math.ceil((Math.log(3.9)/Math.log(2)));
        System.out.println(height);
    }
}

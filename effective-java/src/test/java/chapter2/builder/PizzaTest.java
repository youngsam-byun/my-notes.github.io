package chapter2.builder;

import org.junit.jupiter.api.Test;

import static chapter2.builder.NYPizza.Size.SMALL;

public class PizzaTest {

    @Test
    void givenBuilderWhenCreateReturnInstance() {

        Pizza nyPizza = new NYPizza.Builder(SMALL)
                .addTopping(Pizza.Topping.SAUSAGE)
                .addTopping(Pizza.Topping.ONION)
                .build();

        Pizza dominoPizza = new DominoPizza.Builder()
                .addTopping(Pizza.Topping.HAM)
                .sauceInside()
                .build();

        System.out.println(nyPizza);
        System.out.println(dominoPizza);

    }
}

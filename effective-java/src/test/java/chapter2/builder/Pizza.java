package chapter2.builder;

import java.util.EnumSet;
import java.util.Set;

public abstract class Pizza {
    private int size;
    private String a;
    private String b;
    private String c;
    private String d;
    private String e;

    public Pizza setSize(int size) {
        this.size = size;
        return this;
    }

    public Pizza setA(String a) {
        this.a = a;
        return this;
    }

    public Pizza setB(String b) {
        this.b = b;
        return this;
    }

    public Pizza setC(String c) {
        this.c = c;
        return this;
    }

    public Pizza setD(String d) {
        this.d = d;
        return this;
    }

    public Pizza setE(String e) {
        this.e = e;
        return this;
    }

    public enum Topping {HAM, MUSHROOM, ONION, PEPPER, SAUSAGE}

    final Set<Topping> toppings;

    abstract static class Builder<T extends Builder<T>> {
        EnumSet<Topping> toppings = EnumSet.noneOf(Topping.class);

        public T addTopping(Topping topping) {
            toppings.add(topping);
            return self();
        }

        abstract Pizza build();

        protected abstract T self();
    }

    Pizza(Builder<?> builder) {
        toppings = builder.toppings.clone();
    }

    @Override
    public String toString() {
        return "Pizza{" +
                "toppings=" + toppings +
                '}';
    }
}

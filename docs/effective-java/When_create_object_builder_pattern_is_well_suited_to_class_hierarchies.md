---
layout: page
parent: Effective_Java
nav_order: 1
title: When create object builder pattern is well suited to class hierarchies
---

### Test
```java
Pizza nyPizza = new NYPizza.Builder(SMALL)
        .addTopping(Pizza.Topping.SAUSAGE)
        .addTopping(Pizza.Topping.ONION)
        .build();

        Pizza dominoPizza = new DominoPizza.Builder()
        .addTopping(Pizza.Topping.HAM)
        .sauceInside()
        .build();

```

### Abstract super class Pizza
```java
package chapter2.builder;

import java.util.EnumSet;
import java.util.Set;

public abstract class Pizza {
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
```

### NYPizza
```java
package chapter2.builder;

import java.util.Objects;

public class NYPizza extends Pizza {
    public enum Size {SMALL, MEDIUM, LARGE}

    private final Size size;

    public static class Builder extends Pizza.Builder<Builder> {
        private final Size size;

        public Builder(Size size) {
            this.size = Objects.requireNonNull(size);
        }

        @Override
        Pizza build() {
            return new NYPizza(this);
        }

        @Override
        protected Builder self() {
            return this;
        }
    }

    NYPizza(Builder builder) {
        super(builder);
        size = builder.size;
    }
}

```


###DominoPizza
```java
package chapter2.builder;

public class DominoPizza extends Pizza{
    private final boolean sauceInside;

    public static class Builder extends Pizza.Builder<Builder>{

        private boolean sauceInside = false;

        public Builder sauceInside(){
            sauceInside=true;
            return this;
        }

        @Override
        Pizza build() {
            return new DominoPizza(this);
        }

        @Override
        protected Builder self() {
            return this;
        }
    }

    DominoPizza(Builder builder) {
        super(builder);
        sauceInside =builder.sauceInside;
    }
}

```

{% include disqus.html %}


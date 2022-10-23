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

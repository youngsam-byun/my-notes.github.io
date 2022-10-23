package test;

public class A {
    int i;
    String s;

    public A(int i, String s) {
        this.i = i;
        this.s = s;
    }

    @Override
    public String toString() {
        return this.getClass().getName() + "{" +
                "i=" + i +
                ", s='" + s + '\'' +
                '}';
    }
}

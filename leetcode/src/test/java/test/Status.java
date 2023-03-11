package test;


public enum Status {
    READ(0), WRITE(1), DELETE(2);
    private int val;
    Status(int val) {
        this.val = val;
    }

    @Override
    public String toString() {
        return this.getClass().getSimpleName()+"{"+ name()+"("+val+")"+"}";
    }
}

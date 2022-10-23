package Binary_Search;

class Solution29 {
    public int divide(int dividend, int divisor) {

        if(divisor==1)
            return dividend;
        if(dividend==Integer.MIN_VALUE&&divisor==-1)
            return Integer.MAX_VALUE;

        int a=Math.abs(dividend),b=Math.abs(divisor),sign=dividend>0==divisor>0?1:-1;

        int q=0;

        while(a-b>=0){

            int x=0;
            for(;a-(b<<(x+1))>=0;x++);
            q|=(1<<x);
            a-=(b<<x);

        }

        return sign*q;
    }
}
package Binary_Search;

class Solution1201 {
    public int nthUglyNumber(int n, int a, int b, int c) {
        long l=0,r=(long)(2e9),res=0;
        while(l<r){
            long m=l+(r-l)/2;
            long count=count(m,a,b,c);
            if(count>=n){
                r=m;
            }
            else{
                l=m+1;
            }
        }

        return (int)r;
    }

    private long count(long m,long a,long b,long c){
        return (m/a)+(m/b)+(m/c) - (m/lcm(a,b))-(m/lcm(b,c))-(m/lcm(c,a))+(m/lcm(a,lcm(b,c)));
    }

    private long lcm(long a,long b){
        return a*b/gcd(a,b);
    }

    private long gcd(long a,long b){
        if(a==0)
            return b;

        return gcd(b%a,a);
    }
}
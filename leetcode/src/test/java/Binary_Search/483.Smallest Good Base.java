package Binary_Search;

import java.math.*;

class Solution483 {

    public String smallestGoodBase(String s) {

        String res="";
        long n=Long.parseLong(s);

        for(int k=60;k>=2;k--){

            long l=2;
            long r=n+1;


            while(l<r){


                long x=l+(r-l)/2;
                // n = (x^k-1) / (x-1)
                // n*(x-1) = (x^k-1)

                // n*(x-1)
                BigInteger left = BigInteger.valueOf(n).multiply(BigInteger.valueOf(x).subtract(BigInteger.ONE));

                // x^k-1
                BigInteger right = BigInteger.valueOf(x).pow(k).subtract(BigInteger.ONE);


                int v=left.compareTo(right);
                if(v==0){
                    return x+"";
                }else if(v<0){
                    r=x;
                }else{
                    l=x+1;
                }
            }
        }

        return res;

    }
}
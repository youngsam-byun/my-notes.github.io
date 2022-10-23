package Dynamic_Programming;

class Solution091 {
    public int numDecodings(String s) {

        int n=s.length(),memo[] = new int[n+1];
        memo[0]=s.charAt(0)=='0'?0:1;


        for(int i=0;i<n;i++){

            int a=Integer.parseInt(s.substring(i,i+1));

            int b=0;
            if(i-1>=0)
                b=Integer.parseInt(s.substring(i-1,i+1));


            if(0<a&&a<10){
                memo[i+1]+=memo[i];
            }

            if(10<=b && b<=26){
                memo[i+1]+=memo[i-1];
            }

        }

        return memo[n];

    }
}
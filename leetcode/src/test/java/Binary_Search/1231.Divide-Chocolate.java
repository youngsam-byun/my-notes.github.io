package Binary_Search;

class Solution1231 {

    public int maximizeSweetness(int[] sweetness, int K) {

        int l=1,r=(int)(1e9);

        while(l<r){

            int m=l+(r-l+1)/2;

            if((K+1)<=test(sweetness,m))
                l=m;
            else
                r=m-1;

        }

        return l;

    }

    private int test(int[] S,int m){

        int chunk=0,count=0;
        for(int s:S){
            count+=s;
            if(count>=m){
                chunk++;
                count=0;
            }
        }

        return chunk;
    }
}
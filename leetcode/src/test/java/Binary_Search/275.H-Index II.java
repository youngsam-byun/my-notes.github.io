package Binary_Search;

class Solution275 {
    public int hIndex(int[] citations) {

        int n=citations.length,l=0,r=n;

        while(l<r){

            int h=l+(r-l+1)/2;
            int count=countHIndex(citations,h);
            if(count<h){
                r=h-1;
            }else{
                l=h;
            }
        }
        return l;
    }

    private int countHIndex(int[] A,int h){
        int res=0;
        for(int a:A){
            if(h<=a)
                res++;
        }
        return res;
    }
}
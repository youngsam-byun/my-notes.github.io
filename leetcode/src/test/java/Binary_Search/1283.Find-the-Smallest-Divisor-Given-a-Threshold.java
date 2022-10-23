package Binary_Search;

class Solution1283 {
    public int smallestDivisor(int[] nums, int threshold) {

        int n=nums.length,l=1,r=(int)(1e6);

        while(l<r){

            int m=l+(r-l)/2;
            int res=test(nums,m);
            if(res<=threshold){
                r=m;
            }
            else
                l=m+1;
        }

        return l;
    }

    private int test(int[] A,int k){

        int res=0;
        for(int a:A){
            if(a%k==0)
                res+=(a/k);
            else
                res+=((a/k)+1);
        }
        return res;

    }
}
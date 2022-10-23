package Bit_Manipulation;

class Solution260 {
    public int[] singleNumber(int[] nums) {

        int r=0;
        for(int n:nums){
            r^=n;
        }

        int a=0,b=0;
        for(int i=0;i<32;i++){
            for(int n:nums){
                if(((n>>i)&1)==1)
                    a^=(1<<i);
                else
                    b^=(1<<i);
            }
        }

        return new int[]{a,b};
    }
}
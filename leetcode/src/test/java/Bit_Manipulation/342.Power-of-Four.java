package Bit_Manipulation;

class Solution342 {
    public boolean isPowerOfFour(int num) {
        return num>0 && (num&(num-1))==0 && ((num&0x555555)!=0);
    }
};

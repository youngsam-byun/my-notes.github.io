package Bit_Manipulation;

class Solution1442 {

    public int countTriplets(int[] arr) {

        int n=arr.length;
        int[] prefix=new int[n+1];
        for(int i=1;i<prefix.length;i++)
            prefix[i]=prefix[i-1]^arr[i-1];

        int res=0;
        for(int i=0;i<prefix.length;i++){
            for(int j=i+1;j<prefix.length;j++){
                if(prefix[i]==prefix[j])
                    res+=(j-i-1);
            }
        }
        return res;
    }
}
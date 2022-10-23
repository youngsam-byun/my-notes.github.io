package Deque;

class Solution1562 {
    public int findLatestStep(int[] arr, int m) {

        int n=arr.length,res=-1;
        int[] len=new int[n+2];
        int[] counter=new int[n+1];

        for(int i=0;i<arr.length;i++){
            int a=arr[i];
            int left=len[a-1],right=len[a+1];
            len[a]=len[a-left]=len[a+right]=left+right+1;

            counter[left]--;
            counter[right]--;
            counter[len[a]]++;

            if(counter[m]>0)
                res=i+1;

        }

        return res;

    }
}
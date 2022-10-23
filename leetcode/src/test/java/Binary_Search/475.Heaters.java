package Binary_Search;

import java.util.Arrays;

class Solution475 {
    public int findRadius(int[] houses, int[] heaters) {

        Arrays.sort(heaters);
        int m=houses.length,n=heaters.length;
        int max=0;
        for(int i=0;i<m;i++){
            int house=houses[i];
            int idx=Arrays.binarySearch(heaters,house);
            if(idx<0){
                idx=-idx-1;
            }

            int left=idx==0?Integer.MAX_VALUE:Math.abs(heaters[idx-1]-house);
            int right=idx==n?Integer.MAX_VALUE:Math.abs(heaters[idx]-house);
            max=Math.max(max,Math.min(left,right));
        }

        return max;
    }
}
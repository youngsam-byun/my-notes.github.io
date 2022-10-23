package Bit_Manipulation;

import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

class Solution957 {
    public int[] prisonAfterNDays(int[] cells, int n) {

        Map<String,Integer> map = new HashMap<>();
        map.put(Arrays.toString(cells),n);

        while(n-->0){

            int[] tmp=new int[cells.length];
            // System.out.println(Arrays.toString(cells));

            for(int i=1;i<7;i++){
                if(cells[i-1]==cells[i+1])
                    tmp[i]=1;
            }

            cells=tmp;

            if(map.containsKey(Arrays.toString(cells))){
                int day=map.get(Arrays.toString(cells));
                int diff=day-n;
                n%=diff;
            }
            else
                map.put(Arrays.toString(cells),n);


        }


        return cells;

    }
}
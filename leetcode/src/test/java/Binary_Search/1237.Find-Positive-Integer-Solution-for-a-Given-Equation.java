package Binary_Search;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

/*
 * // This is the custom function interface.
 * // You should not implement it, or speculate about its implementation
 */
abstract class CustomFunction {
      // Returns f(x, y) for any given positive integers x and y.
     // Note that f(x, y) is increasing with respect to both x and y.
     // i.e. f(x, y) < f(x + 1, y), f(x, y) < f(x, y + 1)
     public abstract int f(int x, int y);
}

class Solution1237 {
    public List<List<Integer>> findSolution(CustomFunction customfunction, int z) {

        List<List<Integer>> res = new ArrayList<>();

        for(int x=1;x<=1000;x++){
            int l=1,r=1000;
            while(l<r){
                int y=l+(r-l)/2;
                if(customfunction.f(x,y)<z){
                    l=y+1;
                }
                else if(customfunction.f(x,y)==z){
                    res.add(Arrays.asList(x,y));
                    break;
                }else{
                    r=y;
                }
            }

        }

        return res;
    }
}
package Bit_Manipulation;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

class Solution1239 {

    public int maxLength(List<String> arr) {

        int n=arr.size();
        List<Integer> memo=new ArrayList<>();
        memo.add(0);
        int res=0;

        for(String s:arr){
            int dup=0,a=0;
            for(char c:s.toCharArray()){
                dup |= a&(1<<(c-'a'));
                a|= 1<<(c-'a');
            }

            if(dup>0) continue;

            int size=memo.size();

            for(int j=0;j<size;j++){

                if((memo.get(j)&a)>0) continue;

                res=Math.max(res,Integer.bitCount(memo.get(j)|a));
                memo.add(memo.get(j)|a);
            }
        }

        return res;
    }

//     public int maxLength(List<String> arr) {

//         int n=arr.size();
//         int[] A=new int[n];
//         Set<String> notUnique=new HashSet<>();
//         for(int i=0;i<n;i++){
//             String a=arr.get(i);
//             for(char c:a.toCharArray()){
//                 if((A[i]&(1<<(c-'a')))!=0){
//                     notUnique.add(a);
//                 }
//                 A[i]|= 1<<(c-'a');
//             }

//         }

//         return dfs(arr,A,0,0,"",notUnique);
//     }

    private int dfs(List<String> arr, int[] A, int idx, int mask, String s, Set<String> notUnique){
        int n=A.length;
        if(idx==n){
            return s.length();
        }

        int r1=0,r2=0;
        String a=arr.get(idx);

        if(!notUnique.contains(a) && (mask&A[idx])==0)
            r1=dfs(arr,A,idx+1,mask|A[idx],s+a,notUnique);

        r2=dfs(arr,A,idx+1,mask,s,notUnique);

        return Math.max(r1,r2);
    }
}
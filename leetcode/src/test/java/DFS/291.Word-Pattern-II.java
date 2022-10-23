package DFS;

import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

class Solution291 {

    public boolean wordPatternMatch(String pattern, String s) {
        Map<Character,String> map = new HashMap<>();
        Set<String> visit =new HashSet<>();
        return dfs(pattern,0,s,0,map,visit);

    }

    private boolean dfs(String P,int i,String S,int j,Map<Character,String> map,Set<String> visit ){

        int m=P.length(),n=S.length();
        if(i==m && j==n){
            return true;
        }
        if(i>=m || j>=n){
            return false;
        }

        char c=P.charAt(i);

        if(map.containsKey(c)){
            String s=map.get(c);
            if(!S.startsWith(s,j)){
                return false;
            }

            return dfs(P,i+1,S,j+s.length(),map,visit);
        }


        for(int k=j+1;k<=n;k++){

            String s=S.substring(j,k);
            if(!visit.add(s)) continue;

            map.put(c,s);

            if(dfs(P,i+1,S,k,map,visit)){
                return true;
            }

            visit.remove(s);
            map.remove(c);

        }

        return false;
    }
}
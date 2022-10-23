package DFS;

import java.util.ArrayList;
import java.util.List;

class Solution {
    public List<String> addOperators(String num, int target) {

        List<String> res = new ArrayList<>();
        for(int j=1;j<=num.length();j++){
            String s=num.substring(0,j);

            if(s.length()>1&&s.startsWith("0")) continue;

            long a=Long.valueOf(s);

            dfs(num,j,s,res,a,target,a);
        }

        return res;
    }

    private void dfs(String num,int idx,String t,List<String> res,long curr,long target,long prev){

        // System.out.println(t+","+idx+" = "+curr);

        int n=num.length();
        if(idx==n){
            if(curr==target){
                res.add(t);
            }
            return;
        }


        for(int j=idx+1;j<=num.length();j++){
            String s=num.substring(idx,j);

            if(s.length()>1&&s.startsWith("0")) continue;

            long a=Long.valueOf(s);

            dfs(num,j,t+"+"+a,res,curr+a,target,a);
            dfs(num,j,t+"-"+a,res,curr-a,target,-a);
            dfs(num,j,t+"*"+a,res,(curr-prev)+(prev*a),target,prev*a);
        }


    }
}
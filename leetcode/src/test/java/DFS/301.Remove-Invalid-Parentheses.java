package DFS;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

class Solution301 {
    public List<String> removeInvalidParentheses(String s) {

        Set<String> res = new HashSet<>();
        int left=0,right=0,open=0;
        for(char c:s.toCharArray()){
            if(c=='('){
                left++;
                open++;
            }else if(c==')'){
                if(left>0)
                    left--;
                else
                    right++;
            }
        }

        dfs(s,0,left,right,0,"",res);
        return new ArrayList<>(res);
    }

    private void dfs(String s,int idx,int left,int right,int open,String t,Set<String> res){

        if(left<0 || right<0 || open<0)
            return;

        int n=s.length();
        if(idx==n){
            if(left==0 && right==0 && open==0){
                res.add(t);
            }
            return;
        }


        char c=s.charAt(idx);
        if(c=='('){
            dfs(s,idx+1,left-1,right,open,t,res);
            dfs(s,idx+1,left,right,open+1,t+c,res);
        }else if(c==')'){
            dfs(s,idx+1,left,right-1,open,t,res);
            dfs(s,idx+1,left,right,open-1,t+c,res);
        }else{
            dfs(s,idx+1,left,right,open,t+c,res);
        }




    }
}
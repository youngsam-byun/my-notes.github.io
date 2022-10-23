package DFS;

import java.util.*;

class Solution051 {
    public List<List<String>> solveNQueens(int n) {
        Set<List<String>> res = new HashSet<>();
        char[][] B=new char[n][n];
        for(int j=0;j<n;j++){
            Arrays.fill(B[j],'.');
        }

        dfs(B,0,new ArrayList<>(), res);

        return new ArrayList<>(res);
    }

    private void dfs(char[][] B,int r,List<String> list, Set<List<String>> res){
        int n=B.length;

        if(r==n){
            res.add(new ArrayList<>(list));
            return;
        }

        for(int j=0;j<n;j++){
            if(!test(B,r,j)) continue;

            B[r][j]='Q';

            char[] cs =new char[n];
            Arrays.fill(cs,'.');
            cs[j]='Q';
            list.add(new String(cs));

            dfs(B,r+1,list,res);

            B[r][j]='.';
            list.remove(list.size()-1);
        }

    }

    private boolean test(char[][] B,int r,int c){
        int n=B.length;

        for(int j=0;j<n;j++){
            if(B[r][j]=='Q')
                return false;
        }

        for(int i=0;i<n;i++){
            if(B[i][c]=='Q')
                return false;
        }

        int x=r,y=c;
        while(x>=0 && y>=0){
            if(B[x--][y--]=='Q')
                return false;
        }

        x=r;
        y=c;
        while(x>=0 && y<n){
            if(B[x--][y++]=='Q')
                return false;
        }

        x=r;
        y=c;
        while(x<n && y<n){
            if(B[x++][y++]=='Q')
                return false;
        }

        x=r;
        y=c;
        while(x<n && y>=0){
            if(B[x++][y--]=='Q')
                return false;
        }

        return true;
    }
}

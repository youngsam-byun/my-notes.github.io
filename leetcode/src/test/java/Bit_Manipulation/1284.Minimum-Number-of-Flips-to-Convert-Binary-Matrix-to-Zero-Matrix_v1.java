package Bit_Manipulation;

import java.util.HashSet;
import java.util.LinkedList;
import java.util.Queue;
import java.util.Set;

class Solution1284 {
    public int minFlips(int[][] mat) {

        int m=mat.length,n=mat[0].length,start=0;
        for(int i=0;i<m;i++){
            for(int j=0;j<n;j++){
                start |= mat[i][j] << (i*n+j);
            }
        }

        Queue<Integer> q = new LinkedList<>();
        q.offer(start);

        Set<Integer> visit=new HashSet<>();
        visit.add(start);

        int[][] moves=new int[][]{{0,0},{-1,0},{0,1},{1,0},{0,-1}};
        int step=0;

        while(!q.isEmpty()){

            int size=q.size();
            for(int i=0;i<size;i++){
                int curr=q.poll();
                if(curr==0)
                    return step;

                for(int j=0;j<m;j++){
                    for(int k=0;k<n;k++){
                        int next=curr;

                        for(int[] mo:moves){
                            int x= j+mo[0],y=k+mo[1];
                            if(x<0||x>=m||y<0||y>=n) continue;

                            next ^= 1<<(x*n+y);
                        }

                        if(visit.add(next)){
                            q.offer(next);
                        }
                    }
                }
            }

            step++;
        }

        return -1;
    }
}
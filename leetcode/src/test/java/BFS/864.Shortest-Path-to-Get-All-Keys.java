package BFS;

import java.util.HashSet;
import java.util.LinkedList;
import java.util.Queue;
import java.util.Set;

class Solution864 {

    class Node{
        int r,c,keys;
        public Node(int r,int c,int keys){
            this.r=r;
            this.c=c;
            this.keys=keys;
        }
    }

    public int shortestPathAllKeys(String[] grid) {

        int m=grid.length,n=grid[0].length();

        int keyCount=0;;
        int sr=-1,sc=-1;

        for(int i=0;i<m;i++){
            for(int j=0;j<n;j++){
                char c =grid[i].charAt(j);

                if(c=='#');
                else if(c=='@'){
                    sr=i;
                    sc=j;
                }else if('a'<=c&&c<='f'){
                    keyCount++;
                }
            }
        }


        Queue<Node> q = new LinkedList<>();
        q.offer(new Node(sr,sc,0));

        Set<String> visit=new HashSet<>();
        visit.add(0+":"+0+","+0);

        int step=0;
        int totalKeys=toBit(keyCount);
        int[][] moves=new int[][]{{-1,0},{0,1},{1,0},{0,-1}};

        while(!q.isEmpty()){
            int size=q.size();

            for(int i=0;i<size;i++){
                Node u=q.poll();
                int r=u.r,c=u.c,keys=u.keys;

                if(keys==totalKeys)
                    return step;

                for(int[] mo:moves){
                    int x=r+mo[0],y=c+mo[1];
                    String s=keys+":"+x+","+y;

                    if(x<0||x>=m||y<0||y>=n||grid[x].charAt(y)=='#'||!visit.add(s)){
                        continue;
                    }

                    char c2=grid[x].charAt(y);
                    if('A'<=c2&&c2<='F'&& (keys&(1<<(c2-'a')))==0){
                        continue;
                    }

                    int newKeys=keys;
                    if('a'<=c2&&c2<='f'){
                        newKeys=mask(keys,c2-'a');
                    }

                    q.offer(new Node(x,y,newKeys));

                }

            }

            step++;
        }

        return -1;
    }

    private int mask(int keys,int shift){

        return keys|(1<<shift);
    }

    private int toBit(int keyCount){

        return (1<<keyCount)-1;
    }

}
package BFS;

import java.util.LinkedList;
import java.util.Queue;

class Solution529 {

    public char[][] updateBoard(char[][] board, int[] click) {

        int m=board.length,n=board[0].length;
        int r=click[0],c=click[1];

        if(board[r][c]=='M'){
            board[r][c]='X';
            return board;
        }

        Queue<int[]> q = new LinkedList<>();

        if(board[r][c]=='E'){

            int count=countMine(board,r,c);
            if(count>0){
                board[r][c]=(char)(count+'0');
                return board;
            }

            board[r][c]='B';

            for(int i=-1;i<=1;i++){
                for(int j=-1;j<=1;j++){
                    if(i==0&&j==0) continue;
                    int x=r+i,y=c+j;

                    if(x<0||y<0||x>=m||y>=n)
                        continue;

                    if(board[x][y]=='E')
                        q.offer(new int[]{x,y});
                }
            }

        }

        while(!q.isEmpty()){
            int[] curr=q.poll();
            board=updateBoard(board,curr);
        }

        return board;
    }

    private int countMine(char[][] board,int r,int c){
        int m=board.length,n=board[0].length;
        int count=0;
        for(int i=-1;i<=1;i++){
            for(int j=-1;j<=1;j++){
                if(i==0&&j==0) continue;

                int x=r+i,y=c+j;
                if(x<0||y<0||x>=m||y>=n)
                    continue;

                if(board[x][y]=='M'||board[x][y]=='X')
                    count++;
            }
        }
        return count;
    }
}
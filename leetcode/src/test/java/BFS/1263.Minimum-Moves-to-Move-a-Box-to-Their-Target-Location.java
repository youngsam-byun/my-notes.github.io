package BFS;

import java.util.*;

class Solution1263 {

    int[][] moves=new int[][]{{-1,0},{0,1},{1,0},{0,-1}};

    public int minPushBox(char[][] grid) {

        int[] start=null,box=null,target=null;
        int m=grid.length,n=grid[0].length;
        for(int i=0;i<m;i++){
            for(int j=0;j<n;j++){
                if(grid[i][j]=='S'){
                    start=new int[]{i,j};
                }else if(grid[i][j]=='B'){
                    box=new int[]{i,j};
                }else if(grid[i][j]=='T'){
                    target=new int[]{i,j};
                }
            }
        }

        //human x,y + box x,y
        int[] init=new int[]{start[0],start[1],box[0],box[1]};
        Queue<int[]> q=new LinkedList<>();
        q.offer(init);

        Set<String> visit=new HashSet<>();
        visit.add(Arrays.toString(init));
        int step=0;

        while(!q.isEmpty()){

            int size=q.size();
            for(int i=0;i<size;i++){
                int[] curr=q.poll();
                int humanX=curr[0],humanY=curr[1];
                int boxX=curr[2],boxY=curr[3];

                if(boxX==target[0]&&boxY==target[1]){
                    return step;
                }

                for(int[] mo:moves){
                    int x=boxX+mo[0],y=boxY+mo[1];
                    if(x<0||x>=m||y<0||y>=n||grid[x][y]=='#') continue;
                    String k=Arrays.toString(new int[]{boxX,boxY,x,y});
                    if(visit.contains(k)) continue;
                    int px=boxX-mo[0],py=boxY-mo[1];
                    if(!canPush(grid,humanX,humanY,px,py,boxX,boxY))continue;
                    visit.add(k);
                    q.offer(new int[]{boxX,boxY,x,y});
                }
            }
            step++;
        }

        return -1;
    }

    private boolean canPush(char[][] grid,int humanX,int humanY,int px,int py,int boxX,int boxY){

        int m=grid.length,n=grid[0].length;

        Queue<int[]> q = new LinkedList<>();
        q.offer(new int[]{humanX,humanY});

        Set<String> visit = new HashSet<>();
        visit.add(humanX+","+humanY);

        while(!q.isEmpty()){

            int[] curr=q.poll();
            int x=curr[0],y=curr[1];

            if(x==px && y==py)
                return true;

            for(int[] mo:moves){
                int x2=x+mo[0],y2=y+mo[1];
                if(x2<0||x2>=m||y2<0||y2>=n||grid[x2][y2]=='#'||(x2==boxX&&y2==boxY)) continue;
                if(!visit.add(x2+","+y2)) continue;
                q.offer(new int[]{x2,y2});
            }

        }

        return false;

    }
}
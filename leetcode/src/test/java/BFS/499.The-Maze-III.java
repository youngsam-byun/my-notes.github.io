package BFS;

import java.util.PriorityQueue;

class Solution499 {

    class Node{
        int x,y,step;
        String s;
        public Node(int x,int y,int step,String s){
            this.x=x;
            this.y=y;
            this.step=step;
            this.s=s;
        }
    }

    public String findShortestWay(int[][] maze, int[] ball, int[] hole) {

        int m=maze.length,n=maze[0].length;
        int sx=ball[0],sy=ball[1],dx=hole[0],dy=hole[1];
        boolean[][] visit=new boolean[m][n];

        int[][] moves=new int[][]{{-1,0},{0,1},{1,0},{0,-1}};
        String[] directions=new String[]{"u","r","d","l"};

        PriorityQueue<Node> q = new PriorityQueue<>((a, b)->{

            if(a.step==b.step){
                return a.s.compareTo(b.s);
            }

            return Integer.compare(a.step,b.step);
        });

        q.offer(new Node(sx,sy,0,""));

        while(!q.isEmpty()){

            Node u=q.poll();
            int x=u.x,y=u.y,step=u.step;
            String s=u.s;

            if(visit[x][y])continue;
            visit[x][y]=true;

            if(x==dx&&y==dy)
                return s;

            for(int i=0;i<directions.length;i++){

                int mx=moves[i][0],my=moves[i][1];
                String d=directions[i];
                int x2=x,y2=y,step2=step;
                boolean found=false;

                while(0<=x2+mx&&x2+mx<m&&0<=y2+my&&y2+my<n&&maze[x2+mx][y2+my]==0){
                    x2+=mx;
                    y2+=my;
                    step2++;

                    if(x2==dx&&y2==dy){
                        q.offer(new Node(x2,y2,step2,s+d));
                        found=true;
                        break;
                    }
                }

                if(found) continue;

                q.offer(new Node(x2,y2,step2,s+d));

            }

        }


        return "impossible";
    }

}
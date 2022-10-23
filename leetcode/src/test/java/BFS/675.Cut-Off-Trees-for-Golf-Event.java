package BFS;

import java.util.List;
import java.util.PriorityQueue;

class Solution675 {

    public int cutOffTree(List<List<Integer>> forest) {

        int m=forest.size(),n=forest.get(0).size();
        int total=0;
        for(int i=0;i<m;i++){
            for(int j=0;j<n;j++){
                int v=forest.get(i).get(j);
                if(v>1)
                    total++;
            }
        }

        PriorityQueue<int[]> pq = new PriorityQueue<>((a, b)->Integer.compare(a[2],b[2]));
        pq.offer(new int[]{0,0,forest.get(0).get(0)});
        int steps=0;
        int[][] moves = new int[][]{{-1,0},{0,1},{1,0},{0,-1}};

        while(!pq.isEmpty()){
            int[] curr=pq.poll();
            int x=curr[0],y=curr[1],h=curr[2];

            for(int i=0;i<moves.length;i++){

                int x2=x+moves[i][0],y2=y+moves[i][1];
                if(x2<0||x2>=m||y2<0||y2>=n||forest.get(x2).get(y2)==0||h>forest.get(x2).get(y2))
                    continue;

                pq.offer(new int[]{x2,y2,forest.get(x2).get(y2)});
            }

            if(pq.isEmpty())
                break;

            steps++;


        }

        if(steps==0 || steps<total-1)
            return -1;

        return steps;
    }
}
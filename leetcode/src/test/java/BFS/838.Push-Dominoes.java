package BFS;

import java.util.LinkedList;
import java.util.Queue;

class Solution838 {

    class Node{
        int idx,t;
        char c;
        public Node(int t,int idx,char c){
            this.t=t;
            this.idx=idx;
            this.c=c;
        }
    }

    public String pushDominoes(String dominoes) {

        Queue<Node> q =new LinkedList<>();
        char[] res = dominoes.toCharArray();
        int n=res.length;
        for(int i=0;i<n;i++){
            if(res[i]!='.')
                q.offer(new Node(0,i,res[i]));
        }

        Node[] visit=new Node[n];

        for(int time=1;!q.isEmpty();time++){

            int size=q.size();

            for(int i=0;i<size;i++){

                Node curr=q.poll();

                int t=curr.t,idx=curr.idx;
                char c=curr.c;

                if(visit[idx]==null){
                    visit[idx]=new Node(t,idx,c);

                    if(c=='L' && 0<=idx-1){
                        q.offer(new Node(time,idx-1,c));
                    }else if(c=='R' && idx+1<n){
                        q.offer(new Node(time,idx+1,c));
                    }

                }else if(visit[idx].t==curr.t && c!=visit[idx].c){
                    visit[idx]=new Node(t,idx,'.');
                }

            }
        }


        StringBuilder sb = new StringBuilder();
        for(int i=0;i<n;i++){
            if(visit[i]==null)
                sb.append('.');
            else
                sb.append(visit[i].c);
        }

        return sb.toString();

    }
}
package BFS;

import java.util.*;

class Solution854 {

    public int kSimilarity(String s1, String s2) {

        Queue<String> q = new LinkedList<>();
        q.offer(s1);

        Set<String> visit = new HashSet<>();
        visit.add(s1);
        int step=0;

        while(!q.isEmpty()){

            int size=q.size();
            for(int i=0;i<size;i++){
                String u=q.poll();

                if(u.equals(s2))
                    return step;

                for(String v:get(u,s2)){
                    if(!visit.add(v))continue;

                    q.offer(v);
                }

            }

            step++;
        }

        return -1;
    }

    private List<String> get(String u, String s2){

        int i=0,j=0,n=u.length();

        while(i<n&&j<n&&u.charAt(i)==s2.charAt(j)){
            i++;
            j++;
        }

        List<String> res =new ArrayList<>();
        char[] us=u.toCharArray();
        for(;j<n;j++){
            if(us[i]==s2.charAt(j)){
                swap(us,i,j);
                res.add(new String(us));
                swap(us,i,j);
            }
        }

        return res;
    }

    private void swap(char[] us,int i,int j){
        char t=us[i];
        us[i]=us[j];
        us[j]=t;
    }
}
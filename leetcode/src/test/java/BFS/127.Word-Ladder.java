package BFS;

import java.util.*;

class Solution127 {

    /**
     BFS
     **/

    public int ladderLength(String beginWord, String endWord, List<String> wordList) {

        Set<String> wordSet=new HashSet<>(wordList);
        if(!wordSet.contains(endWord))
            return 0;

        Queue<String> q = new LinkedList<>();
        q.offer(beginWord);

        int res=1;
        while(!q.isEmpty()){
            int size=q.size();

            for(int i=0;i<size;i++){
                String u=q.poll();

                if(endWord.equals(u)){
                    return res;
                }

                char[] us=u.toCharArray();
                for(int j=0;j<us.length;j++){
                    char o=us[j];
                    for(char c='a';c<='z';c++){
                        us[j]=c;
                        String t=new String(us);
                        if(!wordSet.contains(t)) continue;

                        q.offer(t);
                        wordSet.remove(t);
                    }
                    us[j]=o;

                }
            }

            res++;
        }

        return 0;
    }

}
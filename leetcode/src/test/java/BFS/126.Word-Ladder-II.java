package BFS;

import java.util.*;

class Solution126 {

    /**
     key idea
     traverse from END to BEGIN word to improve search speed

     1. use BFS to find shortest path and store all path but store in REVERSED ORDER
     2. use DFS to output result in REVERSED ORDER
     1) use LinkedHashSet to remember insertion order
     2) reverse as it is end to begin order inserted

     **/

    public List<List<String>> findLadders(String beginWord, String endWord, List<String> wordList) {


        // init graph to store reverse mapping         
        Map<String, Set<String>> reverseMap = new HashMap<>();

        //init queue for bfs
        Queue<String> q = new LinkedList<>();
        q.offer(beginWord);

        //set to make removal o(1)
        Set<String> wordSet=new HashSet<>(wordList);
        wordSet.remove(beginWord);

        //bfs to store reversed mapping
        boolean found=bfs(endWord, q,wordSet,reverseMap);

        List<List<String>> res = new ArrayList<>();
        if(!found){
            return res;
        }


        //init paths to traverse
        //linkedhashset will remember insertion order from end to begin 
        Set<String> paths=new LinkedHashSet<>();
        paths.add(endWord);

        //dfs to output
        dfs(endWord,beginWord,reverseMap,paths,res);

        return res;
    }

    private boolean bfs(String endWord,Queue<String> q,Set<String> wordSet,Map<String,Set<String>> reverseMap){

        boolean found=false;
        Set<String> visitInProgress=new HashSet<>();

        while(!q.isEmpty()){

            int size=q.size();

            for(int i=0;i<size;i++){
                String u=q.poll();

                for(String v:wordSet){

                    if(isLadder(u,v)){

                        reverseMap.putIfAbsent(v,new HashSet<>());
                        reverseMap.get(v).add(u);

                        if(endWord.equals(v)){
                            found=true;
                        }

                        visitInProgress.add(v);
                    }
                }
            }

            q.addAll(visitInProgress);
            wordSet.removeAll(visitInProgress);
            visitInProgress.clear();

            if(found){
                break;
            }

        }

        return found;
    }

    private boolean isLadder(String u,String v){

        if(u.length()!=v.length())
            return false;

        int count=0;
        for(int i=0;i<u.length();i++){
            if(u.charAt(i)!=v.charAt(i))
                count++;

            if(count>1)
                return false;
        }

        return count==1;

    }

    private void dfs(String endWord,String beginWord,Map<String,Set<String>> reverseMap, Set<String> paths,List<List<String>> res){

        if(!reverseMap.containsKey(endWord))
            return;

        for(String u:reverseMap.get(endWord)){

            paths.add(u);
            if(beginWord.equals(u)){
                List<String> list=new ArrayList<>(paths);
                Collections.reverse(list);
                res.add(list);
            }else{
                dfs(u,beginWord,reverseMap,paths,res);
            }
            paths.remove(u);
        }

    }

}
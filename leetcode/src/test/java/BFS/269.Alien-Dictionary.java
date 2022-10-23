package BFS;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

class Solution269 {
    public String alienOrder(String[] words) {

        Map<Character, List<Character>> graph = new HashMap<>();
        Map<Character,Integer> visit = new HashMap<>();

        for(int i=0;i<words.length;i++){

            String w=words[i];

            for(char c:w.toCharArray()){
                graph.putIfAbsent(c,new ArrayList<>());
                visit.putIfAbsent(c,0);
            }

            if(i==0) continue;

            String p=words[i-1];
            int m=p.length(),n=w.length();
            int len=Math.min(m,n);

            if(m>n && p.substring(0,len).equals(w.substring(0,len)))
                return "";

            for(int j=0,k=0;j<m&&k<n;j++,k++){
                char a=p.charAt(j),b=w.charAt(k);
                if(a==b) continue;

                graph.get(a).add(b);
                break;
            }
        }

        StringBuilder sb = new StringBuilder();

        for(Map.Entry<Character,List<Character>> et:graph.entrySet()){
            char k=et.getKey();
            if(visit.get(k)==2)
                continue;

            if(!dfs(k,graph,visit,sb))
                return "";

        }

        return sb.reverse().toString();
    }

//     public String alienOrder(String[] words) {

//         Map<Character,List<Character>> graph = new HashMap<>();
//         Map<Character,Integer> inDegree=new HashMap<>();
//         Map<Character,Integer> visit = new HashMap<>();

//         for(int i=0;i<words.length;i++){

//             String w=words[i];

//             for(char c:w.toCharArray()){
//                 graph.putIfAbsent(c,new ArrayList<>());
//                 inDegree.putIfAbsent(c,0);
//                 visit.putIfAbsent(c,0);
//             }

//             if(i==0) continue;

//             String p=words[i-1];
//             int m=p.length(),n=w.length();
//             int len=Math.min(m,n);

//             if(m>n && p.substring(0,len).equals(w.substring(0,len)))
//                 return "";

//             for(int j=0,k=0;j<m&&k<n;j++,k++){
//                 char a=p.charAt(j),b=w.charAt(k);
//                 if(a==b) continue;

//                 graph.get(a).add(b);
//                 inDegree.put(b,inDegree.get(b)+1);
//                 break;
//             }
//         }

//         Queue<Character> q = new LinkedList<>();
//         for(Map.Entry<Character,Integer> et:inDegree.entrySet()){
//             char k=et.getKey();
//             int v=et.getValue();
//             if(v==0){
//                 q.offer(k);
//             }
//         }

//         StringBuilder sb = new StringBuilder();
//         while(!q.isEmpty()){
//             char u=q.poll();

//             sb.append(u);
//             for(char v:graph.get(u)){
//                 inDegree.put(v,inDegree.get(v)-1);
//                 if(inDegree.get(v)==0)
//                     q.offer(v);
//             }
//         }

//         if(sb.length()!=inDegree.size())
//             return "";

//         return sb.toString();
//     }

    private boolean dfs(char u,Map<Character,List<Character>> graph,Map<Character,Integer> visit,StringBuilder sb){

        visit.put(u,1);

        for(char v:graph.get(u)){

            if(visit.get(v)==1)
                return false;
            else if(visit.get(v)==2)
                continue;
            else {
                if(!dfs(v,graph,visit,sb))
                    return false;
            }

        }

        sb.append(u);
        visit.put(u,2);
        return true;

    }
}
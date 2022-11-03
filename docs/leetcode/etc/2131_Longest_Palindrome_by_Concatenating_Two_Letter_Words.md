---
layout: page
nav_order: 2
grand_parent: Leetcode
parent: Etc
title: 2131 Longest Palindrome by Concatenating Two Letter Words
---

[https://leetcode.com/problems/longest-palindrome-by-concatenating-two-letter-words/](https://leetcode.com/problems/longest-palindrome-by-concatenating-two-letter-words/)


```java
class Solution {
    public int longestPalindrome(String[] words) {

        int[][] map=new int[26][26];
        int res=0,sameLetterWord=0;
        for(String w:words){
            int i=w.charAt(0)-'a',j=w.charAt(1)-'a';

            //same letter
            if(w.charAt(0)==w.charAt(1)){
                if(map[i][j]>0){
                    res+=4;
                    map[i][j]--;
                    sameLetterWord--;
                }else{
                    map[i][j]++;
                    sameLetterWord++;
                }

            }else{

                if(map[j][i]>0){
                    res+=4;
                    map[j][i]--;
                }else{
                    map[i][j]++;
                }
            }
        }

        if(sameLetterWord>0){
            res+=2;
        }

        return res;

    }
}


```




{% include disqus.html %}

package DFS;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

class Solution425 {

    class Trie {
        char c;
        Trie[] children;
        Set<String> words;

        public Trie(char c) {
            this.c = c;
            children = new Trie[26];
            words = new HashSet<>();
        }
    }

    Trie root;

    public List<List<String>> wordSquares(String[] words) {
        root = new Trie(' ');
        for (String w : words) {
            addWord(root, w);
        }

        List<List<String>> res = new ArrayList();
        dfs(root, 0, words[0].length(), new ArrayList<>(), res);
        return res;
    }

    private void dfs(Trie root, int idx, int len, List<String> list, List<List<String>> res) {
        if (idx == len) {
            res.add(new ArrayList(list));
            return;
        }

        Set<String> words = find(root, idx, list);

        for (String w : words) {
            list.add(w);
            dfs(root, idx + 1, len, list, res);
            list.remove(list.size() - 1);
        }

    }

    private Set<String> find(Trie root, int idx, List<String> list) {

        for (String l : list) {
            char c = l.charAt(idx);
            root = root.children[c - 'a'];
            if (root == null)
                return new HashSet<>();
        }

        return root.words;
    }

    private void addWord(Trie root, String w) {
        Trie curr = root;
        curr.words.add(w);
        for (char c : w.toCharArray()) {
            if (curr.children[c - 'a'] == null) {
                curr.children[c - 'a'] = new Trie(c);
            }
            curr = curr.children[c - 'a'];
            curr.words.add(w);
        }
    }
}
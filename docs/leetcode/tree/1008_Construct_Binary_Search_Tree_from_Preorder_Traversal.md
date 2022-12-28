---
layout: page
nav_order: 2
grand_parent: Leetcode
parent: Tree
title: 1008. Construct Binary Search Tree from Preorder Traversal
---

[https://leetcode.com/problems/construct-binary-search-tree-from-preorder-traversal/](https://leetcode.com/problems/construct-binary-search-tree-from-preorder-traversal/)

### recursive
```java
class Solution {
    public TreeNode bstFromPreorder(int[] preorder) {
         Queue<Integer> q =new LinkedList<>();
         for(int p:preorder)
             q.offer(p);

         return dfs(q,Integer.MIN_VALUE,Integer.MAX_VALUE);
    }

    private TreeNode dfs(Queue<Integer> q,int min,int max){
        if(q.isEmpty()||q.peek()<min || max<q.peek())
            return null;

        int v=q.poll();
        TreeNode root=new TreeNode(v);
        root.left=dfs(q,min,v);
        root.right=dfs(q,v,max);
        return root;
    }
}
```

###iterative
```java
class Solution {
    public TreeNode bstFromPreorder(int[] preorder) {
     
        Stack<TreeNode> stack = new Stack<>();
        TreeNode root=new TreeNode(preorder[0]);
        stack.push(root);
                   
        for(int i=1;i<preorder.length;i++){
            int p=preorder[i];
            TreeNode tn=new TreeNode(p);
            
            if(!stack.isEmpty() && p<stack.peek().val)
                stack.peek().left=tn;
            else{
                TreeNode parent=stack.peek(),curr=stack.peek();
                while(!stack.isEmpty() && stack.peek().val<p){
                    curr=stack.pop();                                        
                }
                curr.right=tn;
            }
                
            stack.push(tn);
        }
        
        return root;
        
    }
   
}
```

{% include disqus.html %}

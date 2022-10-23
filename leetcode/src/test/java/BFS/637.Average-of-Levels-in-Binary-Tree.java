package BFS;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;
import java.util.Queue;

class Solution637 {

    /**
     * Definition for a binary tree node.
     **/
    public class TreeNode {
        int val;
        TreeNode left;
        TreeNode right;
        TreeNode() {}
        TreeNode(int val) { this.val = val; }
        TreeNode(int val, TreeNode left, TreeNode right) {
            this.val = val;
            this.left = left;
            this.right = right;
        }
    }

    public List<Double> averageOfLevels(TreeNode root) {

        List<Double> res = new ArrayList<>();
        if(root==null)
            return res;

        Queue<TreeNode> q = new LinkedList<>();
        q.offer(root);

        while(!q.isEmpty()){
            long size=q.size(),sum=0,count=0;

            for(int i=0;i<size;i++){
                TreeNode u=q.poll();
                sum+=u.val;
                count++;
                if(u.left!=null)
                    q.offer(u.left);
                if(u.right!=null)
                    q.offer(u.right);
            }

            res.add(sum/(double)count);
        }

        return res;

    }
}
package Binary_Search;

import java.util.*;

class MajorityChecker {

    class SegmentTreeNode{
        int start,end;
        SegmentTreeNode left,right;
        int[] candidate;
        public SegmentTreeNode(int start,int end,int[] candidate){
            this.start=start;
            this.end=end;
            this.candidate=candidate;
        }

    }

    SegmentTreeNode root;
    Map<Integer, List<Integer>> map;
    int[] A;

    public MajorityChecker(int[] arr) {

        A=arr;
        int n=A.length;
        root=buildSegmentTree(0,n-1,A);

        map=new HashMap<>();
        for(int i=0;i<n;i++){
            int a=A[i];
            map.putIfAbsent(a,new ArrayList<>());
            map.get(a).add(i);
        }
    }

    private SegmentTreeNode buildSegmentTree(int start,int end,int[] A){

        int value=A[start],frequency=1;
        if(start==end){
            return new SegmentTreeNode(start,end,new int[]{value,frequency});
        }

        SegmentTreeNode root = new SegmentTreeNode(start,end,null);

        int mid=start+(end-start)/2;
        root.left=buildSegmentTree(start,mid,A);
        root.right=buildSegmentTree(mid+1,end,A);
        root.candidate=mergeCandidate(root.left.candidate,root.right.candidate);

        return root;
    }



    public int query(int left, int right, int threshold) {
        int[] candidate=queryTree(root,left,right);
        int value=candidate[0],frequency=candidate[1];
        if(frequency>=threshold)
            return value;

        int l= Collections.binarySearch(map.get(value),left);
        if(l<0)
            l=-l-1;

        int r=Collections.binarySearch(map.get(value),right);
        if(r<0)
            r=-r-1-1;

        if(r-l+1>=threshold)
            return value;

        return -1;
    }

    private int[] queryTree(SegmentTreeNode root,int start,int end){
        if(start<=root.start && root.end<=end){
            return root.candidate;
        }

        int[] candidate=new int[]{0,0};

        int mid = root.start+(root.end-root.start)/2;

        if(start<=mid){
            candidate=mergeCandidate(candidate,queryTree(root.left,start,end));
        }

        if(mid<end){
            candidate=mergeCandidate(candidate,queryTree(root.right,start,end));
        }

        return candidate;
    }

    private int[] mergeCandidate(int[] A,int[] B){
        if(A[0]==B[0]){
            return new int[]{A[0],A[1]+B[1]};
        }

        if(A[1]>B[1]){
            return new int[]{A[0],A[1]-B[1]};
        }

        return new int[]{B[0],B[1]-A[1]};
    }
}

/**
 * Your MajorityChecker object will be instantiated and called as such:
 * MajorityChecker obj = new MajorityChecker(arr);
 * int param_1 = obj.query(left,right,threshold);
 */

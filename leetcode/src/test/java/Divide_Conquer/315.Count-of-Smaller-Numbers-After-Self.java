package Divide_Conquer;

import java.util.Arrays;
import java.util.LinkedList;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

/**
Merge Sort , o(nlogn)
        divide and conquery
        key idea is sort the index of original element
        by sorting index, count the bigger element and update it
 **/
class Solution315 {
    public List<Integer> countSmaller(int[] nums) {

        int n=nums.length;
        int[] index= IntStream.range(0,n).toArray();
        int[] counter=new int[n];
        mergeSort(nums,0,n-1,index,counter);

        return Arrays.stream(counter).mapToObj(i->Integer.valueOf(i)).collect(Collectors.toList());
    }

    private void mergeSort(int[] N,int l,int r,int[] index,int[] counter){
        if(l>=r){
            return;
        }


        int m=l+(r-l)/2;
        mergeSort(N,l,m,index,counter);
        mergeSort(N,m+1,r,index,counter);
        merge(N,l,m,r,index,counter);
    }

    private void merge(int[] N,int s,int m,int e,int[] index,int[] counter){

        int[] tmp=new int[e-s+1];
        int l=s,r=m+1,idx=0,count=0;

        while(l<=m && r<=e){
            if(N[index[l]]>N[index[r]]){
                tmp[idx]=index[r];
                count++;
                r++;
            }else{
                tmp[idx]=index[l];
                counter[index[l]]+=count;
                l++;
            }
            idx++;
        }

        while(l<=m){
            tmp[idx]=index[l];
            counter[index[l]]+=count;
            idx++;
            l++;
        }

        while(r<=e){
            tmp[idx]=index[r];
            idx++;
            r++;
        }

        for(int i=0;i<e-s+1;i++){
            index[s+i]=tmp[i];
        }

    }


}

/**
        Segment Tree
        tree representation in the form of array
        array will store range sum
   **/

class SegmentTree{
    int N, tree[];

    //init
    public SegmentTree(){
        int height=(int)Math.ceil(Math.log(20001)/Math.log(2));

        N=2*(int)Math.pow(2,height)-1;
        tree=new int[N];
    }

    public int query(int left,int right){
        return query(0,0,20000,left,right);
    }

    private int query(int idx,int l,int r,int left,int right){
        if(right<l||r<left){
            return 0;
        }else if(left<=l && r<=right){
            return tree[idx];
        }else{
            int m=l+(r-l)/2;
            return query(2*idx+1,l,m,left,right)+query(2*idx+2,m+1,r,left,right);
        }
    }

    public void update(int v){
        update(0,0,20000,v);
    }

    private void update(int idx,int l,int r,int v){
        if(v<l || r<v){
            return;
        }else if(l==r){
            tree[idx]++;
            return;
        }
        else{
            int m=l+(r-l)/2;
            update(2*idx+1,l,m,v);
            update(2*idx+2,m+1,r,v);
            tree[idx]=tree[2*idx+1]+tree[2*idx+2];
        }
    }

}

//class Solution {
//    SegmentTree segmentTree;
//    public List<Integer> countSmaller(int[] nums) {
//
//        segmentTree=new SegmentTree();
//
//        List<Integer> res =new LinkedList();
//        for(int i=nums.length-1;i>-1;i--){
//            int a=nums[i]+10000;
//            int count=segmentTree.query(0,a-1);
//            res.add(0,count);
//            segmentTree.update(a);
//        }
//
//        return res;
//    }
//
//}
///**
//
//
//        Binary Index Tree
//        also, tree representation in the form of array
//        **/
//
//class BinaryIndexTree{
//    //binary index tree
//    int N,tree[];
//
//    public BinaryIndexTree(){
//        N=20001;
//        tree=new int[20001];
//    }
//
//    public int query(int idx){
//        idx++;
//        int sum=0;
//        while(idx>0){
//            sum+=tree[idx];
//            idx-=idx&(-idx);
//        }
//        return sum;
//    }
//
//    public void update(int idx){
//        idx++;
//        while(idx<N){
//            tree[idx]++;
//            idx+=idx&(-idx);
//        }
//    }
//
//}
//
//class Solution {
//    BinaryIndexTree binaryIndexTree;
//    public List<Integer> countSmaller(int[] nums) {
//
//        binaryIndexTree=new BinaryIndexTree();
//
//        int n=nums.length;
//        List<Integer> res = new LinkedList();
//        for(int i=n-1;i>-1;i--){
//            int a=nums[i]+10000;
//            int count=binaryIndexTree.query(a-1);
//            res.add(0,count);
//            binaryIndexTree.update(a);
//        }
//
//        return res;
//    }
//}
//
//

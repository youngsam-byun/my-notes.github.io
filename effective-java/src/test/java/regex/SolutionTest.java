package regex;

import org.junit.jupiter.api.Test;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.PriorityQueue;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class SolutionTest {

    class Element{
        int i,j,v;
        public Element(int i,int j,int v){
            this.i=i;
            this.j=j;
            this.v=v;
        }
    }

    public int[] smallestRange(List<List<Integer>> nums) {

        PriorityQueue<Element> minHeap=new PriorityQueue<>((a, b)->Integer.compare(a.v,b.v));
        PriorityQueue<Element> maxHeap=new PriorityQueue<>((a,b)->Integer.compare(b.v,a.v));

        int n=nums.size();
        for(int i=0;i<n;i++){
            int v=nums.get(i).get(0);
            Element e=new Element(i,0,v);
            minHeap.offer(e);
            maxHeap.offer(e);
        }

        int start=-(int)(1e5),end=(int)(1e5);

        while(minHeap.size()==n){

            Element min=minHeap.poll();
            Element max=maxHeap.peek();

            if(max.v-min.v<end-start){
                end=max.v;
                start=min.v;
            }

            int i=min.i;
            int j=min.j;
            int size=nums.get(i).size();
            if(j+1<size){
                int v=nums.get(i).get(j+1);
                Element e=new Element(i,j+1,v);
                minHeap.offer(e);
                maxHeap.offer(e);

                //set object to null purpose to makes easier to remove
                min=null;
                maxHeap.remove(min);
            }

        }
        return new int[]{start,end};
    }

    @Test
    void test(){
        int[][] A= {{4,10,15,24,26},{0,9,12,20},{5,18,22,30}};
        List<List<Integer>> input= Arrays.stream(A).map(a->Arrays.stream(a).boxed().collect(Collectors.toList())).collect(Collectors.toList());
        smallestRange(input);
    }
}

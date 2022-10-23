package Bit_Manipulation;

class Solution318 {
    public int maxProduct(String[] words) {

        int n=words.length;
        int[][] A=new int[n][26];
        for(int i=0;i<n;i++){
            String w=words[i];
            for(char c:w.toCharArray()){
                A[i][c-'a']++;
            }
        }

        int max=0;
        for(int i=0;i<n;i++){
            for(int j=i+1;j<n;j++){
                int res=and(A[i],A[j]);

                // System.out.println(words[i]+", "+words[j]+ " = " + res);
                // System.out.println(Arrays.toString(A[i]));
                // System.out.println(Arrays.toString(A[j]));

                if(res==0){
                    max=Math.max(max,words[i].length()*words[j].length());
                }
            }
        }

        return max;
    }

    private int and(int[] A,int[] B){

        int res=0;
        for(int i=0;i<26;i++){
            res += (A[i]>0 && B[i]>0)?1:0;
        }

        return res;
    }
}
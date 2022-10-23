package Binary_Search;

class Solution302 {

    public int minArea(char[][] image, int x, int y) {

        int m=image.length,n=image[0].length;

        //find index that has at least one of '1' in left chunk
        int left=leftColumn(0,y,image);

        //find index that has at least one of '1' in right chunk
        //purposely set range y to n-1
        //to handle edge cases e.g: array size is 1
        int right=rightColumn(y,n-1,image);

        //find index that has at least one of '1' in top chunk
        int top=topRow(0,x,image);

        //find index that has at least one of '1' in bottom chunk
        //purposely set range x to m-1
        //to handle edge cases e.g: array size is 1
        int bottom=bottomRow(x,m-1,image);

        //find area
        return (right-left+1)*(bottom-top+1);
    }


    private int bottomRow(int top,int bottom,char[][] image){

        int m=image.length,n=image[0].length;
        int t=top,b=bottom;

        while(t<b){

            int med=t+(b-t+1)/2;
            int count=0;
            for(int j=0;j<n;j++){
                if(image[med][j]=='1')
                    count++;
            }

            if(count>0)
                t=med;
            else
                b=med-1;
        }
        return t;
    }


    private int topRow(int top,int bottom,char[][] image){

        int m=image.length,n=image[0].length;
        int t=top,b=bottom;

        while(t<b){
            int med=t+(b-t)/2;

            int count=0;
            for(int j=0;j<n;j++){
                if(image[med][j]=='1')
                    count++;
            }

            if(count>0)
                b=med;
            else
                t=med+1;
        }
        return t;
    }


    private int rightColumn(int left,int right,char[][] image){
        int m=image.length,n=image[0].length;
        int l=left,r=right;


        while(l<r){

            int med=l+(r-l+1)/2;
            int count=0;
            for(int i=0;i<m;i++){
                if(image[i][med]=='1')
                    count++;
            }

            if(count>0)
                l=med;
            else
                r=med-1;
        }
        return l;
    }

    private int leftColumn(int left,int right,char[][] image){

        int m=image.length,n=image[0].length;
        int l=left,r=right;

        while(l<r){

            int med=l+(r-l)/2;
            int count=0;
            for(int i=0;i<m;i++){
                if(image[i][med]=='1')
                    count++;
            }

            if(count>0)
                r=med;
            else
                l=med+1;
        }
        return l;
    }
}
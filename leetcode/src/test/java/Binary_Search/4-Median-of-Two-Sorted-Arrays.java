package Binary_Search;

class Solution4 {

    public double findMedianSortedArrays(int[] nums1, int[] nums2) {

        int m=nums1.length,n=nums2.length;

        if(m>n)
            return findMedianSortedArrays(nums2,nums1);

        int l=0,r=m;

        while(l<=r){

            int pa=l+(r-l)/2;
            int pb=(m+n+1)/2-pa;

            int la=pa==0?Integer.MIN_VALUE:nums1[pa-1];
            int ra=pa==m?Integer.MAX_VALUE:nums1[pa];
            int lb=pb==0?Integer.MIN_VALUE:nums2[pb-1];
            int rb=pb==n?Integer.MAX_VALUE:nums2[pb];

            if(la<=rb && lb<=ra){
                if((m+n)%2==1)
                    return Math.max(la,lb);

                return (Math.max(la,lb)+Math.min(ra,rb))/(double)2;
            }else if(la>rb){
                r=pa-1;
            }else{
                l=pa+1;
            }
        }

        return -1;
    }

}
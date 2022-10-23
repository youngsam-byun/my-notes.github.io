class Solution {
    int dp[105][105][25];
public:
    int minCost(vector<int>& houses, vector<vector<int>>& cost, int m, int n, int target) 
    {
        houses.insert(houses.begin(), 0);
        cost.insert(cost.begin(), {0});

        for (int i=0; i<=m; i++)
            for (int j=0; j<=target; j++)
                for (int k=0; k<=n; k++)
                    dp[i][j][k] = INT_MAX/2;

        for (int k=0; k<=n; k++)
            dp[0][0][k] = 0;

        for (int i=1; i<=m; i++)
        {
            if (houses[i]!=0)
            {       
                for (int j=1; j<=target; j++)
                {
                    int k = houses[i];                    
                    for (int kk=1; kk<=n; kk++)
                    {
                        if (kk==k)
                            dp[i][j][k] = min(dp[i][j][k], dp[i-1][j][kk]);
                        else
                            dp[i][j][k] = min(dp[i][j][k], dp[i-1][j-1][kk]);
                    }
                }
            }
            else
            {
                for (int j=1; j<=target; j++)
                    for (int k=1; k<=n; k++)
                    {
                        for (int kk=1; kk<=n; kk++)
                        {
                            if (kk==k)
                                dp[i][j][k] = min(dp[i][j][k], dp[i-1][j][kk] + cost[i][k-1]);
                            else
                                dp[i][j][k] = min(dp[i][j][k], dp[i-1][j-1][kk] + cost[i][k-1]);
                        }
                    }                
            }    
        }

        int ret = INT_MAX/2;
        for (int k=1; k<=n; k++)
            ret = min(ret, dp[m][target][k]);
        if (ret==INT_MAX/2)
            return -1;
        else
            return ret;
    }
};

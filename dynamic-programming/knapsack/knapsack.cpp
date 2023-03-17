#include <iostream>
#include <vector>
#include <algorithm>


int KnapSack(std::vector<int>& weights, std::vector<int>& profits, int capacity)
{
	// creating Table 
	std::vector<std::vector<int>> table(weights.size() + 1, std::vector<int>(capacity + 1, 0));

	// loop for objects
	for (int i = 1; i <= weights.size(); i++)
	{
		// loop for what object can fit
		for (int j = 1; j <= capacity; j++)
		{

			if (weights[i - 1] <= j)
			{

				int prevTableValue = table[i - 1][j];
				int currentProfit = profits[i - 1];
				int currentWeight = weights[i - 1];
				int extraWeightProfit = (table[i - 1][j - currentWeight]);

				table[i][j] = std::max(prevTableValue, currentProfit + extraWeightProfit);
			}
			else
			{
				table[i][j] = table[i - 1][j];
			}
			int finalTableValue = table[i][j];
		}
	}
	return table[weights.size()][capacity];
}


int main()
{
	std::vector<int> weights = { 1, 4 ,3 };
	std::vector<int> profits = { 150, 300 , 200 };

	std::cout << KnapSack(weights, profits, 4) << std::endl;
	return 0;
}
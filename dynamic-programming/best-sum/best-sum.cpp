#include <iostream>
#include <string>
#include <vector>
#include <optional>
#include <map>

//=====================
// Write a function "bestSum(targetSum, numbers)" that takes in a targetSum and an array of numbers;
//
// The function should return an array containing the SHORTEST combination of
// elements that add up exactly the targetSum. If there is no combination that add up tp the targetSum, then return null
//
// If there is tie for the shortest combinations, you may return any of these shortest.
//
// bestSum(7, [5, 3, 4, 7]) => [7]
// bestSum(8, [5, 3, 2) => [3,5]
//
//=====================

std::optional<std::vector<int>> BestSum(int targetSum, const std::vector<int>& numbers)
{
	if (targetSum == 0)
	{
		std::vector<int> v;
		return v;
	}
	if (targetSum < 0) return std::nullopt;

	std::optional<std::vector<int>> shortestCombination = std::nullopt;

	for (auto num : numbers)
	{
		const int remainder = targetSum - num;
		auto remainderResult = BestSum(remainder, numbers);

		if (remainderResult)
		{
			std::vector<int> combination = remainderResult.value();
			combination.push_back(num);

			if (!shortestCombination || shortestCombination.value().size() > combination.size())
			{
				shortestCombination = combination;
			}
		}
	}

	return shortestCombination;
}

void PrintVector(std::vector<int>& vector)
{
	for (auto el : vector)
	{
		std::cout << el << ", ";
	}
	std::cout << std::endl;
}

using MemoMap = std::map<int, std::optional<std::vector<int>>>;


std::optional<std::vector<int>> BestSumMemoization(int targetSum, const std::vector<int>& numbers, MemoMap& memo)
{
	if (memo.find(targetSum) != memo.end()) return memo[targetSum].value();
	if (targetSum == 0)
	{
		std::vector<int> v;
		return v;
	}
	if (targetSum < 0) return std::nullopt;

	std::optional<std::vector<int>> shortestCombination = std::nullopt;

	for (auto num : numbers)
	{
		const int remainder = targetSum - num;
		auto remainderResult = BestSumMemoization(remainder, numbers, memo);

		if (remainderResult)
		{
			std::vector<int> combination = remainderResult.value();
			combination.push_back(num);

			if (!shortestCombination || shortestCombination.value().size() > combination.size())
			{
				shortestCombination = combination;
			}
		}
	}

	memo.emplace(targetSum, shortestCombination);
	return shortestCombination;
}

std::optional<std::vector<int>> BestSumMemoizationHandler(int targetSum, const std::vector<int>& numbers)
{
	MemoMap memo;
	return BestSumMemoization(targetSum, numbers, memo);
}

int main()
{
	// bestSum(7, [5, 3, 4, 7]) => [7]
	// bestSum(8, [5, 3, 2) => [3,5]
	std::optional<std::vector<int>> outputV1 = BestSumMemoizationHandler(300, { 5, 15, 30, 100, 300 });
	if (outputV1)
	{
		PrintVector(outputV1.value());
	}
	else
	{
		std::cout << "NULL" << std::endl;
	}

	return 0;
}
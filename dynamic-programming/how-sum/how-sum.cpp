#include <iostream>
#include <string>
#include <vector>
#include <optional>
#include <map>

//=====================
// Write a function "howSum(targetSum, numbers)" that takes in a targetSum and an array of numbers;
//
// The function should return an array containing ANY combination of
// elements that add up exactly the targetSum. If there is no combination that add up tp the targetSum, then return null
//
// If there are multiple combinations possible, you may return any single one.
//
// howSum(7, [5, 3, 4, 7]) => [7]
// howSum(8, [5, 3, 2) => [2,2,2,2] or [3,5]
// howSum(7, [2, 4]) => null
// howSum(0, [1, 2, 3]) => []
//
//=====================

std::optional<std::vector<int>> HowSum(int targetSum, const std::vector<int>& numbers)
{
	if (targetSum == 0)
	{
		std::vector<int> v;
		return v;
	}

	if (targetSum < 0) return std::nullopt;

	for (int num : numbers)
	{
		int remainder = targetSum - num;
		auto remainderResult = HowSum(remainder, numbers);
		if (remainderResult)
		{
			std::vector<int> v = remainderResult.value();
			v.push_back(num);
			return v;
		}
	}

	return std::nullopt;
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


std::optional<std::vector<int>> HowSumMemoization(int targetSum, const std::vector<int>& numbers, MemoMap& memo)
{
	if (memo.find(targetSum) != memo.end()) return memo[targetSum];
	if (targetSum == 0)
	{
		std::vector<int> v;
		return v;
	}

	if (targetSum < 0) return std::nullopt;

	for (int num : numbers)
	{
		int remainder = targetSum - num;
		auto remainderResult = HowSumMemoization(remainder, numbers, memo);
		if (remainderResult)
		{
			std::vector<int> v = remainderResult.value();
			v.push_back(num);
			memo[targetSum] = v;
			return v;
		}
	}

	memo[targetSum] = std::nullopt;
	return std::nullopt;
}

std::optional<std::vector<int>> HowSumMemoizationHandler(int targetSum, const std::vector<int>& numbers)
{
	MemoMap memo;
	return HowSumMemoization(targetSum, numbers, memo);
}

int main()
{
	// howSum(7, [5, 3, 4, 7]) => [7]
	// howSum(8, [5, 3, 2) => [2,2,2,2] or [3,5]
	// howSum(7, [2, 4]) => null
	// howSum(0, [1, 2, 3]) => []
	std::optional<std::vector<int>> outputV1 = HowSumMemoizationHandler(300, { 15, 7, 14});
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
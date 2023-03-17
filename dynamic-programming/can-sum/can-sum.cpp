#include <iostream>
#include <string>
#include <vector>
#include <map>

// =================================
// Write a function "canSum(targetSum, numbers)" that takes in a targetSum and an array of numbers.
//
// The function should return a boolean indicating whether or not
// it is possible to generate the target sum using numbers from the array.
//
// You may use an element of the array as many times as needed.
// You may assume that all input numbers are nonnegative.
//
// canSum(7, [5, 3, 4, 7]) => true
// canSum(7, [1, 2]) => false
// =================================


bool CanSum(int targetSum, std::vector<int>& numbers)
{
	if (targetSum == 0) return true;
	if (targetSum < 0) return false;

	for (int num : numbers)
	{
		if (CanSum(targetSum - num, numbers))
		{
			return true;
		}
	}

	return false;
}


bool CanSumMemoizationHandler(int targetSum, std::vector<int>& numbers, std::map<int, bool>& memo)
{
	if (memo.find(targetSum) != memo.end()) return memo[targetSum];
	if (targetSum == 0) return true;
	if (targetSum < 0) return false;

	for (int num : numbers)
	{
		if (CanSumMemoizationHandler(targetSum - num, numbers, memo))
		{
			memo[targetSum] = true;
			return true;
		}
	}

	memo.emplace(targetSum, false);
	return false;
}

bool CanSumMemoization(int targetSum, std::vector<int>& numbers)
{
	std::map<int, bool> memo;
	return CanSumMemoizationHandler(targetSum, numbers, memo);
}


// canSumMemoization(30000, [1, 14]);

int main()
{
	std::vector<int> v1 = { 5,3,7 };
	std::vector<int> v2 = { 1,2 };
	std::vector<int> v3 = { 7, 14 };
	//std::cout << CanSum(7, v1) << std::endl;
	//std::cout << CanSum(7, v2) << std::endl;
	std::cout << CanSumMemoization(6000, v3) << std::endl;
	return 0;
}
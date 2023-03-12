#include <iostream>
#include <string>
#include <vector>
#include <map>
using namespace std;

size_t GridTraversalMemoization(size_t m, size_t n, std::map<std::string, size_t>& memo)
{
	const std::string key = std::to_string(m) + ',' + std::to_string(n);
	if (memo.find(key) != memo.end()) return memo[key];
	if (m == 1 && n == 1) return 1;
	if (m == 0 || n == 0) return 0;


	memo.emplace(key, (GridTraversalMemoization(m, n - 1, memo) + GridTraversalMemoization(m - 1, n, memo)));
	return memo[key];
}

size_t GridTraversal(size_t m, size_t n)
{
	std::map<std::string, size_t> memo;
	return GridTraversalMemoization(m, n, memo);
}


int main()
{
	std::cout << GridTraversal(18, 18) << std::endl;

	return 0;
}
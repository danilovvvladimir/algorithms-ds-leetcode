#include <iostream>
#include <string>
#include <vector>
#include <algorithm>
using namespace std;


size_t FibonacciMemoization(size_t n, std::vector<size_t>& memo)
{
	if (n < 2) return 1;
	if (memo[n - 1] != 0) return memo[n - 1];

	memo[n - 1] = FibonacciMemoization(n - 1, memo) + FibonacciMemoization(n - 2, memo);
	return memo[n - 1];
}

size_t FibonacciHandler(size_t n)
{
	std::vector<size_t> memo(n, 0);
	return FibonacciMemoization(n, memo);
}




int main()
{
	for (int i = 0; i <= 50; i++)
	{
		std::cout << i+1 << "=\t" << FibonacciHandler(i) << std::endl;
	}

	return 0;
}
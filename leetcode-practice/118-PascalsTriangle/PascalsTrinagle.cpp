#include <iostream>
#include <vector>

// https://leetcode.com/problems/pascals-triangle/
//
//	Given an integer numRows, return the first numRows of Pascal's triangle.
//
//	In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:
//
//	Input: numRows = 5
//	Output: [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]]
//	=========================================


std::vector<std::vector<int>> generate(int numRows) {
	std::vector<std::vector<int>> resultVector;

	for (int i = 0; i < numRows; i++)
	{
		std::vector<int> row(i + 1, 1);
		// don't touch 1 in borders
		for (int j = 1; j < i; j++)
		{
			// check neighbours: top & top left
			// 1
			// 1 1
			// 1 2 1
			// 1 3 3 1
			row[j] = resultVector[i - 1][j] + resultVector[i - 1][j - 1];
		}
		resultVector.push_back(row);
	}
	return resultVector;
}

int main()
{
	int n = 10;
	std::vector<std::vector<int>> v = generate(n);
	return 0;
}
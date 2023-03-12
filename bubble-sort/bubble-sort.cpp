#include <iostream>
#include <string>
#include <vector>
#include <algorithm>
using namespace std;

std::vector<int> BubbleSort(const std::vector<int>& inputV)
{
	std::vector<int> tempVector = inputV;

	bool isSwapped = false;
	for (int i = 0; i < tempVector.size(); i++)
	{
		isSwapped = false;
		for (int j = 0; j < tempVector.size() - 1 - i; j++)
		{
			if (tempVector[j] > tempVector[j + 1])
			{
				swap(tempVector[j], tempVector[j + 1]);
				isSwapped = true;
			}
		}
		if (!isSwapped) break;
	}

	return tempVector;
}

void PrintVector(const std::vector<int>& vector, std::ostream& outputStream)
{
	for (auto el : vector)
	{
		outputStream << el << " ";
	}
	outputStream << std::endl;
}

int main()
{
	std::vector<int>  bestCaseVector = { 1,2,3,4,5 };
	std::vector<int>  worstCaseVector = { 1,2,3,4,5 };
	std::vector<int>  randomCaseVector = { 100, 120, 80, 50, 59, 12, 205, 20 };

	std::vector<int> bestCaseSortedVector = BubbleSort(bestCaseVector);
	std::vector<int> worstCaseSortedVector = BubbleSort(worstCaseVector);
	std::vector<int> randomCaseSortedVector = BubbleSort(randomCaseVector);

	PrintVector(bestCaseSortedVector, std::cout);
	PrintVector(worstCaseSortedVector, std::cout);
	PrintVector(randomCaseSortedVector, std::cout);


	return 0;
}
#include <iostream>
#include <string>
#include <algorithm>
using namespace std;

int BinarySearchIterative(int *array, int length, int target)
{
	int start = 0;
	int end = length - 1;
	int middle;

	while (start <= end)
	{
		middle = (start + end) / 2;
		if (target == array[middle])
		{
			return middle;
		}

		if (target < array[middle])
		{
			end = middle - 1;
		}
		else
		{
			start = middle + 1;
		}
	}
	return -1;
}

int main()
{
	int number[] = { 0, 2, 4, 6, 8, 10, 12 };
	cout << BinarySearchIterative(number, 7, 102) << endl;
	return 0;
}
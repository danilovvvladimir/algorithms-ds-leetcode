#include <iostream>
#include <string>
#include <algorithm>
using namespace std;

int BinarySearchRecursive(int *array,int start, int end, int target)
{
	if (start >= end)
	{
		if (array[start] == target)
		{
			return start;
		}
		return -1;
	}

	int middle = (start + end) / 2;
	if (target == array[middle])
	{
		return middle;
	}

	if (target < array[middle])
	{
		return BinarySearchRecursive(array, start, middle - 1, target);
	} 
	else
	{
		return BinarySearchRecursive(array, middle + 1, end, target);
	}

}

int main()
{
	int number[] = { 0, 2, 4, 6, 8, 10, 12 };
	cout << BinarySearchRecursive(number, 0, 7, 0) << endl;
	return 0;
}
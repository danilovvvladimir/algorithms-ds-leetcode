#include <iostream>
#include <string>
#include <unordered_map>

// https://leetcode.com/problems/roman-to-integer/
//
// Roman numerals -> integer.
//
// Example 1:
// Input: s = "III"
// Output: 3
// 
// Input: s = "LVIII"
// Output : 58
// Explanation : L = 50, V = 5, III = 3.
//
// Input: s = "MCMXCIV"
// Output : 1994
// Explanation : M = 1000, CM = 900, XC = 90 and IV = 4.
//
// =========================================
// unordered map <char, int> для каждой roman numeral
// int answer, int prev = int_max
//
// Range for по мапу.
// - беру представление ROMAN символа как инта.
// - Чекаю меньше ли или равно предыдущему символу
//		- Если да, то прибавляю к ответу это значение
//		- Иначе, тоже прибавляем, но также ответ уменьшаем на 2*prev
// - prev = value

int RomanToInt(const std::string& romanString)
{
	std::unordered_map<char, int> romanToValue = {
		{'I', 1},
		{'V', 5},
		{'X', 10},
		{'L', 50},
		{'C', 100},
		{'D', 500},
		{'M', 1000},
	};

	int answer = 0;
	int prev = INT_MAX;

	for (char c : romanString)
	{
		int value = romanToValue[c];

		if(value > prev)
		{
			answer -= 2 * prev;
		}
		answer += value;
		prev = value;
	}
	return answer;
}

int main()
{

	std::cout << RomanToInt("IM") << std::endl;
	return 0;
}
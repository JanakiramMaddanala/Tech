using System;

namespace Algorithms
{
    public class InsertionSort
    {
        public static void Run(int[] numbers)
        {
            int length = numbers.Length;
            int outerLength = length - 1;

            for (int i = 0; i < outerLength; i++)
            {
                int innerStart = i + 1;
                int swapCount = 0;

                for (int j = innerStart; j > 0; j--)
                {
                    if (numbers[j] < numbers[j - 1])
                    {
                        int temp = numbers[j];
                        numbers[j] = numbers[j - 1];
                        numbers[j - 1] = temp;
                        swapCount++;
                    }
                }

                string output = string.Join(",", numbers);
                Console.WriteLine($"Iteration {i} : {output}");
            }
        }
    }
}

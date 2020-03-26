using System;
using System.Collections.Generic;
using System.Text;

namespace Algorithms
{
    public class SelectionSort
    {
        public static void Run(int[] numbers)
        {
            int length = numbers.Length;

            for (int i = 0; i < length; i++)
            {
                int smallestIndex = i;
                int small = numbers[i];

                for (int j = i + 1; j < length; j++)
                {
                    if (numbers[j] < small)
                    {
                        small = numbers[j];
                        smallestIndex = j;
                    }
                }

                int temp = numbers[i];
                numbers[i] = numbers[smallestIndex];
                numbers[smallestIndex] = temp;

                string output = string.Join(",'", numbers);
                Console.WriteLine($"Iteration {i} : {output}");
            }
        }
    }
}

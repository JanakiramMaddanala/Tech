using System;
using System.Collections.Generic;
using System.Text;

namespace Algorithms
{
    public class CountingSort
    {
        public static void Sort()
        {
            int[] inputNumbers = { 5, 3, 1, 6, 2, 0, 8, 9, 1, 4 };
            int length = inputNumbers.Length;
            int max = 10;
            int min = 0;
            int[] indexArray = new int[max - min + 1];

            // Store the count of each number in its corresponding index in indexArray
            for (int i = 0; i < length; i++)
            {
                int j = inputNumbers[i];
                indexArray[j]++;
            }

            Console.WriteLine($"Index Array : {string.Join(",", indexArray)}");

            int k = 0;
            for (int i = 0; i < indexArray.Length; i++)
            {
                int num = indexArray[i];
                for (int j = 0; j < num; j++)
                {
                    inputNumbers[k] = i;
                    k++;
                }
            }

            string output = string.Join(",", inputNumbers);

            Console.WriteLine($"Sorted Array : {output}");
        }
    }
}

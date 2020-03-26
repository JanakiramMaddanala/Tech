using System;
using System.Collections.Generic;
using System.Text;

namespace Algorithms
{
    public class BubbleSort
    {
        public static void Run(int[] inputNumbers)
        {
            int length = inputNumbers.Length;

            for (int i = 0; i < length; i++)
            {
                int innerUpperBound = (length - 1);
                int swapCount = 0;
                for (int j = 0; j < innerUpperBound; j++)
                {
                    if (inputNumbers[j] > inputNumbers[j + 1])
                    {
                        inputNumbers[j] = inputNumbers[j] + inputNumbers[j + 1];
                        inputNumbers[j + 1] = inputNumbers[j] - inputNumbers[j + 1];
                        inputNumbers[j] = inputNumbers[j] - inputNumbers[j + 1];
                        swapCount++;
                    }
                }

                string output = string.Join(",", inputNumbers);
                Console.WriteLine($"Iteration {i} : {output}");

                if (swapCount == 0 || swapCount == 1)
                {
                    break;
                }
            }
        }
    }
}

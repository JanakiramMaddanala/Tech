using System;
using System.Collections.Generic;
using System.Text;

namespace Algorithms
{
    public class MergeSort
    {
        public static void Sort(int[] input, int start, int end)
        {
            if (start < end)
            {
                int middle = (start + end) / 2;
                Sort(input, start, middle);
                Sort(input, middle + 1, end);
                Merge(input, start, middle, end);
                for (int i = start; i <= end; i++)
                {
                    Console.Write($"{input[i]} ");
                }
                Console.WriteLine();
                Console.WriteLine("_________________________________");
            }
        }

        private static void Merge(int[] input, int start, int middle, int end)
        {
            int leftArrayLength = middle - start + 1;
            int rightArrayLength = end - middle;

            int[] left = new int[leftArrayLength];
            int[] right = new int[rightArrayLength];

            for (int index = 0; index < leftArrayLength; index++)
            {
                left[index] = input[start + index];
            }

            for (int index = 0; index < rightArrayLength; index++)
            {
                right[index] = input[middle + 1 + index];
            }

            int j = 0, i = 0;
            int k = 0;
            for (k = start; k < end; k++)
            {
                if (i < leftArrayLength && j < rightArrayLength)
                {
                    if (left[i] < right[j])
                    {
                        input[k] = left[i];
                        i++;
                    }
                    else
                    {
                        input[k] = right[j];
                        j++;
                    }
                }
                else
                {
                    break;
                }
            }

            for (int index = i; index < leftArrayLength; index++)
            {
                input[k] = left[index];
                k++;
            }


            for (int index = j; index < rightArrayLength; index++)
            {
                input[k] = right[index];
                k++;
            }
        }
    }
}

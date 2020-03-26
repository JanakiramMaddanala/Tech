using System;
using System.Collections.Generic;
using System.Text;

namespace Algorithms
{
    public class QuickSort
    {
        public static void Sort(int[] numbers, int start, int end)
        {
            if (start >= end)
            {
                return;
            }

            int pivot = Partition(numbers, start, end);
            Sort(numbers, start, pivot - 1);
            Sort(numbers, pivot + 1, end);

            Console.WriteLine(string.Join(",", numbers));
        }

        private static int Partition(int[] numbers, int start, int end)
        {
            int pivot = numbers[end];
            int i = 0;
            for (int j = 0; j < end; j++)
            {
                if (numbers[j] <= pivot)
                {
                    if (i != j)
                    {
                        int temp = numbers[i];
                        numbers[i] = numbers[j];
                        numbers[j] = temp;
                    }

                    i++;
                }
            }

            int a = numbers[i];
            numbers[i] = numbers[end];
            numbers[end] = a;

            return i;
        }
    }
}

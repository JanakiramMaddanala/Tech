using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Algorithms
{
    class ArrayManipulation
    {
        public static long Solve(int n, int[][] queries)
        {
            long[] output = new long[n];

            for (int i = 0; i < queries.Length; i++)
            {
                int start = queries[i][0] - 1;
                int end = queries[i][1];
                int value = queries[i][2];
                for (int j = start; j < end; j++)
                {
                    output[j] += value;
                }
            }

            long max = output.Max();

            Console.WriteLine(max);

            return max;
        }

        public static void Main1()
        {

            string[] nm = Console.ReadLine().Split(' ');

            int n = Convert.ToInt32(nm[0]);

            int m = Convert.ToInt32(nm[1]);

            int[][] queries = new int[m][];

            for (int i = 0; i < m; i++)
            {
                queries[i] = Array.ConvertAll(Console.ReadLine().Split(' '), queriesTemp => Convert.ToInt32(queriesTemp));
            }

            long result = Solve(n, queries);
        }
    }
}

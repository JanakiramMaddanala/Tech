using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Algorithms
{
    public class Transmitters
    {
        public static int Solve(int[] input, int radius)
        {
            int position = 0;
            for (int i = 1; i < input.Length; i++)
            {
                if (input[i] - input[0] <= radius)
                {
                    position = i;
                }
                else
                {
                    int bound = input[position] + radius;
                    int count = input.Count(c => c <= bound);

                    int[] newInput = new int[input.Length - count];
                    int k = 0;
                    for (int j = count; j < input.Length; j++)
                    {
                        newInput[k] = input[j];
                        k++;
                    }
                    return 1 + Solve(newInput, radius);
                }
            }

            if (input.Length == 0)
            {
                return 0;
            }

            return 1;
        }
    }
}

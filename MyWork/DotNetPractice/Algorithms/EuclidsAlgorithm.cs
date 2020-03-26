using System;
using System.Collections.Generic;
using System.Text;

namespace Algorithms
{
    public class EuclidsAlgorithm
    {
        public static int Run(int firstNumber, int secondNumber)
        {
            int max = firstNumber > secondNumber ? firstNumber : secondNumber;
            int min = firstNumber < secondNumber ? firstNumber : secondNumber;

            if (max % min == 0)
            {
                return min;
            }

            int remainder = max % min;
            max = min;
            min = remainder;

            return Run(max, min);
        }
    }
}

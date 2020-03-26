using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Algorithms
{
    public class MaxSubArray
    {
        public static int[] Solve(int[] input)
        {
            int maxSubArray = int.MinValue;
            int maxSubSequence = int.MinValue;
            int subArraycurrentMax = 0;
            int subSequenceCurrentMax = 0;
            int[] output = new int[2];

            for (int i = 0; i < input.Length; i++)
            {
                int currentElement = input[i];

                subArraycurrentMax += currentElement;

                if (subArraycurrentMax > maxSubArray)
                {
                    maxSubArray = subArraycurrentMax;
                }

                if (subArraycurrentMax < 0)
                {
                    subArraycurrentMax = 0;
                }

                if (currentElement >= 0)
                {
                    if (subSequenceCurrentMax < 0)
                    {
                        subSequenceCurrentMax = 0;
                    }

                    subSequenceCurrentMax += currentElement;
                }
                else
                {
                    if (maxSubSequence < 0 && currentElement > maxSubSequence)
                    {
                        subSequenceCurrentMax = currentElement;
                    }
                }

                if (subSequenceCurrentMax > maxSubSequence)
                {
                    maxSubSequence = subSequenceCurrentMax;
                }              
            }

            output[0] = maxSubArray;
            output[1] = maxSubSequence;

            return output;
        }
    }
}

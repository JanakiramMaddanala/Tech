using System;
using System.Collections.Generic;
using System.Text;

namespace Algorithms
{
    public class TowerOfHanoi
    {
        public void Move(int discCount, char from, char to, char inter)
        {
            if (discCount == 1)
            {
                Console.WriteLine($"Moving {discCount} from {from} to {to}");
                return;
            }
            Move(discCount - 1, from, inter, to);
            Console.WriteLine($"Moving {discCount} from {from} to {to}");
            Move(discCount - 1, inter, to, from);
        }
    }
}

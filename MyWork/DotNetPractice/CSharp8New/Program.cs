using System;
using System.Collections;

namespace CSharp8New
{
    class Program
    {
        static void Main(string[] args)
        {
            string value = string.Empty;
            string padleft5 = value.PadLeft(5);
            Console.WriteLine(padleft5);

            AsyncStreams.Demo();

            Console.ReadLine();
        }

        private static void Sample()
        {
            
            string value = "A";

            const string A = "A";
            const string B = "B";
            Console.WriteLine(Convert.ToChar(76));
            Console.WriteLine("(char)122 is {0}", (char)83);

            int[] numbers = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };

            foreach (var num in numbers)
            {
                if (num % 2 == 0)
                {
                    Console.WriteLine(num);
                }
                else
                {
                    switch (value)
                    {
                        case A: continue;
                        case B: break;
                        default:
                            break;
                    }
                    Console.WriteLine(num);
                }
            }
        }
    }
}

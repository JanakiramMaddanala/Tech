using System;
using System.Collections.Generic;
using System.Text;

namespace CSharp8New
{
    public class Ranges
    {
        public static void Show()
        {
            int[] integers = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };

            Console.WriteLine("All");

            foreach (var value in integers[0..^0])
            {
                Console.WriteLine(value);
            }

            Console.WriteLine("All");
            foreach (var value in integers[^10..^0])
            {
                Console.WriteLine(value);
            }

            Console.WriteLine("All");
            foreach (var value in integers[..])
            {
                Console.WriteLine(value);
            }




            Console.WriteLine("Except last one");
            foreach (var value in integers[0..^1])
            {
                Console.WriteLine(value);
            }

            Console.WriteLine("First five");
            foreach (var value in integers[0..5])
            {
                Console.WriteLine(value);
            }

            Console.WriteLine("Last five");
            foreach (var value in integers[^5..^0])
            {
                Console.WriteLine(value);
            }

            int middle = (10/2) - 1;
            Console.WriteLine("Middle Elemetns");
            var output = integers[middle..^middle];
            foreach (var value in output)
            {
                Console.WriteLine(value);
            }

        }
    }
}

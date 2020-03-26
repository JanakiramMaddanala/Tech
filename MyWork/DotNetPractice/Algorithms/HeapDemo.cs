using System;
using System.Collections.Generic;
using System.Text;

namespace Algorithms
{
    public class HeapDemo
    {
        public static void Run()
        {
            var heap = new Heap();

            heap.Add(10);
            heap.Add(20);
            heap.Add(30);
            heap.Add(2);
            heap.Add(15);
            heap.Add(100);
            heap.Add(-1);

            Console.WriteLine(heap);

            Console.ReadLine();
        }
    }
}

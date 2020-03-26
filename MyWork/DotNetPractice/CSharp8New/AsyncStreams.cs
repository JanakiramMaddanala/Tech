using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

namespace CSharp8New
{
    public class AsyncStreams
    {
        public static async void ShowAsync()
        {
            Console.WriteLine(Thread.CurrentThread.ManagedThreadId);

            var sequences = GenerateSequenceAsync();

            await foreach (var number in sequences)
            {
                Console.WriteLine($"{Thread.CurrentThread.ManagedThreadId} : {number}");
            }

            Console.WriteLine(Thread.CurrentThread.ManagedThreadId);

            Console.WriteLine("Cool I am here!");
        }

        public static async IAsyncEnumerable<int> GenerateSequenceAsync()
        {
            for (int i = 0; i < 5; i++)
            {
                await Task.Delay(1000);
                Console.WriteLine(Thread.CurrentThread.ManagedThreadId);
                yield return i;
            }
        }

        public static void Demo()
        {
            var sequences = GenerateSequence();

            foreach (var number in sequences)
            {
                Console.WriteLine(number);
            }
        }

        public static IEnumerable<int> GenerateSequence()
        {
            for (int i = 0; i < 20; i++)
            {
                Thread.Sleep(150000);
                yield return i;
            }
        }
    }
}

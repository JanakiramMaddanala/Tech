using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CSharp8NewFeatures
{
    public class AsyncStreams
    {
        public static async void Show()
        {
            //var sequences = GenerateSequence();
            //await foreach (var number in sequences)
            //{
            //    Console.WriteLine(number);
            //}
        }


        public static async IAsyncEnumerable<int> GenerateSequence()
        {
            for (int i = 0; i < 20; i++)
            {
                await Task.Delay(100);
                yield return i;
            }
        }
    }
}

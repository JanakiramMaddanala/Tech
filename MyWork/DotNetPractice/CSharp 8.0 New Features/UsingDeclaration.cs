using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CSharp8NewFeatures
{
    public class UsingDeclaration
    {
        public static void Show()
        {
            using var file = File.Open(@"", FileMode.Open);

            for (int i = 0; i < file.Length; i++)
            {
                Console.WriteLine($"Reading {i} bytes");
            }
            Console.WriteLine(file?.Name ?? "Closed");
        }

    }
}

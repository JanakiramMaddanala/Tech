using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CSharp8NewFeatures
{
    class Program
    {
        static void Main(string[] args)
        {
            string value = string.Empty;
            string padleft5 = value.PadLeft(5);
            Console.WriteLine(padleft5);
            UsingDeclaration.Show();

            Console.ReadLine();
        }
    }
}

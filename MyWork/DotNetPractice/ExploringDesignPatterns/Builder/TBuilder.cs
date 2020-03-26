using System;
using System.Collections.Generic;
using System.Text;

namespace ExploringDesignPatterns.Builder
{
    public class TBuilder : IObjectBuilder
    {
        public object Build()
        {
            Console.WriteLine("Building T Object");

            return "T";
        }
    }
}

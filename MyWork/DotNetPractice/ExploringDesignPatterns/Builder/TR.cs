using System;
using System.Collections.Generic;
using System.Text;

namespace ExploringDesignPatterns.Builder
{
    public class TRBuilder : IObjectBuilder
    {
        public object Build()
        {
            Console.WriteLine("Building TR");
            return "TR";
        }
    }
}

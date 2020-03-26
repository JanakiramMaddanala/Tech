using System;

namespace ExploringDesignPatterns.Factory
{
    public class NewYorkPizza : Pizza
    {
        public override void Box()
        {
           Console.WriteLine("Boxing in a steel ceramic box");
        }
    }
}
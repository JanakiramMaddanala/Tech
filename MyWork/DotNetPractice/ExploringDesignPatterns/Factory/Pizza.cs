using System;
using System.Collections.Generic;
using System.Text;

namespace ExploringDesignPatterns.Factory
{
    public abstract class Pizza
    {
        public void Cook()
        {
            Console.WriteLine("Cooking the pizza by using Ingredients");
        }

        public void Bake()
        {
            Console.WriteLine("Baking the pizza in Oven");
        }

        public void Cut()
        {
            Console.WriteLine("Cutting the Pizza into slices");
        }

        public virtual void Box()
        {
            Console.WriteLine("Using Stadard Box for packing");
        }

    }
}

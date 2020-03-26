using System;
using System.Collections.Generic;
using System.Text;

namespace ExploringDesignPatterns.Factory
{
    public abstract class PizzaStore
    {
        protected abstract Pizza CreatePizza();

        public void PreparePizza()
        {
            var pizza = CreatePizza();

            pizza.Bake();
            pizza.Cook();
            pizza.Cut();
            pizza.Box();

            Console.WriteLine("Pizza prepared.....");
        }
    }
}

using System;
using System.Collections.Generic;
using System.Text;

namespace ExploringDesignPatterns.Factory
{
    public class NewYorkPizzaStore : PizzaStore
    {
        public override Pizza CreatePizza()
        {
            return new NewYorkPizza();
        }
    }
}

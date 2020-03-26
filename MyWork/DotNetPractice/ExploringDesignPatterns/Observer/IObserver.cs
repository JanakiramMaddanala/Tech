using System;
using System.Collections.Generic;
using System.Text;

namespace ExploringDesignPatterns.Observer
{
    public interface IObserver
    {
        void Update(Observable observable, object data);
    }
}

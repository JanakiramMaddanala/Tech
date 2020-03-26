using System.Collections.Generic;

namespace ExploringDesignPatterns.Observer
{
    public class Observable
    {
        private readonly ICollection<IObserver> _observers;

        private bool stateChanged;

        public Observable()
        {
            _observers = new List<IObserver>();
        }

        public void AddObserver(IObserver observer)
        {
            _observers.Add(observer);
        }

        public void RemoveObserver(IObserver observer)
        {
            bool hasObserver = _observers.Contains(observer);

            if (hasObserver)
            {
                _observers.Remove(observer);
            }
        }

        public void NotifyObservers(object data)
        {
            if (stateChanged)
            {
                foreach (var observer in _observers)
                {
                    observer.Update(this, data);
                }

                stateChanged = false;
            }
        }

        public void NotifyObservers()
        {
            NotifyObservers(null);
        }

        public void SetStateChanged()
        {
            stateChanged = true;
        }
    }
}

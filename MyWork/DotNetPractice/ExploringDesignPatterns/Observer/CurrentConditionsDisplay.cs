using System;
using System.Collections.Generic;
using System.Text;

namespace ExploringDesignPatterns.Observer
{
    public class CurrentConditionsDisplay : IObserver
    {
        public CurrentConditionsDisplay(Observable observable)
        {
            observable.AddObserver(this);
        }
        public void Update(Observable observable, object data)
        {
            var weatherData = (data ?? observable) as WeatherData;

            if (weatherData != null)
            {
                Console.WriteLine($"Temparature : {weatherData.GetTemparature()}");
                Console.WriteLine($"Temparature : {weatherData.GetHumidity()}");
            }
        }
    }
}

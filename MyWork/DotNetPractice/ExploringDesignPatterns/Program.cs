using ExploringDesignPatterns.Observer;
using ExploringDesignPatterns.Singleton;
using System;

namespace ExploringDesignPatterns
{
    class Program
    {
        static void Main(string[] args)
        {
            #region ObserverPattern
            //var weatherData = new WeatherData();
            //_ = new CurrentConditionsDisplay(weatherData);
            //weatherData.SetMeasurements();
            //weatherData.NotifyObservers(); 
            #endregion

            #region Factory

            #endregion

            #region Singleton
            //var registrySettings = new RegistrySettings();
            var registrySettings = RegistrySettings.GetInstance();
            #endregion
        }
    }
}

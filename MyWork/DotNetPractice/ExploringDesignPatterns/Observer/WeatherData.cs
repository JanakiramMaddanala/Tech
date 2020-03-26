namespace ExploringDesignPatterns.Observer
{
    public class WeatherData : Observable
    {
        private int temparature;
        private int humdity;

        public int GetTemparature()
        {
            return temparature;
        }

        public int GetHumidity()
        {
            return humdity;
        }

        public void SetMeasurements()
        {
            temparature = 40;
            humdity = 20;
            OnMeasurementsChanged();
        }

        private void OnMeasurementsChanged()
        {
            SetStateChanged();
            NotifyObservers();
        }
    }
}

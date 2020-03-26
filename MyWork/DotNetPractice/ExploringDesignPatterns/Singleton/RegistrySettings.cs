using System;
using System.Collections.Generic;
using System.Text;

namespace ExploringDesignPatterns.Singleton
{
    public class RegistrySettings
    {
        // Eager Initialization
        //private static readonly RegistrySettings instance = new RegistrySettings();

        // Synchronization
        private static object lockObject = new object();
        private static Lazy<RegistrySettings> instance;
        RegistrySettings()
        {
        }

        public static RegistrySettings GetInstance()
        {
            lock (lockObject)
            {
                if (instance.Value == null)
                {
                    instance = new Lazy<RegistrySettings>();
                } 
            }

            return instance.Value;
        }
    }
}

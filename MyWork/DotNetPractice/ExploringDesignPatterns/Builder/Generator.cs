using System;
using System.Collections.Generic;
using System.Text;

namespace ExploringDesignPatterns.Builder
{
    public class Generator
    {
        private IObjectBuilder objectBuilder;

        public void Generate(Types types)
        {
            CreateObject(types);

            objectBuilder.Build();

        }

        private void CreateObject(Types canonicalTypes)
        {
            switch (canonicalTypes)
            {
                case Types.TR:
                    objectBuilder = new TRBuilder();
                    break;
                case Types.TL:
                    objectBuilder = new TBuilder();
                    break;
                case Types.ENC:
                    break;
                default:
                    break;
            }
        }
    }
}
